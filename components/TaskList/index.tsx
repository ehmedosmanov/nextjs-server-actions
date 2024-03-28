'use client'
import prisma from '@/utils/db'
import Link from 'next/link';
import DeleteTask from '../DeleteTask';
import { cn } from '@/lib/utils';
import { deleteTask, fetchTasks } from '@/actions/actions';
import { useQuery } from '@tanstack/react-query';
import { useGetTasks } from '@/data/get-tasks';
import { Button } from '../ui/button';
import { useAction } from 'next-safe-action/hooks';

export type Task = {
  id: string,
  content: string,
  completed: boolean,

}

const TaskList = () => {
  const { data: tasks, error: postError, fetchStatus, isLoading } = useGetTasks()

  const { execute: exectueDeleteTask } = useAction(deleteTask)

  if (isLoading) return <div>...Loading</div>

  if (tasks.length === 0)
    return <h2 className='mt-8 font-medium text-lg'>No tasks to show</h2>;
  return (
    <ul className='mt-8'>
      {tasks.map((task: Task) => (
        <li
          key={task.id}
          className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'
        >
          <h2
            className={cn('text-lg capitalize', task.completed ? ' line-through' : null)}
          >
            {task.content}
          </h2>
          <div className='flex gap-6 items-center'>
            <Button variant={'secondary'}>
              <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>
                Edit
              </Link>
            </Button>
            <Button onClick={() => exectueDeleteTask({ id: task.id })}>Delete</Button>
            {/* <DeleteTask id={task.id} /> */}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
