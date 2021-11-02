import React from 'react'
import Avatar from './Avatar'
import { ViewGridIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <div className="flex items-center justify-end md:justify-between px-5 py-3 text-sm text-gray-600 font-medium">
            <div className="hidden md:flex items-center space-x-5">
                <p className="link">About</p>
                <p className="link">Store</p>
            </div>

            <div className="flex items-center space-x-5">
                <p className="link">Gmail</p>
                <p className="link">Images</p>
                <ViewGridIcon 
                    className="h-10 p-2 cursor-pointer rounded-full hover:bg-gray-50"/>
                <Avatar imgUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
            </div>
        </div>
    )
}

export default Header
