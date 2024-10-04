'use client'
import { Singlepageproduct } from '../components/Main'

export default function products() {


  
  // Example: Log the slug value
//   console.log(slug); // Output: the slug value from the URL

  return (
    <>
      <div className='flex gap-[10px] flex-wrap relative top-[80px] mb-[80px] mx-[200px]'>
        <Singlepageproduct />
      </div>
    </>
  );
}
