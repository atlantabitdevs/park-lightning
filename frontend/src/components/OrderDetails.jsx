const OrderDetails = ({spot, location1, location2, location3, expiry, phone, license}) => {
    return (
      <div className="flex flex-col w-full space-y-4 text-sm">
        <div className="flex flex-row space-x-4">
          <div className={location1 ? 'basis-6/12 text-black' : 'basis-6/12 text-neutral-400'}>
            <h4 className="font-bold">Location</h4>
            <p>
              Parking Spot #{spot ? spot : "---"}<br />
              {location1 ? location1 : ""}<br />
              {location2 ? location2 : ""}, {location3 ? location3 : ""}
            </p>
          </div>
          <div className={expiry ? 'basis-6/12 text-black' : 'basis-6/12 text-neutral-400'}>
            <h4 className="font-bold">Expires</h4>
            <p>
              {expiry ? expiry : "---"}
            </p>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className={license ? 'basis-6/12 text-black' : 'basis-6/12 text-neutral-400'}>
            <h4 className="font-bold">License</h4>
            <p>
              {license ? license : "---"}
            </p>
          </div>
          <div className={phone ? 'basis-6/12 text-black' : 'basis-6/12 text-neutral-400'}>
            <h4 className="font-bold">Phone</h4>
            <p>
              {phone ? phone : "---"}
            </p>
          </div>
        </div>
      </div>
    );
};

export default OrderDetails;
