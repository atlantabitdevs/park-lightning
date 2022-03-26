import ParkingUserLanding from './components/ParkingUserLanding';

function App() {
    return (
        <>
            <Routes>
                <Route path="admin" element={<AdminLanding />} />
                <Route path="/" element={<ParkingUserLanding />} />
            </Routes>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold underline">Hello world!</h1>;
            </div>
        </>
    );
}


export default App;
