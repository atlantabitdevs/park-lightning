# API Route Spec
Below is an outline of the API routes available to both users (parking and paying) and admins (enforcing parking rules).

## User Routes
1. Route: `/api/v1/spot/details`
    - Method: `GET`
    - URL: https://api.parklightning.com/api/v1/spot/details?uuid=d8d05dce-dbae-421b-9bdd-ea3ce75b7a77
```json
Body: None

Returns:
                {
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
```
2. Route: `/api/v1/spot/reserve`
    - Method: `POST`
    - URL: https://api.parklightning.com/api/v1/spot/reserve
```json
Body:
                {
                  "uuid": "da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f",
                  "licensePlate": "BOE8359",
                  "duration": 1800
                }

Returns:
                {
                  "success": true,
                  "message": {
                    "_writeTime": {
                      "_seconds": 1648324950, 
                      "_nanoseconds": 756013000 
                    } 
                  }
                }
```
3. Route: `/api/v1/invoice/create`
    - Method: `POST`
    - URL: https://api.parklightning.com/api/v1/invoice/create
```json
Body:
                {
                  "amount": "$5.00",
                  "memo": {
                    "licensePlate": "BOE8359",
                    "uuid": "da1c0d1b-1ecf-4fe0-9acd-dc3d49640f8f",
                    "duration": 1800
                  }
                }

Returns:
                { "success": true, "message": {"invoice details (lnhash, etc.) TBA"} }

```
4. Route: `/api/v1/invoice/check`

Admin Side:
spot
- GET spot/admin/empty
	- Returns
		- spots with occupied=false
		- spots with occupied=true and (expiration - now) < 0


UUID: 