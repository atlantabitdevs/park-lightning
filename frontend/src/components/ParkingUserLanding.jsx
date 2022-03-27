import OrderDetails from './OrderDetails';
import Header from './Header';
import DurationSelection from './DurationSelection';

const ParkingUserLanding = () => {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <OrderDetails className="my-6" />
            <DurationSelection />
        </div>
    );
};

export default ParkingUserLanding;
