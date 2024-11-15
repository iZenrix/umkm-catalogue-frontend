import React from 'react'

import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = ({ redirectLink }) => {
  const error = useRouteError()

  return (
    <div className='w-screen h-screen bg-blue-50 flex justify-center items-center'>
      <div className="error-message bg-white rounded-2xl p-10">
        <div className="error-status mb-5">
          <p className='text-5xl font-bold text-tersier-red text-center'>{error.status}</p>
          <p className='text-xl font-medium text-center'>{error.statusText}</p>
        </div>
        <p className='text-justify mb-5'>{error.data}</p>

        <div className="redirect-link flex justify-center items-center">
          <Link to={redirectLink}>
            <div className='py-2 px-4 bg-tersier-blue rounded-md text-white'>
              Back to Home 
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ErrorPage