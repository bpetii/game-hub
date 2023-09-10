import { useQuery } from "@tanstack/react-query";
import { FetchResoponse } from "../services/api-client";
import apiClient from "../services/api-client";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient
    .get<FetchResoponse<Platform>>('./platforms/lists/parents')
    .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 h
});

export default usePlatforms