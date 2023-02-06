import type { NextPage } from 'next'
import Head from 'next/head'
import { Categories, PostWidget, PostCard, Header } from '../components'
import { getPost } from '../services'


const posts = [
  {
    title: 'React Learn',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    title: 'React Learn',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  }
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>gamersandgeeks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {
            posts.map((post, index) => (
              <PostCard key={post.title} post={post} />
            ))
          }
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>

        </div>

      </div>


    </div>
  )
}


export async function getStaticProps() {
  const posts = (await getPost()) || []
  return {
    props: {
      posts
    }
  }
}

export default Home