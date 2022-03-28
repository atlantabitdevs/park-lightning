import OrderDetails from './OrderDetails';
import {
  ArrowLeftIcon,
  CopyIcon,
  WalletIcon
} from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Step3Manual = () => {
    const [location1, setLocation1] = React.useState('Parking Spot 7')
    const [location2, setLocation2] = React.useState('123 Euclid Ave')
    const [phone, setPhone] = React.useState('4041234567')
    const [license, setLicense] = React.useState('ABC 123')
    const [expiry, setExpiry] = React.useState('9:30pm')
    const [invoice, setInvoice] = React.useState('')
    const [parkingPrice] = React.useState(0.01)
    const [checkoutComplete, setCheckoutComplete] = React.useState(false)
    const [elapsed, setElapsed] = React.useState(1)
    const [uuid] = React.useState('da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f')
    const [invoiceId, setInvoiceId] = React.useState('')
  
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
  
  React.useEffect(()=>{
    if(!invoice) {
      getInvoice(parkingPrice, license, uuid)
    }
  })

  React.useEffect(()=>{
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
        <OrderDetails location1={location1} location2={location2} expiry={expiry} phone={phone} license={license} />
        
        <div className="space-y-2">
          <p className="text-4xl">
            Please pay
          </p>
          <p className="text-8xl">
            <small>$</small>5
          </p>
          <p className="text-4xl">
            11250 sats
          </p>
        </div>
        
        <p className={checkoutComplete ? 'hidden' : ''}>{invoice}</p>

        <p className={!checkoutComplete ? 'hidden' : ''}>Paid invoice</p>
        
        <div className="flex flex-col space-y-4">
          <Button size="large" importance="primary">
            <span className="flex flex-row space-x-4"><span>Open Wallet</span> <WalletIcon className="w-8 h-8" /></span>
          </Button>
          <Button size="large" importance="primary">
            <span className="flex flex-row space-x-4"><span>Copy Invoice</span> <CopyIcon className="w-8 h-8" /></span>
          </Button>
          <Link to="/step3-manual">
            <Button size="minimal" importance="secondary">
              <span className="flex flex-row space-x-4 w-full items-center justify-center"><ArrowLeftIcon className="w-8 h-8" /> <span>Back</span></span>
            </Button>
          </Link>
        </div>
      </Page>  
    );
};

export default Step3Manual;
