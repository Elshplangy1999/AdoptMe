import { useQuery } from "@tanstack/react-query";
import { fetchBreedList } from "./fetchBreedList";

// const localCache = {};

export default function useBreedList(animal) {
  // const [breedlist, setBreedList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else if (localCache[animal]) {
  //     setBreedList(localCache[animal]);
  //   } else {
  //     requestBreedList();
  //   }
  // }, [animal])
  // async function requestBreedList() {
  //   try {
  //     setIsLoading(true);
  //     setError(null);
  //     const req = await fetch(
  //       `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //     );
  //     const res = await req.json();
  //     localCache[animal] = res.breeds || [];
  //     setBreedList(localCache[animal]);
  //   } catch (e) {
  //     setError(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  // return [breedlist, isLoading, error];
  const result = useQuery(["breeds", animal], fetchBreedList);
  return [result?.data?.breeds ?? []];
}