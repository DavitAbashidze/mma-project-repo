const apiUrl = "https://randomuser.me/api/";
async function fetchData() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  let randomPerson = data;

  const {
    name: { first, last },
    cell,
    email,
    picture: { large },
  } = randomPerson.results[0];
  return {
    name: `${first} ${last}`,
    email,
    phone: cell,
    image: large,
  };
}

export default fetchData;
