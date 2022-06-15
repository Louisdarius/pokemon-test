import axiosInterceptors from "../utils/interceptors";

export async function getPokemons() {
  return await axiosInterceptors.get(`/pokemon`, {});
}
