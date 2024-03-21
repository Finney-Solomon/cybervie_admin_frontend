import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const WelcomePage = () => {
const dispatch=useDispatch()
  const getUser = async () => {
    try {
        const res = await axios.get(`http://localhost:5001/login`, {
            withCredentials: true
        })
        console.log(res,"response ")
        // dispatch(setCredentials({ ...res.data.user._json, _id: res.data._id, isAdmin: res.data.user.isAdmin }))
    } catch (error) {
       console.log(error(error?.data?.message || error?.error))
    }
}

useEffect(() => {
    getUser()
}, [])
  return (
    <div>WelcomePage</div>
  )
}
