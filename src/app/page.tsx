import FormNewPost from '@/components/formNew-post'
import { getCurrentUser } from '@/lib/session'
import Image from 'next/image'

export default function Home() {
  const user = getCurrentUser();
  console.log(user);
  return (
    <main className='max-w-4xl mx-auto my-5'>
      <FormNewPost/>
    </main>
  )
}
