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
import { createTask } from "@/actions/actions"
import { formSchema } from "@/actions/form-schema"
import { useAction } from "next-safe-action/hooks"
import toast from "react-hot-toast"


export function TaskForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  })

  const { execute, status, } = useAction(createTask, {
    onExecute(data) {
      console.log("creating post....")
    },
    onSuccess(data) {
      toast.success('Created')
    }
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    execute(values)
    form.reset()

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
