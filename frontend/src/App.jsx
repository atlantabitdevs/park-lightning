import ParkingUserLanding from './components/ParkingUserLanding';
import { AdminLanding } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<AdminLanding />} />
                <Route path="/" element={<ParkingUserLanding />} />
              <Route path="/test" element={<ParkingUserLanding />} />
            </Routes>
        </>
    );
}

export default App;
