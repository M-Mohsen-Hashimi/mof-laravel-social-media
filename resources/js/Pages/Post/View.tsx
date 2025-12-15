import React from 'react'
import { Head, Link } from '@inertiajs/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { CircleCheck, CircleX } from 'lucide-react';



interface Post {
    id: number
    title: string
    content: string
    published_at: string
  }

interface Props {
    post: Post
}

export default function View({ post }: Props): React.ReactElement {
  return (
    <>
      <Head title="View Post" />
      <Card className="p-6 max-w-7xl mx-auto mt-8 space-y-4">
        <h1 className="text-2xl font-semibold mb-4">View Post</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </div>
            <div>
              { post.title }
            </div>
          </div>
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Published At
            </div>
            <div>
              { post.published_at }
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            { post.content }
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Link href={route('posts.index')}>
            <Button variant="secondary" className="hover:cursor-pointer">Back</Button>
          </Link>
          <Link href={route('posts.edit', post.id)}>
            <Button className="hover:cursor-pointer">Edit</Button>
          </Link>
        </div>
      </Card>
    </>
  )
}
