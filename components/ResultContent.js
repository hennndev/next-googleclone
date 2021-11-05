import React from 'react'
import Pagination from './Pagination'

const ResultContent = ({results}) => {

    return (
        <div className="pt-5 pl-5 sm:pl-40 pr-5 mb-10 w-full max-w-3xl break-words">
            <p className="text-gray-500 text-sm md:text-base mb-5">Sekitar {results?.searchInformation?.formattedTotalResults} hasil ({results?.searchInformation?.formattedSearchTime} detik)</p>

            {results.items ? results.items.map(item => (
                <div className="mb-7" key={item.link}>
                    <a target="_blank" rel="noreferrer" href={item.link} className="text-sm text-gray-800 line-clamp-1">
                        {item.formattedUrl}
                    </a>
                    <a  target="_blank"
                        rel="noreferrer"
                        href={item.link} 
                        className="text-xl text-blue-600 hover:underline cursor-pointer font-medium my-2">
                        <h2>{item.title}</h2>
                    </a>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.snippet}</p>
                </div>
            )) : (
                <div className="grid place-items-center mt-20">
                    <h1>Ooops, Hasil pencarian yang kamu cari tidak ada :(</h1>
                </div>
            )}

            {results.items && <Pagination nextPage={results?.queries}/>}
        </div>
    )
}

export default ResultContent
