import OrderDetails from './OrderDetails';
import { ArrowLeftIcon, ArrowRightIcon, ScanIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import Page from './Page';
import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';
import {useState} from 'react';
import Toggle from './Toggle';

const Step3 = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const address = state.address.split(',')
  const [expiry, setExpiry] = useState(state.expiry || expiry)
  const [date, setDate] = useState(new Date(state.expiry))
  const [choice, setChoice] = useState(state.choice)
  const [license, setLicense] = useState(state.license)
  console.log('Step3', state)

  const handleClick = (chosen) => {
    setChoice(state.choice || chosen)
  }

  const toStep2 = () => {
    navigate('/step2', {
      state: {
        expiry: expiry,
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
        phone: state.phone,
        sats: state.sats,
        fiat: state.fiat,
        choice: state.choice
      }
    })
  }

  const toStep3Manual = () => {
    navigate('/step3-manual', {
      state: {
        expiry: expiry,
        address: state.address,
        spotNumber: state.spotNumber,
        occupied: state.occupied,
        phone: state.phone,
        sats: state.sats,
        fiat: state.fiat,
        choice: choice
      }
    })
  }

  return (
    <Page>
      <OrderDetails
        location1={`Parking Spot #${state.spotNumber}`}
        location2={address[0]}
        location3={address[1] + address[2]}
        expiry={date.getHours() + ":" + date.getMinutes()}
        phone={state.phone}
        license={state.license}
      />
      <p className="text-4xl"> Enter your license plate number </p>
      <div className="flex flex-row space-x-4 w-full">
        <div className="basis-6/12">
          <Toggle active={choice === 'scan'} onClick={() => handleClick('scan')}>
            <ScanIcon className="w-12 h-12" />
            <span>Scan</span>
          </Toggle>
        </div>
        <div className="basis-6/12">
          <Toggle active={choice === 'manual'} onClick={() => handleClick('manual')}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
              <path d="M5.40614 15V14.1158H6.99281V10.0169H6.91843L5.66232 11.5044L4.98468 10.9342L6.41433 9.2318H8.07538V14.1158H9.38107V15H5.40614Z" fill="currentColor"/>
              <path d="M14.5676 15H10.5017V13.9918L12.3528 12.4134C12.6614 12.1489 12.89 11.9093 13.0387 11.6944C13.1875 11.4741 13.2619 11.2399 13.2619 10.992V10.9094C13.2619 10.6339 13.1847 10.4246 13.0305 10.2813C12.8762 10.1381 12.6614 10.0664 12.3859 10.0664C12.0829 10.0664 11.8515 10.1491 11.6917 10.3144C11.532 10.4796 11.4163 10.6835 11.3446 10.9259L10.4026 10.5705C10.4632 10.3832 10.5486 10.2042 10.6587 10.0334C10.7744 9.8571 10.9149 9.70284 11.0802 9.57062C11.251 9.43839 11.4521 9.33372 11.6835 9.25659C11.9149 9.17395 12.1793 9.13263 12.4768 9.13263C12.7853 9.13263 13.058 9.1767 13.2949 9.26485C13.5373 9.34749 13.7412 9.46594 13.9065 9.6202C14.0717 9.76895 14.1957 9.948 14.2783 10.1574C14.3665 10.3667 14.4106 10.5953 14.4106 10.8433C14.4106 11.0802 14.372 11.2978 14.2949 11.4961C14.2232 11.6944 14.1213 11.8845 13.9891 12.0663C13.8569 12.2426 13.6999 12.4134 13.5181 12.5787C13.3418 12.7439 13.1489 12.9092 12.9396 13.0745L11.6835 14.091H14.5676V15Z" fill="currentColor"/>
              <path d="M17.6385 11.5622C17.9856 11.5622 18.239 11.4933 18.3988 11.3556C18.5641 11.2179 18.6467 11.0443 18.6467 10.835V10.7771C18.6467 10.5402 18.5668 10.3557 18.407 10.2235C18.2528 10.0912 18.0379 10.0251 17.7625 10.0251C17.498 10.0251 17.2666 10.0857 17.0683 10.2069C16.87 10.3281 16.6992 10.4989 16.5559 10.7193L15.8535 10.0912C15.9527 9.95902 16.0629 9.83506 16.1841 9.71937C16.3108 9.59816 16.4513 9.49624 16.6055 9.4136C16.7653 9.32545 16.9416 9.25659 17.1344 9.207C17.3272 9.15742 17.5476 9.13263 17.7955 9.13263C18.0875 9.13263 18.3547 9.16844 18.5971 9.24006C18.845 9.30617 19.0544 9.40534 19.2252 9.53756C19.4015 9.66978 19.5364 9.82955 19.6301 10.0169C19.7293 10.1987 19.7788 10.4053 19.7788 10.6367C19.7788 10.8185 19.7485 10.9837 19.6879 11.1325C19.6273 11.2812 19.5447 11.4107 19.44 11.5209C19.3409 11.6311 19.2224 11.722 19.0847 11.7936C18.9525 11.8652 18.8092 11.9176 18.655 11.9506V11.9919C18.8257 12.025 18.9855 12.0801 19.1343 12.1572C19.283 12.2288 19.4125 12.3225 19.5227 12.4382C19.6329 12.5539 19.721 12.6944 19.7871 12.8596C19.8532 13.0194 19.8863 13.2012 19.8863 13.4051C19.8863 13.6585 19.8339 13.8899 19.7293 14.0992C19.6246 14.3086 19.4758 14.4876 19.283 14.6364C19.0957 14.7851 18.8671 14.9008 18.5971 14.9835C18.3327 15.0606 18.0352 15.0992 17.7046 15.0992C17.4291 15.0992 17.184 15.0689 16.9691 15.0083C16.7543 14.9532 16.5642 14.876 16.3989 14.7769C16.2336 14.6777 16.0904 14.5648 15.9692 14.438C15.848 14.3058 15.7406 14.1708 15.6469 14.0331L16.4485 13.4133C16.5862 13.6447 16.7488 13.8348 16.9361 13.9835C17.1289 14.1323 17.3906 14.2067 17.7211 14.2067C18.0517 14.2067 18.3051 14.1323 18.4814 13.9835C18.6632 13.8293 18.7541 13.6172 18.7541 13.3472V13.2811C18.7541 13.0167 18.6577 12.8156 18.4649 12.6778C18.2721 12.5346 17.9994 12.463 17.6468 12.463H17.0683V11.5622H17.6385Z" fill="currentColor"/>
            </svg>
            <span>Type It In</span>
          </Toggle>
        </div>
      </div>
      <p className="text-sm text-neutral-500">
        Take a picture of your license plate, or type it in manually.
      </p>
      <div className="flex flex-row space-x-4">
        <Button size="large" importance="secondary" onClick={toStep2}>
          <span className="sr-only">Back</span> <ArrowLeftIcon className="w-8 h-8" />
        </Button>
        <Button size="large" importance="primary" onClick={toStep3Manual}>
          <span className="flex flex-row space-x-4"><span>Continue</span> <ArrowRightIcon className="w-8 h-8" /></span>
        </Button>
      </div>
    </Page>
  );
};

export default Step3;
