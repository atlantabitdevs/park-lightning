import OrderDetails from './OrderDetails';
import { ArrowLeftIcon, ArrowRightIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Input from './Input';

const Step3Manual = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const address = state.address.split(',')
  const [expiry, setExpiry] = useState(state.expiry)
  const [date, setDate] = useState(new Date(state.expiry))
  const [phone, setPhone] = useState(state.phone)
  const [choice, setChoice] = useState('')

  const toStep3 = () => {
    navigate('/step3', {
      state: {
        expiry: expiry,
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
        phone: phone
      }
    })
  }

  const toStep4 = () => {
    navigate('/step4', {
      state: {
        expiry: expiry,
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
        phone: phone,
        choice: choice
      }
    })
  }

  return (
    <Page>
      <OrderDetails
        location1={`Parking Spot #${state.spotNumber}`}
        location2={address[0]}
        location3={address[1] + address[2]}
        expiry={date.getHours() + ":" + date.getMinutes()}
        phone={phone}
      />
      <p className="text-4xl">
        Enter your license plate
      </p>

      <Input type="text" placeholder="ABC 123" />

      <div className="flex flex-row space-x-4">
        <Button size="large" importance="secondary" onClick={toStep3}>
          <span className="sr-only">Back</span> <ArrowLeftIcon className="w-8 h-8" />
        </Button>
        <Button size="large" importance="primary" onClick={toStep4}>
          <span className="flex flex-row space-x-4"><span>Step 4</span> <ArrowRightIcon className="w-8 h-8" /></span>
        </Button>
      </div>
    </Page>
  );
};

export default Step3Manual;
