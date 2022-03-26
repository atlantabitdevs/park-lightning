import './App.css';
import { BeakerIcon } from '@heroicons/react/solid';
import { BitcoinIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import { Routes, Route } from "react-router-dom";
import { Landing, AdminLanding } from './components';

function BeakerIconComponent() {
    return (
        <div>
            <BeakerIcon className="text-blue-500" />
        </div>
    );
}
function BitcoinIconComponent() {
    return (
        <div>
            <BitcoinIcon
                className=""
                // style={{ height: '150px', width: '150px', color: '#F7931A' }}
            />
        </div>
    );
}

function App() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<AdminLanding />} />
                <Route path="/" element={<Landing />} />
            </Routes>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold underline">Hello world!</h1>;
            </div>
            <BeakerIconComponent />
            <BitcoinIconComponent />
        </>
    );
}

export default App;
