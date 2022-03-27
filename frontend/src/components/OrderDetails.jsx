import { useEffect, useState } from 'react';
import { GetSpotDetails } from '../serviceRequests/spot'

const initialState = {
    address: '',
    spotNumber: '',
    occupied: ''
}

const uuid = 'da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f'

const OrderDetails = ({ className }) => {
    const [spotDetails, setSpotDetails] = useState(initialState);
    GetSpotDetails(uuid).then(spotDetails => {
        // console.log(spotDetails.message)
        setSpotDetails(spotDetails.message)
    })
    return (
        <div className={className}>
            {console.log(spotDetails)}
            <h1 className="text-center font-bold text-2xl">Spot #{spotDetails.spotNumber}</h1>
            <h1 className="text-2xl">{spotDetails.address}</h1>
            <h1 className="text-2xl">{"Free" ? spotDetails.occupied : "Occupied"}</h1>
        </div>
    );
};

export default OrderDetails;
