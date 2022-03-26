const CreateInvoice = async (satsAmount) => {

  const res = await fetch('https://api/invoice/create', {
    method: 'POST',
    body: {
      satsAmount
    }

  });

  console.log(res)
  //do Create invoice

  return {
    //invoice
    lnHash: 'lightning:aasdfsdf',
    expires: 1000
  }
}

export {
  CreateInvoice
}