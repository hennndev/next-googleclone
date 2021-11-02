import { useState } from 'react'
import { useRouter } from 'next/router'
import { ArrowCircleRightIcon, ArrowCircleLeftIcon } from '@heroicons/react/outline'

const Pagination = () => {

    const [pageIdx, setPageIdx] = useState(typeof window !== "undefined" ? 
        (+window.localStorage.getItem('pageIdx') || 0) : null)
    const [page, setPage] = useState(typeof window !== "undefined" ? (+window.localStorage.getItem('page') || 1) : null)

    const router = useRouter()

    console.log(router)

    const handlePrevious = () => {
        if(pageIdx == 0) {
            setPageIdx(0)
            setPage(1)
        } else {
            const updatePageIdx = pageIdx - 10
            const updatePage = page - 1
            setPageIdx(updatePageIdx)
            setPage(updatePage)
            window.localStorage.setItem('pageIdx', updatePageIdx)
            window.localStorage.setItem('page', updatePage)
            router.push(`${router.pathname}?q=${router.query.q}&pageIdx=${updatePageIdx}`)
        }
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
            {page >= 1 && <ArrowCircleLeftIcon className="h-7 text-blue-600 font-light cursor-pointer" onClick={handlePrevious}/>}
            <p className="text-gray-900 font-medium">Page {page}</p>
            <ArrowCircleRightIcon className="h-7 text-blue-600 font-light cursor-pointer" onClick={handleNext}/>
        </div>
    )
}

export default Pagination
