import { posts } from '@/data/post'
import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='max-w-4xl mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-4'>Reseñas trav-Host</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {posts.map(post=>(
          <Link key={post.id} href={`/blogs/${post.id}`} className='bg-gray-200 p-4 rounded-md shadow-md'>
            <h2 className='text-xl font-bold'>{post.id}</h2>
            <p>Escrito por:{post.username}</p>
          </Link>
        ))}
      </div>
      </div>
  )
}

export default BlogPage