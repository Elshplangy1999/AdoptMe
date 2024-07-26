export default async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  const req = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );
  if (!req.ok) {
    throw new Error(`Pet search not ok ${animal} ${location} ${breed}`);
  }
  return req.json();
}
