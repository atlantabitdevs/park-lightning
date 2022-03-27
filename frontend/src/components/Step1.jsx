import OrderDetails from './OrderDetails';
import Header from './Header';
import DurationSelection from './DurationSelection';
import {ArrowLeftIcon, ArrowRightIcon, MinusIcon, PlusIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import {Link} from 'react-router-dom';

const ParkingUserLanding = () => {
    return (
      <Page>
        <p className="text-3xl">
            <strong>Parking Spot 7</strong><br />
            123 Euclid Ave
        </p>
        <p className="text-4xl">
          How long would you like to park?
        </p>
        
        <div className="bg-gradient-to-b from-white to-prl-gray-light border-solid border-2 border-neutral-200 w-full p-8 rounded-3xl flex flex-row space-x-8">
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="font-bold text-xl">Expires</h3>
              <p className="text-4xl">1 hour</p>
              <p className="text-2xl">9:30pm</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xl">Price</h3>
              <p className="text-4xl">$5</p>
              <p className="text-2xl">11,250 sats</p>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <Button size="large" importance="secondary" href="/test">
              <PlusIcon className="w-8 h-8" />
            </Button>
            <Button size="large" importance="secondary" href="/test">
              <MinusIcon className="w-8 h-8" />
            </Button>
          </div>
        </div>
        
        <div className="flex flex-row space-x-4">
          <Link to="/">
            <Button size="large" importance="secondary" href="/test">
              <span className="sr-only">Back</span> <ArrowLeftIcon className="w-8 h-8" />
            </Button>
          </Link>
          <Link to="/step1">
            <Button size="large" importance="primary" href="/test">
              <span className="flex flex-row space-x-4"><span>Step 2</span> <ArrowRightIcon className="w-8 h-8" /></span>
            </Button>
          </Link>
        </div>
      </Page>  
    );
};

export default ParkingUserLanding;
