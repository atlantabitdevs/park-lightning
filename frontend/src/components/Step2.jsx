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
  const [expiry, setExpiry] = useState(state.expiry || expiry)
  const [date, setDate] = useState(new Date(state.expiry))
  const [phone, setPhone] = useState(state.phone)
  const [license, setLicense] = useState(state.license)
  console.log('Step2', state)

  const handleChange = (e) => {
    setPhone(state.phone || e.target.value)
  }

  const toStep1 = () => {
    navigate('/step1', {
      state: {
        expiry: expiry,
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
        phone: state.phone,
        sats: state.sats,
        fiat: state.fiat
      }
    })
  }

  const toStep3 = () => {
    navigate('/step3', {
      state: {
        expiry: expiry,
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
        sats: state.sats,
        fiat: state.fiat,
        phone: phone 
      }
    })
  }

  return (
    <Page>
      <OrderDetails
        location1={`Parking Spot #${state.spotNumber}`}
        location2={address[0]}
        location3={address[1] + address[2]}
        expiry={(date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}
        phone={state.phone}
        license={state.license}
      />
      <p className="text-4xl">
        Enter your phone number
      </p>

      <Input value={phone} type="tel" placeholder="(404) 123-4567" onChange={handleChange}/>

      <p className="text-sm text-neutral-500">This is so we can send you your receipt and notifications if your parking is going to expire.</p>

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
};

export default ParkingUserLanding;
