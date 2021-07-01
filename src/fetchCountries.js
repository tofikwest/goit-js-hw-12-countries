function fetchCountries(searchQuery) {
  const DEFAULT_URL = 'https://restcountries.eu/rest/v2/name';
  return fetch(`${DEFAULT_URL}/${searchQuery}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw new Error(error);
    });
}
export default { fetchCountries };
