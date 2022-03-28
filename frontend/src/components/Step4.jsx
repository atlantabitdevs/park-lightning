import OrderDetails from './OrderDetails';
import {
  ArrowLeftIcon,
  CopyIcon,
  WalletIcon
} from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import {ThumbDownIcon, ThumbUpIcon} from '@heroicons/react/solid';

const Step4 = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const address = state.address.split(',')
  const [uuid] = useState('da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f')
  
  const [expiry, setExpiry] = useState(state.expiry)
  const [date, setDate] = useState(new Date(state.expiry))
  const [phone, setPhone] = useState(state.phone)
  const [choice, setChoice] = useState(state.choice)
  const [license, setLicense] = useState(state.license)

  const [invoice, setInvoice] = useState('')
  const [invoiceId, setInvoiceId] = useState('')

  const [fiat, setFiat] = useState(state.fiat)
  const [sats, setSats] = useState(state.sats)

  const [checkoutComplete, setCheckoutComplete] = useState(false)
  const [elapsed, setElapsed] = useState(1)

  console.log('Step4', state)

  const toStep3Manual = () => {
    navigate('/step3-manual', {
      state: {
        expiry: expiry,
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
        phone: state.phone,
        choice: state.choice,
        sats: state.sats,
        fiat: state.fiat,
        license: license
      }
    })
  }
  
  function getInvoice(amount, license, uuid){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "amount": amount,
      "memo": {
        "licensePlate": license,
        "uuid": uuid,
        "duration": 1800
      }
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://park-lightning-foiudx76uq-ue.a.run.app/api/v1/invoice/create", requestOptions)
      .then(response => response.text())
      .then(result => {
        setInvoice(JSON.parse(result).message.lightning_invoice.payreq)
        setInvoiceId(JSON.parse(result).message.id)
      })
      .catch(error => console.log('error', error));
  }
  
  function checkInvoice(invoiceId){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "id": invoiceId
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    
    
    fetch("https://park-lightning-foiudx76uq-ue.a.run.app/api/v1/invoice/check", requestOptions)
      .then(response => response.text())
      .then(async result => {
        const isPaid = await JSON.parse(result).message.status
        if(isPaid === 'paid') {
          setCheckoutComplete(true)
          return true
        }
        else {
          return false
        }
      })
      .catch(error => {
        console.log('error', error)
        return false
      });
  }
  
  function share() {
    if (navigator.share) {
      navigator.share({
        title: 'Arion Invoice',
        url: 'bitcoin:bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=' + invoice,
        invoice: invoice
      }).then(() => {
        console.log('Thanks for sharing!');
      })
        .catch(console.error);
    }
    else {
      console.log('No navigator sharing API')
    }
  }

  function copyInvoice() {
    navigator.clipboard.writeText(invoice).then(
      ()=>{ console.log("Copied") },
      err=>{ console.log("An error occurred copying") }
    )
  }
  
  useEffect(()=>{
    if(!invoice) {
      getInvoice(fiat, license, uuid)
    }
  })

  useEffect(()=>{
    let timer;
    if(invoice && !checkoutComplete) {
      timer = setInterval(() => {
        setElapsed(elapsed+1);
        checkInvoice(invoiceId)
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [checkoutComplete, elapsed, invoice])
  
    return (
      <Page>
        <div className={checkoutComplete ? 'space-y-4' : 'hidden'}>
          <p className="text-4xl">Your parking is paid.</p>
          
          <p className="text-xl">
            We’ll text you a receipt, and notify you when your parking is nearing expiration.
          </p>
        </div>

        <OrderDetails
          location1={`Parking Spot #${state.spotNumber}`}
          location2={address[0]}
          location3={address[1] + address[2]}
          expiry={(date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}
          phone={state.phone}
          license={state.license}
        />
        
        <div className={checkoutComplete ? "hidden" : "space-y-2"}>
          <p className="text-4xl">
            Please pay
          </p>
          <p className="text-8xl">
            <small>$</small>{fiat}
          </p>
          <p className="text-4xl">
            {sats} sats
          </p>
        </div>

        <div className={checkoutComplete ? "hidden" : "flex flex-col space-y-4"}>
          <Button size="large" importance="primary" onClick={share}>
            <span className="flex flex-row space-x-4"><span>Open Wallet</span> <WalletIcon className="w-8 h-8" /></span>
          </Button>
          <Button size="large" importance="primary" onClick={copyInvoice}>
            <span className="flex flex-row space-x-4"><span>Copy Invoice</span> <CopyIcon className="w-8 h-8" /></span>
          </Button>
            <Button size="minimal" importance="secondary" onClick={toStep3Manual}>
              <span className="flex flex-row space-x-4 w-full items-center justify-center"><ArrowLeftIcon className="w-8 h-8" /> <span>Back</span></span>
            </Button>
        </div>

        <div className={checkoutComplete ? 'space-y-4 flex flex-col items-center justify-center' : 'hidden'}>
          <p className="text-4xl">How was your parking experience?</p>

          <div className="flex flex-row space-x-4">
            <Button size="large" importance="secondary" onClick={()=>{alert('Feedback received!')}}>
              <span className="sr-only">Bad</span> <ThumbDownIcon className="w-8 h-8" />
            </Button>
            <Button size="large" importance="primary" onClick={()=>{alert('Feedback received!')}}>
              <span className="sr-only">Good</span> <ThumbUpIcon className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </Page>  
    );
};

export default Step4;
