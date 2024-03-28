"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createTask, getTask, updateTask } from "@/actions/actions"
import { formSchema } from "@/actions/form-schema"
import { useAction } from "next-safe-action/hooks"
import toast from "react-hot-toast"
import { Task } from "@prisma/client"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/navigation"

type Props = {
    taskId: string
}

export function EditForm({ taskId }: Props) {

    const router = useRouter()
    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ['job', taskId],
        queryFn: () => getTask(taskId),
    });



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: "",
        },
    })

    const { execute, status, } = useAction(updateTask, {
        onExecute(data) {
            console.log("creating post....")
        },
        onSuccess(data) {
            toast.success('Created')
            router.push('/tasks')
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const { content } = values
        execute({ content: content, id: taskId })
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-8">
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>content</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Suqwdqwbmit</Button>
            </form>
        </Form>
    )
}
