"use server"

import { action } from "@/lib/safe-actions";
import prisma from '@/utils/db'
import { revalidatePath } from "next/cache";
import { formSchema } from "./form-schema";
import { z } from "zod";

export const createTask = action(formSchema, async ({ content }) => {
    console.log(content);
    await prisma.task.create({
        data: {
            content: content
        }
    })
    revalidatePath('/tasks')
})

const deleteSchema = z.object({
    id: z.string(),
})

export const deleteTask = action(deleteSchema, async ({ id }) => {
    await prisma.task.delete({
        where: { id },
    });
    revalidatePath('tasks')

})


export const fetchTasks = async () => {
    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return tasks
}

export const getTask = async (id: string) => {
    return prisma.task.findUnique({
        where: {
            id
        }
    })
}

const updateSchema = z.object({
    id: z.string(),
    content: z.string()
})

export const updateTask = action(updateSchema, async ({ content, id }) => {
    const updatedData = await prisma.task.update({
        where: { id },
        data: { content },
    });
    return updatedData
})