const DurationSelection = () => {
    return (
        <div>
            <h1 className="text-2xl">How long do you want to park?</h1>
            <div className="bg-cyan-100 rounded-3xl">
                <div className="flex justify-around">
                    <div>Expires 9:30pm</div>
                    <div>+</div>
                </div>
                <div className="flex justify-around">
                    <div>Price $5 11,250 sats</div>
                    <div>-</div>
                </div>
            </div>
        </div>
    );
};

export default DurationSelection;
