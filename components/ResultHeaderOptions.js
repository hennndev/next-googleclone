import React from 'react'
import ResultHeaderOption from './ResultHeaderOption'
import { SearchIcon, PlayIcon, PhotographIcon, MapIcon, NewspaperIcon, DotsVerticalIcon  } from '@heroicons/react/outline'

const ResultHeaderOptions = () => {
    return (
        <div className="flex items-center absolute w-full bottom-0 left-7 pr-14 sm:left-40 text-sm md:text-base text-gray-600 scrollbar-hide overflow-x-scroll">
            <div className="flex items-center space-x-6">
                <ResultHeaderOption
                    icon={SearchIcon}
                    title="All"/>
                <ResultHeaderOption
                    icon={PhotographIcon}
                    title="Images"/>
                <ResultHeaderOption
                    icon={PlayIcon}
                    title="Videos"/>
                <ResultHeaderOption
                    icon={MapIcon}
                    title="Maps"/>
                <ResultHeaderOption
                    icon={NewspaperIcon}
                    title="News"/>
                <ResultHeaderOption
                    icon={DotsVerticalIcon}
                    title="More"/>
            </div>
        </div>
    )
}

export default ResultHeaderOptions
