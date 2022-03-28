import { ArrowLeftIcon, ArrowRightIcon, MinusIcon, PlusIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ParkingUserLanding = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const address = state.address.split(',')

  const [timeIncrements, setTimeIncrements] = useState(1)
  const [btcPrice, setBtcPrice] = useState({})
  const [sats, setSats] = useState()
  const [fiat, setFiat] = useState()

  const timeUnit = 30 // minutes
  const timeMax = 1440 // 24 * 30 minutes
  const timeMin = 30
  const price = 2
  const [expiry, setExpiry] = useState(new Date())
  console.log('Step1', state)
  
  useEffect(async () => {
    const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
      method: 'GET'
    })
    const btcPriceData = await data.json();

    setBtcPrice(
      parseFloat(
        btcPriceData.bpi.USD.rate.replace(',', '')
      )
    )

    setFiat(timeIncrements * price)
    setSats((((timeIncrements * price) / btcPrice) * 100000000).toFixed(0))
  })

  const toStep2 = () => {
    navigate('/step2', {
      state: {
        expiry: expiry.getTime(),
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
        sats: sats,
        fiat: fiat
      }
    })
  }

  const increaseTime = () => {
    if ((timeIncrements * timeUnit) < timeMax) {
      setTimeIncrements(timeIncrements + 1)
      setFiat(timeIncrements * price)
      setSats((((timeIncrements * price) / btcPrice) * 100000000).toFixed(0))
    }
  }

  const decreaseTime = () => {
    console.log('timeIncrements is ' + timeIncrements)
    if ((timeIncrements * timeUnit) > timeMin) {
      console.log('greater than time min')
      setTimeIncrements(timeIncrements - 1)
      console.log('timeIncrements is ' + timeIncrements)
      setFiat(timeIncrements * price)
      setSats((((timeIncrements * price) / btcPrice) * 100000000).toFixed(0))
    }
  }

  const buildExpiry = () => {
    if(timeIncrements && timeUnit) {
      let interval = (timeIncrements * timeUnit * 60 * 1000);
      console.log(interval)
      console.log(expiry)
      let newExpiry = new Date(new Date().getTime() + interval)
      console.log(newExpiry)
      setExpiry(newExpiry)
    }
  }

  useEffect(()=>{
    buildExpiry()
  }, [timeIncrements])

  return (
    <Page>
      <p className="text-3xl">
        <strong>Spot #{state.spotNumber}</strong><br />
        {address[0]}
        <br />
        {address[1]}, {address[2]}
      </p>
      <p className="text-4xl">
        How long would you like to park?
      </p>

      <div className="bg-gradient-to-b from-white to-prk-gray-light border-solid border-2 border-neutral-200 w-full p-8 rounded-3xl flex flex-row space-x-8">
        <div className="space-y-8 basis-8/12">
          <div className="space-y-1">
            <h3 className="font-bold text-xl">Expires</h3>
            <p className="text-4xl">{timeIncrements === 1 ? '30 mins' : ((timeIncrements * timeUnit) / 60).toFixed(1) + ' hours'}</p>
            <p className="text-2xl">{(expiry.getHours() < 10 ? '0' : '') + expiry.getHours() + ":" + (expiry.getMinutes() < 10 ? '0' : '') + expiry.getMinutes()}</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-xl">Price</h3>
            <p className="text-4xl">${fiat}</p>
            <p className="text-2xl">{sats} sats</p>
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
        <Button size="large" importance="primary" onClick={toStep2}>
          <span className="flex flex-row space-x-4"><span>Step 2</span> <ArrowRightIcon className="w-8 h-8" /></span>
        </Button>
      </div>
    </Page>
  );
};

export default ParkingUserLanding;
