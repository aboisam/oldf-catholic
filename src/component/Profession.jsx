import React from 'react'
import Rev from '../assets/Rev.jpeg'
import Rev2 from '../assets/Asstp.jpeg'
import catechist from '../assets/Rev.jpeg'
import catechist2 from '../assets/Rev.jpeg'

const Profession = () => {
  return (
    <section className='bg-gray-300 py-10 px-4'>
      <div className='max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8'>
        <div className="priesthood flex flex-col items-center bg-white rounded-xl p-6 shadow">
          <img
            src={Rev}
            alt="emmanuel"
            className="w-50 h-50 object-cover rounded-full mb-4 border-4 border-blue-200"
          />
          <h1 className="text-lg font-bold">Rev.Fr. Emmanuel Nwoke</h1>
          <span className="text-gray-600">Parish Priest</span>
        </div>
        <div className="priesthood flex flex-col items-center bg-white rounded-xl p-6 shadow">
          <img
            src={Rev2}
            alt="Assistant"
            className="w-50 h-50 object-cover rounded-full mb-4 border-4 border-blue-200"
          />
          <h1 className="text-lg font-bold">Rev.Fr. Emmanuel Nwoke</h1>
          <span className="text-gray-600">Assistant Parish Priest</span>
        </div>
        <div className="priesthood flex flex-col items-center bg-white rounded-xl p-6 shadow">
          <img
            src={catechist}
            alt="Emmanuel"
            className="w-50 h-50 object-cover rounded-full mb-4 border-4 border-blue-200"
          />
          <h1 className="text-lg font-bold">Bro. Chimezie Daniel</h1>
          <span className="text-gray-600">Parish Catechist</span>
        </div>
        <div className="priesthood flex flex-col items-center bg-white rounded-xl p-6 shadow">
          <img
            src={catechist2}
            alt="Andrew"
            className="w-50 h-50 object-cover rounded-full mb-4 border-4 border-blue-200"
          />
          <h1 className="text-lg font-bold">Bro. Sunday Andrew</h1>
          <span className="text-gray-600">Assistant Catechist</span>
        </div>
      </div>
    </section>
  )
}

export default Profession;