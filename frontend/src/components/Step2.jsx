import OrderDetails from './OrderDetails';
import { ArrowLeftIcon, ArrowRightIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';
import {useState} from 'react';
import Input from './Input';

const ParkingUserLanding = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const address = state.address.split(',')
  console.log(state)

  const [expiry, setExpiry] = useState(state.expiry)
  const [phone, setPhone] = useState()
  const [date, setDate] = useState(new Date(state.expiry))

  const toStep1 = () => {
    navigate('/step1', { state: { expiry: expiry, address: state.address, spotNumber: state.spotNumber, occupied: state.occupied, phone: phone } })
  }

  const toStep3 = () => {
    navigate('/step3', { state: { expiry: expiry, address: state.address, spotNumber: state.spotNumber, occupied: state.occupied, phone: phone } })
  }

  return (
<<<<<<< HEAD
    <Page>
      <OrderDetails
        location1={`Parking Spot #${state.spotNumber}`}
        location2={address[0]} location3={address[1] + address[2]}
        expiry={date.getHours() + ":" + date.getMinutes()}
      />
      <p className="text-4xl">
        Enter your phone number
      </p>

      <Input type="tel" placeholder="(404) 123-4567" onChange={event => setPhone(event.target.value)}/>

      <p className="text-sm text-neutral-500">
        This is so we can send you your receipt and notifications if your parking is going to expire.
      </p>

      <div className="flex flex-row space-x-4">
        <Button size="large" importance="secondary" onClick={toStep1}>
          <span className="sr-only">Back</span> <ArrowLeftIcon className="w-8 h-8" />
        </Button>
        <Button size="large" importance="primary" onClick={toStep3}>
          <span className="flex flex-row space-x-4"><span>Step 3</span> <ArrowRightIcon className="w-8 h-8" /></span>
        </Button>
      </div>
    </Page>
  );
=======
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
>>>>>>> cfe40edab8034ce0b66ab4b379bdd5e862ad049c
};

export default ParkingUserLanding;
