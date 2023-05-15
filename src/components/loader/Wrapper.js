import React from 'react'
import InproLoader from './Loader'


const Wrapper = ({ loading, children }) => {
  return (
    <div>
    {loading ? <InproLoader/> : children}
  </div>
  )
}

export default Wrapper