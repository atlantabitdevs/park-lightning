import OrderDetails from './OrderDetails';
import Header from './Header';
import DurationSelection from './DurationSelection';
import { useState } from 'react';
import { ArrowRightIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { GetSpotDetails } from '../serviceRequests/spot'
const uuid = 'da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f'

const ParkingUserLanding = () => {
    const navigate = useNavigate();
    const [spotDetails, setSpotDetails] = useState({ address: '', spotNumber: '', occupied: '' });
    GetSpotDetails(uuid)
        .then(spotDetails => {
            // console.log(spotDetails.message)
            setSpotDetails(spotDetails.message)
        })
        .catch(err => {
            console.log(err);
        })
    const toStep1 = () => {
        navigate('/step1', { state: spotDetails });
    }
    return (
        <Page>
            <p className="text-3xl">
                <strong>Spot #{spotDetails.spotNumber}</strong><br />
                {spotDetails.address.split(',')[0]}
                <br />
                {spotDetails.address.split(',')[1]}, {spotDetails.address.split(',')[2]}
            </p>
            <p className="text-3xl">
                Welcome to Arion.<br />Pay for your parking with bitcoin in 4 easy steps.
            </p>
            {/* <Link to={{ pathname: "/step1", state: 'test' }}> */}
            <Button size="large" importance="primary" href="/test">
                <a onClick={() => { toStep1() }}> <span className="flex flex-row space-x-4"><span>Step 1</span> <ArrowRightIcon className="w-8 h-8" /></span> </a>
            </Button>
            {/* </Link> */}
        </Page>
    );
};

export default ParkingUserLanding;
