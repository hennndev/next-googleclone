import { useState } from 'react'
import { useRouter } from 'next/router'
import ResultInput from './ResultInput'
import Avatar from './Avatar'
import ResultHeaderOptions from './ResultHeaderOptions'

const ResultHeader = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(searchTerm) {
            router.push(`/search?q=${searchTerm}`)
        }
    }

   

    return (
        <header className="flex items-center justify-between flex-col sm:flex-row pt-5 pb-12 px-6 border-b border-gray-200 sticky top-0 bg-white overflow-x-hidden">
            <h1 className="text-4xl mb-5 sm:mb-0 md:text-3xl font-bold cursor-pointer" onClick={() => router.push('/')}>
                <span className="text-blue-400">G</span>
                <span className="text-red-400">o</span>
                <span className="text-yellow-400">o</span>
                <span className="text-blue-400">l</span>
                <span className="text-green-400">o</span>
                <span className="text-red-400">k</span>
            </h1>
            <form className="flex-grow sm:ml-6 w-full" onSubmit={handleSubmit}>
                <ResultInput value={searchTerm} setSearchTerm={setSearchTerm}/>
            </form>
            <Avatar
                className='hidden lg:block' 
                imgUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
            <ResultHeaderOptions/>
        </header>
    )
}

export default ResultHeader
