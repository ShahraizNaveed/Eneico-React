import React from 'react'
import "./SingleProjectPage.css"
import { useParams } from 'react-router-dom'

const SingleProjectPage = () => {
    const { id } = useParams();
    return (
        <div>SingleProjectPage {id}</div>
    )
}

export default SingleProjectPage