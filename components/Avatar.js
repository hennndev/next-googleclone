import React from 'react'

const Avatar = ({imgUrl, className = ''}) => {
    return <img src={imgUrl} loading="lazy" alt="profile pict" className={`h-7 rounded-full cursor-pointer ${className}`} />
}

export default Avatar
