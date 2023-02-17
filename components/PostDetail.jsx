import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';



const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return (
                    <h3 key={index} className="text-xl font-semibold mb-4">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h3>
                );
            case 'paragraph':
                return (
                    <p key={index} className="mb-8">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </p>
                );
            case 'heading-four':
                return (
                    <h4 key={index} className="text-md font-semibold mb-4">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h4>
                );
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            case "code-block":
                const codeRef = useRef(null);
                useEffect(() => {
                    hljs.highlightElement(codeRef.current);
                }, []);

                const copyToClipboard = () => {
                    const textToCopy = codeRef.current.textContent;
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        alert('Copied to clipboard');
                    }, () => {
                        alert('Unable to copy to clipboard');
                    });
                };
                return (
                    <>
                        <Head>
                            <link
                                rel="stylesheet"
                                href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/an-old-hope.min.css"
                            />

                        </Head>
                        <div >
                            <button onClick={copyToClipboard} className="m-2">
                                <span className='grid grid-cols-2 bg-blue-400 text-white px-3 py-2  rounded-lg'>
                                    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z" fill="#282828"></path>
                                    </svg>
                                    copy
                                </span>
                            </button>

                            <pre key={index}>
                                <code ref={codeRef} >
                                    {modifiedText.map((item, i) => (
                                        <React.Fragment key={i}>{item}</React.Fragment>
                                    ))}
                                </code>
                            </pre>
                        </div>
                    </>

                );
            default:
                return modifiedText;
        }
    };

    // Rest of the component code




    return (
        <div className='bg-white shadow-lg rounded-lg  lg:p-8 pb-12 mb-8'>
            {
                post.featuredImage && (<div className='relative overflow-hidden shadow-md mb-6'>
                    <img
                        src={post.featuredImage.url}
                        alt={post.title}
                        className='w-full h-full object-top rounded-t-lg'
                    />
                </div>)
            }
            <div className='px-4 lg:px-0'>
                <div className='mb-3 flex flex-col-reverse lg:flex-row  mx-auto items-center justify-around pb-3 border-b'>
                    <h1 className=' items-center text-3xl font-semibold'>
                        {post.title}
                    </h1>
                    <div className='flex items-center mb-8 lg:mb-0  mr-0 '>
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

                {post.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                    return getContentFragment(index, children, typeObj, typeObj.type);
                })}
            </div>
        </div >
    )
}

export default PostDetail