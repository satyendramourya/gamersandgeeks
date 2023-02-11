import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
    console.log(post)
    return (

        <div className='flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-0 lg:p-1 pb-12 lg:pb-0 mb-8'>

            <img
                src={post.featuredImage.url}
                alt="post.title"
                className='object-top h-80 mx-auto pt-2  object-cover shadow-lg rounded-t-lg lg:rounded-lg mb-2'
            />
            <div className='lg:py-3'>
                <div className='flex flex-col-reverse justify-center mb-0 lg:mb-0 lg:w-auto mr-0'>

                    <h1 className='transition duration-700 text-center mb-2 lg:my-2 cursor-pointer hover:text-gray-400 text-2xl lg:text-3xl  font-semibold'>
                        <Link href={`/post/${post.slug}`}>
                            {post.title}
                        </Link>
                    </h1>
                    <div className='flex  justify-center mb-2 lg:mb-0 w-full lg:w-60  mr-0'>
                        <div className=' lg:w-auto'>
                            <img
                                src={post.author.photo.url}
                                alt={post.author.name}
                                width='40px'
                                className='rounded-full align-middle border-none shadow-lg'
                            />
                        </div>
                        <div>
                            <p className='inline align-middle text-gray-700 ml-2 text-sm'>{post.author.name}</p>
                            <div className='font-medium text-gray-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className='align-middle text-sm'>
                                    {moment(post.createdAt).format('MMM DD, YYYY')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-3'>
                    {post.excerpt}
                </p>
                <div className='text-center'>
                    <Link href={`/post/${post.slug}`}>
                        <span className=' cursor-pointer bg-blue-500 lg:inline-block py-2 px-4  text-white rounded-full lg:text-lg font-medium
                    transition duration-500 hover:bg-blue-600 ease transform hover:-translate-y-1 hover:scale-110
                    '>
                            Read More..
                        </span>
                    </Link>

                </div>
            </div>

        </div>

    )
}

export default PostCard