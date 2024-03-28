'use client'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
const Provider = ({ children }: {
    children: React.ReactNode
}) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 4 * 1000,
                        refetchInterval: 4 * 1000,
                    },
                },
            })
    )
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            {children}
        </QueryClientProvider>
    )
}

export default Provider
