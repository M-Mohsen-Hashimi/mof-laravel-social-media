import React, { useState, useEffect } from 'react'
import { Head, Link, router } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { CircleCheck, CircleX, Search, X } from 'lucide-react'

import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
}
from '@/components/ui/table'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogDescription
}
from '@/components/ui/dialog'

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
    category: Category
    status: string
  }

interface Props {
    post1s: Post1[]
    filters?: {
        search?: string
    };
}

export default function Index({ post1s, filters }: Props): React.ReactElement {
  const [search, setSearch] = useState(filters?.search || '');
  const hasSearchableFields = true;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (hasSearchableFields) {
        const params = new URLSearchParams(window.location.search);
        
        if (search) {
          params.set('search', search);
        } else {
          params.delete('search');
        }

        const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
        
        router.get(newUrl, {}, {
          preserveState: true,
          preserveScroll: true,
          replace: true,
        });
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search, hasSearchableFields]);

  const handleDelete = (id: number) => {
      router.delete(route('post1s.destroy', id), {
          onSuccess: () => {
              // to do
          }
      });
    };

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <>
      <Head title="Post1 List" />
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Post1 List</h1>
          <Link href={route('post1s.create')}>
            <Button className="hover:cursor-pointer">Create Post1</Button>
          </Link>
        </div>

        {hasSearchableFields && (
          <div className="mb-4">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by Title, Content..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-10"
              />
              {search && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Read Time</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Is Active</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            { post1s.map((item) => (
              <TableRow key={item.id}>
                <TableCell >{item.read_time}</TableCell>
                <TableCell >{item.title}</TableCell>
                <TableCell >{item.content}</TableCell>
                <TableCell >{item.image ? <a href={item.image} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View File</a> : 'No file'}</TableCell>
                <TableCell >{item.is_active ? <CircleCheck className="text-green-400" /> : <CircleX className="text-red-400" />}</TableCell>
                <TableCell >{item.category?.name}</TableCell>
                <TableCell >{item.status}</TableCell>
                <TableCell>
                  <Link href={route('post1s.show', item.id)}>
                    <Button size="sm" variant="link" className="hover:cursor-pointer hover:underline">View</Button>
                  </Link>
                  <Link href={route('post1s.edit', item.id)}>
                    <Button size="sm" variant="link" className="hover:cursor-pointer hover:underline text-indigo-600">Edit</Button>
                  </Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="link" className="hover:cursor-pointer hover:underline text-destructive/90">Delete</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                          This action cannot be undone. This will permanently delete the post1
                      </DialogDescription>
                      <div className="flex justify-end">
                        <Button variant="destructive" className="hover:cursor-pointer" onClick={() => handleDelete(item.id)}>Delete</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
