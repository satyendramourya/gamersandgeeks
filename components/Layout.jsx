import React from 'react'
import Header from './Header'

function Layout({ children }) {
    return (
        <div className='lg:mx-40'>
            <Header />
            {children}
        </div>
    )
}

export default Layout