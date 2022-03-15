import React from 'react'
import ImageOne from '../image/egg.jpg';
import ImageTwo from '../image/eggs.jpg';

const Content = () => {
  return (
    <div>
        <div className='menu-card'>
        <img src={ImageOne} className='h-full rounded mb-20 shadow' alt='egg'/>
            <div className='.center-content'>
                <h2 className='text-2xl mb-2'>Egg Muffins</h2>
                <p className='mb-2'>Delicious</p>
                <span>$16</span>
            </div>
        </div>

        <div className='menu-card'>
        <img src={ImageTwo} className='h-full rounded mb-20 shadow' alt='egg'/>
            <div className='.center-content'>
                <h2 className='text-2xl mb-2'>Egg Muffins</h2>
                <p className='mb-2'>Eggs</p>
                <span>$16</span>
            </div>
        </div>
    </div>
  )
}

export default Content
