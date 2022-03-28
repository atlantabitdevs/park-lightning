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
  const navigate = useNavigate();
  const state = useLocation().state;
  const address = state.address.split(',')
  const [expiry, setExpiry] = useState(state.expiry)
  const [date, setDate] = useState(new Date(state.expiry))
  const [phone, setPhone] = useState(state.phone)
  const [choice, setChoice] = useState('')

  const toStep3Manual = () => {
    navigate('/step3-manual', {
      state: {
        expiry: expiry,
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
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
        expiry={date.getHours() + ":" + date.getMinutes()}
        phone={phone}
      />
      <div className="space-y-2">
        <p className="text-4xl">Please pay</p>
        <p className="text-8xl"><small>$</small>5</p>
        <p className="text-4xl"> 11250 sats</p>
      </div>
      <div className="flex flex-col space-y-4">
        <Button size="large" importance="primary">
          <span className="flex flex-row space-x-4">
            <span>Open Wallet</span>
            <WalletIcon className="w-8 h-8" />
          </span>
        </Button>
        <Button size="large" importance="primary">
          <span className="flex flex-row space-x-4">
            <span>Copy Invoice</span>
            <CopyIcon className="w-8 h-8" />
          </span>
        </Button>
        <Button size="minimal" importance="secondary" onClick={toStep3Manual}>
          <span className="flex flex-row space-x-4 w-full items-center justify-center">
            <ArrowLeftIcon className="w-8 h-8" />
            <span>Back</span>
          </span>
        </Button>
      </div>
    </Page>
  );
};

export default Step3Manual;
