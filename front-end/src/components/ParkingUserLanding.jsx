import OrderDetails from './OrderDetails';
import HeaderComponent from './HeaderComponent';

const ParkingUserLanding = () => {
    return (
        <div className="flex flex-col items-center">
            <HeaderComponent />
            <OrderDetails />
        </div>
    );
};

export default ParkingUserLanding;
