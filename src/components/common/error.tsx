import React from 'react'

const Error = (props:{message:string}) => {
  return (
    <div className='flex flex-grow items-center justify-center'>
      {props.message}
    </div>
  )
}

export default Error
