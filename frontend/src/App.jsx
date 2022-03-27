import ParkingUserLanding from './components/ParkingUserLanding';
import { AdminLanding } from './components';
import { Routes, Route } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

function App() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<AdminLanding />} />
                <Route path="/" element={<ParkingUserLanding />} />
                <Route path="/step1" element={<Step1 />} />
                <Route path="/step2" element={<Step2 />} />
                <Route path="/step3" element={<Step3 />} />
            </Routes>
        </>
    );
}

export default App;
