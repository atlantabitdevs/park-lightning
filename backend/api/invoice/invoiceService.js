const { common } = require('../../utils/transaction');
const { Transaction } = require('@ethereumjs/tx');
const { web3Eth, toHex } = require('../../utils/web3-connect');
const { cipher, sha256, rot13 } = require('../../utils/crypto');
const { stringMutations } = require('../../db/collection');
const STRING_DATA_CONTRACT_ABI =
    require('../../../contracts/artifacts/StringBroadcaster_metadata.json')
        .output.abi;
const STRING_DATA_CONTRACT_ADDRESS = process.env.STRING_DATA_CONTRACT_ADDRESS;
const STRING_DATA_CONTRACT = new web3Eth.Contract(
    STRING_DATA_CONTRACT_ABI,
    STRING_DATA_CONTRACT_ADDRESS
);

const stringify = (data) => {
    return JSON.stringify(data);
};
const debug = require('../../utils/debug');

const broadcastString = async (stringData, mutationType) => {
    try {
        const publicKey = process.env.PUBLIC_KEY;
        const privateKey = Buffer.from(process.env.PRIVATE_KEY, 'hex');

        const contractData = STRING_DATA_CONTRACT.methods
            .broadcastString(stringData, mutationType)
            .encodeABI();

        const nonce = await web3Eth.getTransactionCount(publicKey, 'pending');
        const gasEstimate = await web3Eth.estimateGas({
            from: publicKey,
            nonce: nonce,
            to: STRING_DATA_CONTRACT_ADDRESS,
            data: contractData,
        });

        const rawTxn = {
            nonce: toHex(nonce),
            gasPrice: toHex(300000000000),
            gasLimit: toHex(gasEstimate),
            to: STRING_DATA_CONTRACT_ADDRESS,
            value: '0x0',
            data: contractData,
        };

        const stringifyTxn = stringify(rawTxn);
        debug.info(`Raw Transaction: \n${stringifyTxn}\n-------------------`);

        const readyTX = toHex(
            Transaction.fromTxData(rawTxn, { common })
                .sign(privateKey)
                .serialize()
        );

        debug.info(`Broadcast ${stringData}: ${readyTX}\n-------------------`);

        web3Eth.sendSignedTransaction(readyTX);

        try {
            return await new Promise((resolve) => {
                STRING_DATA_CONTRACT.events
                    .Broadcast()
                    .on('data', async (event) => {
                        const response = {
                            stringData: event.returnValues.stringData,
                            mutationType: event.returnValues.mutationType,
                        };
                        const stringData = response.stringData;
                        let mutatedString;
                        if (mutationType === 'rot13')
                            mutatedString = await rot13(stringData);
                        else if (mutationType === 'sha256')
                            mutatedString = await sha256(stringData);
                        else mutatedString = await cipher(stringData);

                        let m1 = `PlainTestString=${response.stringData}\n`,
                            m2 = `MutationType=${response.mutationType}\n`,
                            m3 = `MutatedString=${mutatedString}`;
                        debug.info(`Broadcast Event:\n${m1}${m2}${m3}`);
                        const dbTxn = await stringMutations.insertOne({
                            plainTextString: response.stringData,
                            mutationType: response.mutationType,
                            mutatedString: mutatedString,
                        });
                        if (dbTxn.acknowledged) {
                            debug.info(
                                `DB Insert Success: ${dbTxn.insertedId}`
                            );
                        } else {
                            debug.info(`DB Insert Fail: ${dbTxn}`);
                        }
                        resolve({ success: true, mutatedString });
                    })
                    .on('error', (error, receipt) => {
                        const fileInfo = `${filename}:${line.get().line}`;
                        debug.error(`${fileInfo} - ${error.message}`);
                        debug.error(
                            `Broadcast Event Error: ${stringify(error)}`
                        );
                        debug.error(
                            `Broadcast Event Error Receipt: ${stringify(
                                receipt
                            )}`
                        );
                        resolve({ success: false, error: error.message });
                    });
            });
        } catch (error) {
            debug.error(error.stack);
            throw new Error(error);
        }
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

const mutations = async () => {
    try {
        const cursor = await stringMutations.find({});
        const mutations = [];
        await cursor.forEach((element) => {
            mutations.push({
                plainTextString: element.plainTextString,
                mutationType: element.mutationType,
                mutatedString: element.mutatedString,
            });
        });
        return { success: true, mutations };
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

module.exports = { broadcastString, mutations };
