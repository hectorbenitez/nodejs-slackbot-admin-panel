import { useRouter } from 'next/router'
import axios from 'axios'
import { React, useEffect, useState } from 'react'

const Redirect = () => {
  const backendUrl = ''
  const router = useRouter()
  const [clientCode, setClientCode] = useState('')

  useEffect(() => {
    // console.count('useEffect')
    // console.log(clientCode)
    const postCode = async () => {
      if(clientCode) {
        axios.post(backendUrl, { code: clientCode })
      } else {
        setClientCode(router.query.code)
      }
    }
    postCode()
  })
  
 return(
   <div>redirect</div>
 )
}

export default Redirect
