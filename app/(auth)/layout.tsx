import React from 'react'

export default function AuthLayout({
    children
}:{
    children:React.ReactNode
}){
    return(
        <div className='flex item-center h-full'>
            {children}
        </div>
    )
}
