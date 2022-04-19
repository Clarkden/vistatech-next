import { signOut } from 'next-auth/react'
import React, { useState, useEffect } from 'react'

export default function manageData({ username }) {

    var admin
    const [requests, setRequests] = useState([])

    if (username == "clarksharkboy")
        admin = true
    else
        admin = false

    if (!admin) {
        signOut()
    }

    useEffect(() => {
        fetch('./api/contact')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setRequests(data.data)
            })
    }, [])


    return (
        <div className='flex flex-wrap justify-start'>

            {requests && requests.map(request => (
                <div className='h-fit w-fit bg-white shadow-white shadow-sm rounded-lg p-5 mx-5 mt-5'>
                    <h1>Full Name: {request.fullname}</h1>
                    <h1>Email: {request.email}</h1>
                    <h1>Phone Number: {request.phonenumber}</h1>
                    <h1>Price Range: {request.pricerange}</h1>
                    <h1>Description: {request.description}</h1>
                    <div className='mt-10'>
                        {request._id &&
                        
                            <form action="/api/delete" method="POST" target="dummyframe">
                                <input type="hidden" value={request._id} id="id" name="id"></input>
                                
                                <button className='rounded-lg shadow-red-500 bg-red-500 shadow-sm p-2 text-white mt-10'>Delete</button>
                            </form>}
                    </div>
                </div>
            ))}
        </div>
    )
}
