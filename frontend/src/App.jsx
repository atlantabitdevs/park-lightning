import ParkingUserLanding from './components/ParkingUserLanding';
import { AdminLanding } from './components';
import { Routes, Route } from 'react-router-dom';
import Step1 from './components/Step1';

function App() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<AdminLanding />} />
                <Route path="/" element={<ParkingUserLanding />} />
              <Route path="/step1" element={<Step1 />} />
            </Routes>
        </>
    );
}

export default App;
