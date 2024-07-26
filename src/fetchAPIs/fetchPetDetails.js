export default async function fetchPetDetails({ queryKey }) {
  const id = queryKey[1];
  const req = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!req.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }
  return req.json();
}
