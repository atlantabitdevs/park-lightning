import './App.css';
import { BeakerIcon } from '@heroicons/react/solid';

import { BitcoinIcon } from '@bitcoin-design/bitcoin-icons-react/filled';

function BeakerIconComponent() {
    return (
        <div>
            <BeakerIcon className="h-5 w-5 text-blue-500" />
        </div>
    );
}
function BitcoinIconComponent() {
    return (
        <div>
            <BitcoinIcon
                style={{ height: '5px', width: '5px', color: '#F7931A' }}
            />
        </div>
    );
}

function App() {
    return (
        <>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold underline">Hello world!</h1>;
            </div>
            <BeakerIconComponent />
            <BitcoinIconComponent />
        </>
    );
}

export default App;
