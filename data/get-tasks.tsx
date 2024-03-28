import { fetchTasks, getTask } from "@/actions/actions"
import { useQuery } from "@tanstack/react-query"

export function useGetTasks() {
    return useQuery({
        queryFn: async () => fetchTasks(),
        queryKey: ["tasks"]
    })
}

