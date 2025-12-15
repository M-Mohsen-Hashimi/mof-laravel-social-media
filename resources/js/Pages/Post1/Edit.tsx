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

interface Category {
    id: string
    name: string
}

interface Status {
    id: string
    name: string
}

interface Post1 {
    id: number
    read_time: number
    title: string
    content: string
    image: string | File
    is_active: boolean
    category: string
    status: string
  }


interface Props {
    post1: Post1
    categories: Category[]
}



export default function Edit({ post1, categories }: Props): React.ReactElement {
  const { data, setData, put, processing, errors } = useForm({
    read_time: post1.read_time,
    title: post1.title,
    content: post1.content,
    image: post1.image,
    is_active: post1.is_active,
    category: post1.category,
    status: post1.status,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    put(route('post1s.update', post1.id))
  }

  return (
    <>
      <Head title="Edit Post1" />
      <Card className="p-6 max-w-7xl mx-auto mt-8">
        <h1 className="text-xl font-semibold mb-4">Edit Post1</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="mb-4">
              <Label htmlFor="read_time" className="me-2 hover:cursor-pointer">
                Read Time:
              </Label>
              <Input
                id="read_time"
                name="read_time"
                value={data.read_time}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('read_time', Number(e.target.value))}
                type="number"
              />
              {errors.read_time && <p className="text-red-600 text-sm mt-1">{errors.read_time}</p>}
            </div>
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
              <Label htmlFor="image" className="me-2 hover:cursor-pointer">
                Image:
              </Label>
              <div>
                {data.image && typeof data.image === 'string' && (
                  <div className="mb-2">
                    <span className="text-sm text-gray-600">Current file: </span>
                    <a href={data.image} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Current File
                    </a>
                  </div>
                )}
                <Input
                  id="image"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files && e.target.files[0]) {
                      setData('image', e.target.files[0]);
                    }
                  }}
                  type="file"
                  className="hover:cursor-pointer"
                />
              </div>
              {errors.image && <p className="text-red-600 text-sm mt-1">{errors.image}</p>}
            </div>
            <div className="mb-4">
              <Label htmlFor="is_active" className="me-2 hover:cursor-pointer">
                Is Active:
              </Label>
              <div className="flex items-center mt-2">
                <Checkbox
                  id="is_active"
                  checked={data.is_active}
                  onCheckedChange={(checked) => setData('is_active', !!checked)}
                  className="hover:cursor-pointer"
                />
              </div>
              {errors.is_active && <p className="text-red-600 text-sm mt-1">{errors.is_active}</p>}
            </div>
            <div className="mb-4">
              <Label htmlFor="category" className="me-2 hover:cursor-pointer">
                Category:
              </Label>
              <Select onValueChange={(value: string) => setData('category', value)} defaultValue={data.category.toString()}>
                <SelectTrigger className="hover:cursor-pointer">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((item) => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
            </div>
            <div className="mb-4">
              <Label htmlFor="status" className="me-2 hover:cursor-pointer">
                Status:
              </Label>
              <Select onValueChange={(value: string) => setData('status', value)} defaultValue={data.status.toString()}>
                <SelectTrigger className="hover:cursor-pointer">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((item) => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.status && <p className="text-red-600 text-sm mt-1">{errors.status}</p>}
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
            <Link href={route('post1s.index')}>
              <Button variant="secondary" className="hover:cursor-pointer">Back</Button>
            </Link>
            <Button type="submit" disabled={processing} className="hover:cursor-pointer">Update</Button>
          </div>
        </form>
      </Card>
    </>
  )
}
