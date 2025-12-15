import React from 'react'
import { Head, useForm, Link } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



interface Post {
    id: number
    title: string
    content: string
    published_at: string
  }


interface Props {
    post: Post
    
}



export default function Edit({ post }: Props): React.ReactElement {
  const { data, setData, put, processing, errors } = useForm({
    title: post.title,
    content: post.content,
    published_at: post.published_at,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    put(route('posts.update', post.id))
  }

  return (
    <>
      <Head title="Edit Post" />
      <Card className="p-6 max-w-7xl mx-auto mt-8">
        <h1 className="text-xl font-semibold mb-4">Edit Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="mb-4">
              <Label htmlFor="title" className="me-2 hover:cursor-pointer">
                Title:
              </Label>
              <Input
                id="title"
                name="title"
                value={data.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('title', e.target.value)}
                type="text"
              />
              {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
            </div>
            <div className="mb-4">
              <Label htmlFor="published_at" className="me-2 hover:cursor-pointer">
                Published At:
              </Label>
              <Input
                id="published_at"
                name="published_at"
                value={data.published_at}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('published_at', e.target.value)}
                type="text"
              />
              {errors.published_at && <p className="text-red-600 text-sm mt-1">{errors.published_at}</p>}
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="content" className="me-2 hover:cursor-pointer">
              Content:
            </Label>
            <Textarea
              value={data.content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('content', e.target.value)}
              className="min-h-32"
            />
            {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content}</p>}
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <Link href={route('posts.index')}>
              <Button variant="secondary" className="hover:cursor-pointer">Back</Button>
            </Link>
            <Button type="submit" disabled={processing} className="hover:cursor-pointer">Update</Button>
          </div>
        </form>
      </Card>
    </>
  )
}
