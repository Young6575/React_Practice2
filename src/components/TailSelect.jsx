import React from 'react'
import sarea from '../db/sarea.json'

export default function TailSelect({selRef,handelSel}) {
  return (
    <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            ref={selRef}
            onChange={handelSel}>
     <option>--측정소선택--</option>  
      {
          sarea.map(item => (
                    <option key={item['코드']} value={item['코드']}>{item['측정소']}</option>
          ))
      }
    </select>
    
    

  )
}
