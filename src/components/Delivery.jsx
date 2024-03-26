

import React from 'react'

const Delivery = () => {
  return (
    <div className='bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='w-full mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4'
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>Get The App</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
          <p className='text-justify pe-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi ab cupiditate voluptatem doloremque
            soluta debitis possimus nesciunt corrupti,
            aspernatur aut sit optio reprehenderit ut hic quas voluptate dolore explicabo.
            Dolorum totam accusantium aliquam eligendi nostrum assumenda eius consequuntur nesciunt,
            tempore ullam asperiores vitae et quam laborum quod quaerat quis atque quisquam repudiandae molestias!
            Quae cumque officiis architecto reiciendis error?
            Reprehenderit, a maxime corporis explicabo numquam sed ullam, modi deleniti nobis cumque
            eos at provident temporibus eum laboriosam repellat sunt aliquam? Expedita facere eius aliquid quae recusandae perferendis dignissimos porro?</p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery