export async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];
  if (!animal) return [];
  const req = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
  if (!req.ok) {
    throw new Error(`details/${animal} fetch not ok`);
  }
  return req.json();
}