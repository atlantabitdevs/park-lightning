import {useEffect, useState} from 'react';
import { ArrowRightIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GetSpotDetails } from '../serviceRequests/spot'

const ParkingUserLanding = () => {
    const navigate = useNavigate();
    const [spotDetails, setSpotDetails] = useState({ address: '', spotNumber: '', occupied: '' });
    const [uuid, setUuid] = useState('da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f');

    
    
    const [searchParams] = useSearchParams();
    
    
    const toStep1 = () => {
        navigate('/step1', { state: { address: spotDetails.address, spotNumber: spotDetails.spotNumber, occupied: spotDetails.occupied } });
    }
    
    useEffect(()=>{
      if(searchParams.get('spotId')) {
        console.log(searchParams.get('spotId'))
        setUuid(searchParams.get('spotId'))
      }
      if(!spotDetails.spotNumber && uuid) {
        GetSpotDetails(uuid)
          .then(spotDetails => {
            setSpotDetails(spotDetails.message)
          })
          .catch(err => {
            console.log(err);
          })
      }
    }, [spotDetails, uuid])

    return (
        <Page>
            <p className="text-3xl">
                <strong>Spot #{spotDetails.spotNumber}</strong><br />
                {spotDetails.address.split(',')[0]}
                <br />
                {spotDetails.address.split(',')[1]}, {spotDetails.address.split(',')[2]}
            </p>
            <p className="text-3xl">
                Welcome to Arion.<br />Pay for your parking with bitcoin in 4 easy steps.
            </p>
            <Button size="large" importance="primary" onClick={toStep1}>
                <span className="flex flex-row space-x-4"><span>Step 1</span> <ArrowRightIcon className="w-8 h-8" /></span>
            </Button>
        </Page>
    );
};

export default ParkingUserLanding;
