import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'

const SearchInput = ({value, handleChange}) => {
    return (
        <div className="flex items-center justify-between border border-gray-200 shadow-sm py-3 px-4 rounded-full text-gray-500 focus-within:shadow-md w-full max-w-sm sm:max-w-lg lg:max-w-xl">
            <SearchIcon className="h-4"/>
            <input 
                type="text" 
                value={value}
                onChange={handleChange}
                className="bg-transparent flex-grow mx-3 outline-none text-sm md:text-md" placeholder="Telusuri Goolok atau ketik URL"/>
            <MicrophoneIcon className="h-4" />
        </div>
    )
}

export default SearchInput
