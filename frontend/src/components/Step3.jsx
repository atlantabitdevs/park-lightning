import OrderDetails from './OrderDetails';
import Header from './Header';
import DurationSelection from './DurationSelection';
import {ArrowLeftIcon, ArrowRightIcon, MinusIcon, PlusIcon, ScanIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import {Link} from 'react-router-dom';
import React from 'react';
import Toggle from './Toggle';

const Step3 = () => {
    const [location1, setLocation1] = React.useState('Parking Spot 7')
    const [location2, setLocation2] = React.useState('123 Euclid Ave')
    const [expiry, setExpiry] = React.useState('9:30pm')
    const [phone, setPhone] = React.useState('4041234567')
    const [choice, setChoice] = React.useState('')
    
    function handleToggle(){
      setChoice('manual')
    }
  
    return (
      <Page>
        <OrderDetails location1={location1} location2={location2} expiry={expiry} phone={phone} />
        <p className="text-4xl">
          Enter your license plate number
        </p>
        
        <div className="flex flex-row space-x-4 w-full">
          <div className="basis-6/12">
            <Toggle active={choice === 'scan'} onClick={()=>{setChoice('scan')}}>
              <ScanIcon className="w-12 h-12" />
              <span>Scan</span>
            </Toggle>
          </div>
          <div className="basis-6/12">
            <Toggle active={choice === 'manual'} onClick={()=>{setChoice('manual')}}>
              <ScanIcon className="w-12 h-12" />
              <span>Type It In</span>
            </Toggle>
          </div>
        </div>
        
        <div className="flex flex-row space-x-4">
          <Link to="/step2">
            <Button size="large" importance="secondary">
              <span className="sr-only">Back</span> <ArrowLeftIcon className="w-8 h-8" />
            </Button>
          </Link>
          <Link to="/step3-manual">
            <Button size="large" importance="primary">
              <span className="flex flex-row space-x-4"><span>Continue</span> <ArrowRightIcon className="w-8 h-8" /></span>
            </Button>
          </Link>
        </div>
      </Page>  
    );
};

export default Step3;
