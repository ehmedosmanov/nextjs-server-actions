import { Task } from '@/components/TaskList'
import prisma from '@/utils/db'

const prismaHandler = async () => {
    await prisma.task.create({
        data: {
            content: "wake up"
        }
    })
    const allTasks = await prisma.task.findMany({
        where: {
            completed: false
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return allTasks
}

const PrismaPage = async () => {
    const data = await prismaHandler()
    console.log(data);
    return (
        <div>
            <h1 className='text-7xl'>PrismaPage</h1>
            {data.map((task: Task) => (
                <h2 key={task.id}>{task.content}</h2>
            ))}
        </div>
    )
}

export default PrismaPage
