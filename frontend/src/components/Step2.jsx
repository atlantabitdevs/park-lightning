import OrderDetails from './OrderDetails';
import Header from './Header';
import DurationSelection from './DurationSelection';
import {ArrowLeftIcon, ArrowRightIcon, MinusIcon, PlusIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import {Link} from 'react-router-dom';
import React from 'react';
import Input from './Input';

const ParkingUserLanding = () => {
    const [location1, setLocation1] = React.useState('Parking Spot 7')
    const [location2, setLocation2] = React.useState('123 Euclid Ave')
    const [expiry, setExpiry] = React.useState('9:30pm')
  
    return (
      <Page>
        <OrderDetails location1={location1} location2={location2} expiry={expiry} />
        <p className="text-4xl">
          Enter your phone number
        </p>
        
        <Input type="tel" placeholder="(404) 123-4567" />
        
        <div className="flex flex-row space-x-4">
          <Link to="/step1">
            <Button size="large" importance="secondary" href="/test">
              <span className="sr-only">Back</span> <ArrowLeftIcon className="w-8 h-8" />
            </Button>
          </Link>
          <Link to="/step3">
            <Button size="large" importance="primary" href="/test">
              <span className="flex flex-row space-x-4"><span>Step 3</span> <ArrowRightIcon className="w-8 h-8" /></span>
            </Button>
          </Link>
        </div>
      </Page>  
    );
};

export default ParkingUserLanding;
