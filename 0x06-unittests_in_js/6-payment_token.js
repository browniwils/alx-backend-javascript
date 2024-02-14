export const getPaymentTokenFromAPI = (results) => new Promise((res, _) => {
  if (results) {
    res({data: 'Successful response from the API'});
  }
});

module.exports = getPaymentTokenFromAPI;
