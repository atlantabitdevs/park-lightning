import OrderDetails from './OrderDetails';
import Header from './Header';
import DurationSelection from './DurationSelection';
import {
  ArrowLeftIcon,
  ArrowRightIcon, CopyIcon,
  MinusIcon,
  PlusIcon,
  WalletIcon
} from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import {Link} from 'react-router-dom';
import React from 'react';
import Input from './Input';

const Step3Manual = () => {
    const [location1, setLocation1] = React.useState('Parking Spot 7')
    const [location2, setLocation2] = React.useState('123 Euclid Ave')
    const [phone, setPhone] = React.useState('4041234567')
    const [license, setLicense] = React.useState('ABC 123')
    const [expiry, setExpiry] = React.useState('9:30pm')
  
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
