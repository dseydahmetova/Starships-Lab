export async function getAllStarships() {
  const response = await fetch(`https://swapi.dev/api/starships/`)
  const data = response.json()
  return data
}

