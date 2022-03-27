import React from 'react';
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div >
      <p>Landing Page</p>
        <Link to="nextPage">
          <button>
            next
          </button>
        </Link>
    </div>
  )
}
export default Landing;