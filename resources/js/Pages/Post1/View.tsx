import React from 'react'
import { Head, Link } from '@inertiajs/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { CircleCheck, CircleX } from 'lucide-react';

interface Category {
    id: string
    name: string
}

interface Post1 {
    id: number
    read_time: number
    title: string
    content: string
    image: string
    is_active: boolean
    category: string
    category: Category
    status: string
  }

interface Props {
    post1: Post1
}

export default function View({ post1 }: Props): React.ReactElement {
  return (
    <>
      <Head title="View Post1" />
      <Card className="p-6 max-w-7xl mx-auto mt-8 space-y-4">
        <h1 className="text-2xl font-semibold mb-4">View Post1</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Read Time
            </div>
            <div>
              { post1.read_time }
            </div>
          </div>
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </div>
            <div>
              { post1.title }
            </div>
          </div>
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </div>
            <div>
              { post1.image ? <a href={post1.image} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View File</a> : 'No file' }
            </div>
          </div>
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Is Active
            </div>
            <div>
              { post1.is_active ? <CircleCheck className="text-green-400" /> : <CircleX className="text-red-400" /> }
            </div>
          </div>
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </div>
            <div>
              { post1.category?.name }
            </div>
          </div>
          <div className="mb-4">
            <div className="block text-gray-700 text-sm font-bold mb-2">
              Status
            </div>
            <div>
              { post1.status }
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            { post1.content }
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Link href={route('post1s.index')}>
            <Button variant="secondary" className="hover:cursor-pointer">Back</Button>
          </Link>
          <Link href={route('post1s.edit', post1.id)}>
            <Button className="hover:cursor-pointer">Edit</Button>
          </Link>
        </div>
      </Card>
    </>
  )
}
