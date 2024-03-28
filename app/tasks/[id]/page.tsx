import { getTask } from '@/actions/actions'
import { EditForm } from '@/components/EditForm'
import { HydrationBoundary, QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
type Props = {
    params: {
        id: string,
    }
}
const TaskDetail = async ({ params }: Props) => {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['task', params.id],
        queryFn: () => getTask(params.id),
    });
    return (
        <div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <EditForm taskId={params.id} />
            </HydrationBoundary>
        </div>
    )
}

export default TaskDetail
