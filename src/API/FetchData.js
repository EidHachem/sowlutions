const FetchData = async (url) => {
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
  return data.data;
};

export default FetchData;
