import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from "../services"

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((result) => {
            setCategories(result)
        })
    }, [])
    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b'>
                Categories
            </h3>
            {
                categories.map((category) => (
                    <div className='flex items-center w-full mb-4' key={category.name}>
                        {category.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Categories