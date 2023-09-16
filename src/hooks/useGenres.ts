import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { Genre } from "./Genre";

const apiClient = new APIClient<Genre>('/genres')
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 h
    initialData: {count: genres.length, results: genres, next: null}
})

export default useGenres;