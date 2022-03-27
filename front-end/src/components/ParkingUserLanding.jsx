import OrderDetails from './OrderDetails';
import Header from './Header';
import DurationSelection from './DurationSelection';
import {ArrowRightIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';

const ParkingUserLanding = () => {
    return (
      <Page>
        <p className="text-4xl">
            <strong>Parking Spot 7</strong><br />
            123 Euclid Ave
        </p>
        <p className="text-3xl">
            Welcome to Arion.<br />Pay for your parking with bitcoin in 4 easy steps.
        </p>
        <Button size="large" importance="primary" href="/test">
          <span className="flex flex-row space-x-4"><span>Step 1</span> <ArrowRightIcon className="w-8 h-8" /></span>
        </Button>
      </Page>  
    );
};

export default ParkingUserLanding;
