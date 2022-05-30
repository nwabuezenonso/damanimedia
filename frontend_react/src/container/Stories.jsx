import React from 'react'

import { Stories } from '../components/Stories';
import { Footer} from '../miniComponent';

const PortfolioPage = () => {
  return (
   <div className='portfolio_style'>
     <Stories />
     <Footer />
   </div>
  )
}

export default PortfolioPage