import OrderDetails from './OrderDetails';
import Header from './Header';
import DurationSelection from './DurationSelection';
import {ArrowLeftIcon, ArrowRightIcon, MinusIcon, PlusIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import {Link} from 'react-router-dom';
import React from 'react';
import Input from './Input';

const Step3Manual = () => {
    const [location1, setLocation1] = React.useState('Parking Spot 7')
    const [location2, setLocation2] = React.useState('123 Euclid Ave')
    const [phone, setPhone] = React.useState('4041234567')
    const [expiry, setExpiry] = React.useState('9:30pm')
  
    return (
      <Page>
        <OrderDetails location1={location1} location2={location2} expiry={expiry} phone={phone} />
        <p className="text-4xl">
          Enter your license plate
        </p>
        
        <Input type="text" placeholder="ABC 123" />
        
        <div className="flex flex-row space-x-4">
          <Link to="/step3">
            <Button size="large" importance="secondary" href="/step3">
              <span className="sr-only">Back</span> <ArrowLeftIcon className="w-8 h-8" />
            </Button>
          </Link>
          <Link to="/step4">
            <Button size="large" importance="primary" href="/step4">
              <span className="flex flex-row space-x-4"><span>Step 4</span> <ArrowRightIcon className="w-8 h-8" /></span>
            </Button>
          </Link>
        </div>
      </Page>  
    );
};

export default Step3Manual;
