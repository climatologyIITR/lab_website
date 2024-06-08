import React from 'react'

const Form = () => {
  return (
    <div>
      <h1 className='text-white font-[600] text-[56px] leading-[150%] mb-[21px]'>CONTACT US</h1>
      <form className='flex gap-[24px]'>
        <div className='flex '>
          <textarea name="" id="" cols="40" rows="6" className='rounded-xl p-2' placeholder='Type here'></textarea>
        </div>
        <div className='flex flex-col'>
          <div className='flex gap-[24px]'>
            <input placeholder='Email' type='email' className='rounded-[12px] bg-[#FFF] w-[60%] h-[5vh] p-[12px]'></input>
            <input placeholder='Contact No.' className='rounded-[12px] bg-[#FFF] w-[40%] h-[5vh] p-[12px]'></input>
          </div>
          <div className="my-[24px]">
            <label htmlFor="query" className="block text-gray-300 font-bold mb-2">Query Type</label>
            <select id="query" name="query" className="bg-gray-700 text-white py-1 px-2 rounded w-full" required>
              <option value="Consultancy">Consultancy</option>
              <option value="Research">Research</option>
              <option value="Contact / Visit">Contact / Visit</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className='flex justify-end'>
            <button className='rounded-[12px] bg-[#43E843] w-[150px] h-[5vh] text-[#1D1D1D] text-[20px] font-[400] leading-[150%] '>SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
