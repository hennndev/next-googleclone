import { SearchIcon } from '@heroicons/react/outline'
import { XIcon, MicrophoneIcon } from '@heroicons/react/solid'

const ResultInput = ({value, setSearchTerm}) => {

    return (     
        <div className="flex items-center justify-between border border-gray-100 shadow-md w-full max-w-2xl py-2 px-5 rounded-full text-gray-400">
            <input 
                type="text" 
                className="outline-none flex-grow" 
                value={value} 
                onChange={(e) => setSearchTerm(e.target.value)}/>
            {value && 
            <XIcon 
                className="h-4 border-r border-gray-300 pr-2 pl-2 cursor-pointer text-red-500"
                onClick={() => setSearchTerm('')}/>}
            <MicrophoneIcon className="h-4 ml-2 mr-3 cursor-pointer text-blue-500"/>
            <SearchIcon className="h-4 cursor-pointer text-blue-500" type="submit"/>
        </div>
    )
}

export default ResultInput
