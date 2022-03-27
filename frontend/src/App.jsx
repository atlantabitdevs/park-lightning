import ParkingUserLanding from './components/ParkingUserLanding';
import DurationSelection from './components/DurationSelection'
import { AdminLanding } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<AdminLanding />} />
                <Route path="/" element={<ParkingUserLanding />} />
            </Routes>
        </>
    );
}

export default App;
