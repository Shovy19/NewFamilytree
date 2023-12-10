import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../images/logo.png'
import HomeNavigations from '../components/_navigations/HomeNavigations';

const Welcome = () => {

  return (
    <>
    <div className='bg-slate-800'>
        <div className='max-w-[1200px] m-auto'>
            <div>
                <HomeNavigations />
            </div>
            <div>
                
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Welcome
