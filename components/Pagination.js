import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ArrowCircleRightIcon, ArrowCircleLeftIcon } from '@heroicons/react/outline'

const Pagination = ({nextPage}) => {

    const [pageIdx, setPageIdx] = useState(typeof window !== "undefined" ? 
        (+window.localStorage.getItem('pageIdx') || 0) : null)
    const [page, setPage] = useState(typeof window !== "undefined" ? (+window.localStorage.getItem('page') || 1) : null)
    
    const router = useRouter()

    useEffect(() => {
       if(nextPage?.request[0]?.startIndex === 1) {
           setPage(1)
           setPageIdx(0)
       }
    }, [nextPage?.request[0]?.startIndex])

    const handlePrevious = () => {
        const updatePageIdx = pageIdx - 10
        const updatePage = page - 1
        setPageIdx(updatePageIdx)
        setPage(updatePage)
        window.localStorage.setItem('pageIdx', updatePageIdx)
        window.localStorage.setItem('page', updatePage)
        router.push(`${router.pathname}?q=${router.query.q}&pageIdx=${updatePageIdx}`)
    }
    const handleNext = () => {
        const updatePageIdx = pageIdx + 10
        const updatePage = page + 1
        setPageIdx(updatePageIdx)
        setPage(updatePage)
        window.localStorage.setItem('pageIdx', updatePageIdx)
        window.localStorage.setItem('page', updatePage)
        router.push(`${router.pathname}?q=${router.query.q}&pageIdx=${updatePageIdx}`)
    }

    return (
        <div className="flex items-center justify-center space-x-8">
            {nextPage.previousPage && <ArrowCircleLeftIcon className="h-7 text-blue-600 font-light cursor-pointer" onClick={handlePrevious}/>}
            <p className="text-gray-900 font-medium">Page {page}</p>
            {nextPage.nextPage && <ArrowCircleRightIcon className="h-7 text-blue-600 font-light cursor-pointer" onClick={handleNext}/>}
        </div>
    )
}

export default Pagination
