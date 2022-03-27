const GetSpotDetails = async (spotId) => {
  //do Create invoice
  const res = await fetch('https://api/spot/details' , {
    body: {
      spotId,
      licensePlate,
      occupied,
      start,
      expiration,
      duration
    }
  })

  console.log(res)
  return {
    spotId: "d8d05dce-dbae-421b-9bdd-ea3ce75b7a77",
    address: "691 John Wesley Dobbs Ave, Atlanta, GA 30312",
    occupied: true,
    licensePlate: "SC39133",
    start: 1648317620,
    expiration: 1648319420,
    duration: 1800
  }
}

const ReserveSpot = async (spotId, licensePlate, duration) => {
  // calculate start and expiration
  // submit to api
  const res = await fetch('https://api/invoice/create', {
    body: { 
      spotId,
      licensePlate,
      occupied,
      start,
      expiration,
      duration
    }
  })


  console.log(res)
  return {
    success: true,
    spotData: {
      spotId: "d8d05dce-dbae-421b-9bdd-ea3ce75b7a77",
      address: "691 John Wesley Dobbs Ave, Atlanta, GA 30312",
      occupied: true,
      licensePlate: "SC39133",
      start: 1648317620,
      expiration: 1648319420,
      duration: 1800
    }
  }

}

const GetEmptySpots = async () => {
  //do getEmpty spots
  //GET spotsShouldBeEmpty 
  const res = await fetch('https://api/invoice/create', {
    method: 'GET',
  })
  console.log(res);


  return  [
    {
      spotId: "d8d05dce-dbae-421b-9bdd-ea3ce75b7a77",
      address: "691 John Wesley Dobbs Ave, Atlanta, GA 30312",
      occupied: true,
      licensePlate: "SC39133",
      start: 1648317620,
      expiration: 1648319420,
      duration: 1800
    }
  ]

  
}

export {
  GetSpotDetails,
  GetEmptySpots,
  ReserveSpot
}