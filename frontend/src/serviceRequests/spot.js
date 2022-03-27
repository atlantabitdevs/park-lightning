const API_URL = 'https://park-lightning-foiudx76uq-ue.a.run.app'

const GetSpotDetails = async (spotId) => {
  const res = await fetch(`${API_URL}/api/v1/spot/details?uuid=${spotId}`, {
    method: 'GET',
  })

  return await res.json()
  /**
   *  {
                  "success": true,
                  "message": {
                      "address": "691 John Wesley Dobbs Ave, Atlanta, GA 30312",
                      "expirationTime": 1648319420,
                      "startTime": 1648317620,
                      "expired": false,
                      "licensePlate": "SC39133",
                      "occupied": true,
                      "duration": 1800
                  }
                }
   */
}

const ReserveSpot = async (spotId, licensePlate, duration) => {
  const res = await fetch(`${API_URL}/api/v1/spot/reserve`, {
    method: 'POST',
    body: { 
      spotId,
      licensePlate,
      duration
    }
  });

  console.log(res)
  return res
  /**
   * {
                  "success": true,
                  "message": {
                    "_writeTime": {
                      "_seconds": 1648324950, 
                      "_nanoseconds": 756013000 
                    } 
                  }
                }
   */

}

const GetEmptySpots = async () => {
  const res = await fetch(`${API_URL}/api/v1/spot/empty`, {
    method: 'GET',
  })
  console.log(res);
  return res
  
  /**
   * {
              "success": true,
              "message": {
                  "unoccupiedSpots": [
                      {
                          "address": "691 John Wesley Dobbs Ave, Atlanta, GA 30312",
                          "occupied": false
                      }
                  ],
                  "expiredSpots": [
                      {
                          "expired": true,
                          "expirationTime": 1648319420,
                          "duration": 1800,
                          "address": "691 John Wesley Dobbs Ave, Atlanta, GA 30312",
                          "occupied": true,
                          "licensePlate": "SC39133",
                          "startTime": 1648317620
                      },
                      {
                          "occupied": true,
                          "address": "79 5th St NW, Atlanta, GA 30308",
                          "expirationTime": 1648327169,
                          "expired": true,
                          "duration": 1800,
                          "licensePlate": "BOE8359",
                          "startTime": 1648325369
                      }
                  ]
              }
          }
*/
  
}

export {
  GetSpotDetails,
  GetEmptySpots,
  ReserveSpot
}