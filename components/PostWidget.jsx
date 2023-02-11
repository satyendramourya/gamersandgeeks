import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'



const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((result) => {
                setRelatedPosts(result);
            });
        } else {
            getRecentPosts().then((result) => {
                setRelatedPosts(result);
            });
        }
    }, [slug]);

    // console.log(relatedPosts)

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b'>
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post) => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='w-16 flex-none'>
                        <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            className=" align-middle rounded-lg"
                        />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='text-gray-500 font-xs'>
                            {moment(post.date).format('MMM DD')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title}>
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget