const API_URL = 'https://park-lightning-foiudx76uq-ue.a.run.app'

const CreateInvoice = async (amount, memo) => {

  const res = await fetch(`${API_URL}/api/v1/invoice/create`, {
    method: 'POST',
    body: {
      amount,
      memo
    }
  });

  console.log(res)
  return await res.json()
}

const CheckInvoice = async (id) => {

  const res = await fetch(`${API_URL}/api/v1/invoice/check`, {
    method: 'POST',
    body: {
      id
    }
  });

  console.log(res)
  return await res.json()
}

export {
  CreateInvoice,
  CheckInvoice
}