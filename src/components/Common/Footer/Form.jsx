import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col '>
      <h1 className='text-white font-semibold text-[56px] w-fit'>CONTACT US</h1>
      <div className='flex '>
        <textarea name="" id="" cols="60" rows="5" className='rounded-xl p-2' placeholder='Type here'></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="query" className="block text-gray-300 font-bold mb-2">Query Type</label>
        <select id="query" name="query" className="bg-gray-700 text-white py-1 px-2 rounded w-full" required>
          <option value="Consultancy">Consultancy</option>
          <option value="Research">Research</option>
          <option value="Contact / Visit">Contact / Visit</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>

      </div>

    </div>
  )
}

export default Form
