import React from 'react'

const ResultHeaderOption = ({icon: Icon, title, selected}) => {
    return (
        <div className={`flex items-center pb-1 border-b-2 border-transparent hover:border-blue-500 link ${selected && 'text-blue-5000 border-blue-500'}`}>
            <Icon className="h-3 mr-1"/>
            <p className="">{title}</p>
        </div>
    )
}

export default ResultHeaderOption
