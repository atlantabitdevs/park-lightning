import OrderDetails from './OrderDetails';
import Header from './Header';
import DurationSelection from './DurationSelection';
import Page from './Page';
import Button from './Button';

const ParkingUserLanding = () => {
    return (
      <Page>
        <h1>hello world</h1>
        <Button size="large" importance="primary">Test</Button>
        <Button size="large" importance="secondary">Test 2</Button>
        <Button size="small" importance="primary">Test</Button>
        <Button size="small" importance="secondary">Test 2</Button>
        <Button size="minimal" importance="primary">Test</Button>
        <Button size="minimal" importance="secondary">Test 2</Button>
      </Page>  
    );
};

export default ParkingUserLanding;
