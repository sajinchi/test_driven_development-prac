import React from 'react'

const Error = (props:{message:string}) => {
  return (
    <div className='flex items-center justify-center'>
      {props.message}
    </div>
  )
}

export default Error
