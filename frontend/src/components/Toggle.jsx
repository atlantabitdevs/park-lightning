import {ScanIcon} from '@bitcoin-design/bitcoin-icons-react/filled';

const Toggle = ({children, active, onClick}) => {
  let colors;
  if(active === "true" || active === true) {
    colors = "bg-gradient-to-b from-prk-blue-light to-prk-blue text-white"
  }
  else {
    colors = "bg-gradient-to-b from-white to-prk-gray-light text-prk-blue"
  }
  
  let className = colors + " space-y-4 text-center flex flex-col items-center justify-center border-solid border border-neutral-200 w-full p-8 rounded-xl text-base font-display uppercase font-bold tracking-widest"
  
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Toggle;
