import React from 'react'
import {Link} from "react-router-dom"

function Delete() {
  return (
    <div>
       you can delete here
       <Link to='/' className='btn btn-success'>UserInfoPage</Link>
    </div>
  )
}

export default Delete
