const FetchData = async () => {
  const url = 'https://api.manoapp.com/api/v1/users/products/whats_new';
  const respponse = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'f44a4aabfc5992514d262d7f517327e7',
      StoreID: '4',
      UserAddressID: '60877',
    },
  });

  const data = await respponse.json();
  return data;
};

export default FetchData;
