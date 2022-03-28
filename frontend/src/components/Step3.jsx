import OrderDetails from './OrderDetails';
import { ArrowLeftIcon, ArrowRightIcon, ScanIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';
import {useState} from 'react';
import Toggle from './Toggle';

const Step3 = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const address = state.address.split(',')
  const [expiry, setExpiry] = useState(state.expiry || expiry)
  const [date, setDate] = useState(new Date(state.expiry))
  const [choice, setChoice] = useState(state.choice)
  const [license, setLicense] = useState(state.license)
  console.log('Step3', state)

  const handleClick = (chosen) => {
    setChoice(state.choice || chosen)
  }

  const toStep2 = () => {
    navigate('/step2', {
      state: {
        expiry: expiry,
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
        phone: state.phone,
        sats: state.sats,
        fiat: state.fiat,
        choice: state.choice
      }
    })
  }

  const toStep3Manual = () => {
    navigate('/step3-manual', {
      state: {
        expiry: expiry,
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
        phone: state.phone,
        sats: state.sats,
        fiat: state.fiat,
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
        phone={state.phone}
        license={state.license}
      />
      <p className="text-4xl"> Enter your license plate number </p>
      <div className="flex flex-row space-x-4 w-full">
        <div className="basis-6/12">
          <Toggle active={choice === 'scan'} onClick={() => handleClick('scan')}>
            <ScanIcon className="w-12 h-12" />
            <span>Scan</span>
          </Toggle>
        </div>
        <div className="basis-6/12">
          <Toggle active={choice === 'manual'} onClick={() => handleClick('manual')}>
            <ScanIcon className="w-12 h-12" />
            <span>Type It In</span>
          </Toggle>
        </div>
      </div>
      <p className="text-sm text-neutral-500">
        Take a picture of your license plate, or type it in manually.
      </p>
      <div className="flex flex-row space-x-4">
        <Button size="large" importance="secondary" onClick={toStep2}>
          <span className="sr-only">Back</span> <ArrowLeftIcon className="w-8 h-8" />
        </Button>
        <Button size="large" importance="primary" onClick={toStep3Manual}>
          <span className="flex flex-row space-x-4"><span>Continue</span> <ArrowRightIcon className="w-8 h-8" /></span>
        </Button>
      </div>
    </Page>
  );
};

export default Step3;
