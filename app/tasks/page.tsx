import { fetchTasks } from "@/actions/actions"
import { TaskForm } from "@/components/TaskForm"
import TaskList from "@/components/TaskList"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"

const TasksPage = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['tasks'],
        queryFn: fetchTasks
    })
    return (
        <>
            <h1 className='text-7xl'>TasksPage</h1>
            <div className="max-w-lg">
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <TaskForm />
                    <TaskList />
                </HydrationBoundary>
            </div>
        </>
    )
}

export default TasksPage
