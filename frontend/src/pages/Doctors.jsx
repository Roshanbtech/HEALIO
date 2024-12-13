import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { use } from 'react';

const Doctors = () => {

  const { speciality } = useParams();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      const filtered = doctors.filter((doctor) => doctor.speciality === speciality);
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
       <p className='text-gray-600'>Browse through the doctors specialist.</p>
       <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-red-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-green-300 text-red-600" : ""}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-red-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-green-300 text-red-600" : ""}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-red-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-green-300 text-red-600" : ""}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-red-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-green-300 text-red-600" : ""}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-red-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-green-300 text-red-600" : ""}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-red-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-green-300 text-red-600" : ""}`}>Gastroenterologist</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filteredDoctors.map((item, index) => (
                <div key={index} onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-green-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'> 
                  <img className='bg-red-600' src={item.image} alt="" />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-center text-green-500">
                      <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                      <p>Available</p>
                    </div>
                    <p className="text-green-900 text-lg font-medium">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.speciality}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors