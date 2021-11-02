import React from 'react'
import { GlobeIcon } from '@heroicons/react/solid'

const Footer = () => {
    return (
        <div className="absolute bottom-0 right-0 left-0 text-xs md:text-sm text-gray-500 bg-gray-100 grid w-full divide-y-[1px] divide-gray-300">
            <div className="px-8 py-3">
                <p>Indonesian</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-1 py-2 lg:py-4 px-8 grid-flow-row-dense">
                
                <div className="flex items-center justify-center md:col-span-2 lg:col-start-2 lg:col-span-1">
                    <GlobeIcon className="h-5 text-green-500 mr-1"/>
                    Carbon neutral since 2007
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-8 whitespace-nowrap">
                    <p className="link">Advertising</p>
                    <p className="link">Business</p>
                    <p className="link">How Search Work</p>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-8">
                    <p className="link">Privacy</p>
                    <p className="link">Terms</p>
                    <p className="link">Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
