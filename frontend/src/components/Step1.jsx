import {ArrowLeftIcon, ArrowRightIcon, MinusIcon, PlusIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import React from 'react';

const ParkingUserLanding = () => {
    const [timeIncrements, setTimeIncrements] = React.useState(1)
    const timeUnit = 30 // minutes
    const timeMax = 1440 // 24 * 30 minutes
    const timeMin = 30
    const [expiry, setExpiry] = React.useState(new Date())
    const [btcPrice, setBtcPrice] = React.useState(46482.17)
    const price = 2
  const location = useLocation()
    
  console.log(location.state)

  const navigate = useNavigate();

  const toStep2 = () => {
    navigate('/step2', {state:{expiry: expiry.getTime()}})
  }
  
    const increaseTime = () => {
      if((timeIncrements * timeUnit) < timeMax) {
        setTimeIncrements(timeIncrements + 1)
        buildExpiry()
      }
    }

    const decreaseTime = () => {
      if((timeIncrements * timeUnit) > timeMin) {
        setTimeIncrements(timeIncrements - 1)
        buildExpiry()
      }
    }
    
    const buildExpiry = () => {
      let newExpiry = new Date(expiry.getTime() + (timeIncrements * timeUnit * 60 * 1000))
      setExpiry(newExpiry)
    }
    
    return (
      <Page>
        <p className="text-3xl">
             <strong>Spot #{location.state.spotDetails.spotNumber}</strong><br />
            {location.state.spotDetails.address.split(',')[0]}
            <br />
            {location.state.spotDetails.address.split(',')[1]}, {location.state.spotDetails.address.split(',')[2]}
        </p>
        <p className="text-4xl">
          How long would you like to park?
        </p>
        
        <div className="bg-gradient-to-b from-white to-prk-gray-light border-solid border-2 border-neutral-200 w-full p-8 rounded-3xl flex flex-row space-x-8">
          <div className="space-y-8 basis-8/12">
            <div className="space-y-1">
              <h3 className="font-bold text-xl">Expires</h3>
              <p className="text-4xl">{timeIncrements === 1 ? '30 mins' : ((timeIncrements * timeUnit)/60) + ' hours'}</p>
              <p className="text-2xl">{expiry.getHours() + ":" + expiry.getMinutes()}</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xl">Price</h3>
              <p className="text-4xl">${timeIncrements * price}</p>
              <p className="text-2xl">{ (((timeIncrements* price)/btcPrice) * 100000000).toFixed(0) } sats</p>
            </div>
          </div>
          <div className="flex flex-col space-y-8 basis-4/12">
            <Button size="large" importance="secondary" href="/test" onClick={increaseTime}>
              <PlusIcon className="w-8 h-8" />
            </Button>
            <Button size="large" importance="secondary" href="/test" onClick={decreaseTime}>
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
          {/*<Link to={{*/}
          {/*  pathname: "/step2",*/}
          {/*  search: "?expiry=" + expiry.getTime(),*/}
          {/*}}>*/}
            <Button size="large" importance="primary" onClick={toStep2}>
              <span className="flex flex-row space-x-4"><span>Step 2</span> <ArrowRightIcon className="w-8 h-8" /></span>
            </Button>
          {/*</Link>*/}
        </div>
      </Page>  
    );
};

export default ParkingUserLanding;
