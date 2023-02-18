import React, { useState } from 'react';
import Head from 'next/head';
import moment from 'moment';
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';



const PostDetail = ({ post }) => {
    const [copied, setCopied] = useState(false);
    const [btnIndex, setBtnIndex] = useState(0);

    const copyContText = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        })
    };


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
                    const text = codeRef.current.innerText;
                    copyContText(text);
                    setBtnIndex(index);
                };


                return (
                    <div >

                        <button key={index} onClick={copyToClipboard} className="m-2" >
                            <span className={` text-white px-3 py-2 rounded-lg flex items-center justify-center ${index === btnIndex && copied ? 'animate-pulse bg-green-400' : 'bg-blue-400'}`}>

                                <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
                                    <path d={index === btnIndex && copied ? "M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" : "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"} />
                                </svg>

                            </span>
                        </button>

                        <pre key={index} >
                            <code ref={codeRef} >
                                {modifiedText.map((item, i) => (
                                    <React.Fragment key={i}>{item}</React.Fragment>
                                ))}
                            </code>
                        </pre>
                        <hr />
                    </div>


                );
            default:
                return modifiedText;
        }
    };

    // Rest of the component code




    return (
        <div className='bg-white shadow-lg rounded-lg  lg:p-8 pb-12 mb-8'>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/an-old-hope.min.css"
                />
            </Head>
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