import OrderDetails from './OrderDetails';
import Header from './Header';
import DurationSelection from './DurationSelection';
import {ArrowLeftIcon, ArrowRightIcon, MinusIcon, PlusIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import {Link, useLocation} from 'react-router-dom';
import React from 'react';
import Input from './Input';
import { useSearchParams, useNavigate } from 'react-router-dom';

const ParkingUserLanding = (props) => {
  // const [searchParams] = useSearchParams();
  const location = useLocation()
  const [location1, setLocation1] = React.useState('Parking Spot 7')
  const [location2, setLocation2] = React.useState('123 Euclid Ave')
  const [location3, setLocation3] = React.useState('Atlanta, GA 30312')
  // const [expiry, setExpiry] = React.useState(searchParams.get('expiry'))
  // const [date, setDate] = React.useState(new Date(searchParams.get('expiry')/1000))
  const [expiry, setExpiry] = React.useState(location.state.expiry)
  const [date, setDate] = React.useState(new Date(location.state.expiry))
  


  

  return (
      <Page>
        <OrderDetails
          spot={location.state.spotDetails.spotNumber}
          location1={location.state.spotDetails.address.split(',')[0]}
          location2={location.state.spotDetails.address.split(',')[1]}
          location3={location.state.spotDetails.address.split(',')[2]}
          expiry={date.getHours() + ":" + date.getMinutes()}
        />
        
        <p className="text-4xl">
          Enter your phone number
        </p>
        
        <Input type="tel" placeholder="(404) 123-4567" />
        
        <p className="text-sm text-neutral-500">
          This is so we can send you your receipt and notifications if your parking is going to expire.
        </p>
        
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
