const FetchData = async (url) => {
  const respponse = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.REACT_APP_API_KEY,
      StoreID: process.env.REACT_APP_STORE_ID,
      UserAddressID: process.env.REACT_APP_USER_ADDRESS_ID,
    },
  });

  const data = await respponse.json();
  return data.data;
};

export default FetchData;
