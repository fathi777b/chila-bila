import React from 'react'
import HomeImg from '../../image/home.jpg'
import { FcDepartment } from "react-icons/fc";

const RealEstate = () => {
  return (
   <div className='bg-slate-100 '>
    <div className='real' >
    <h1>  RealEstate</h1>
    </div>
    <FcDepartment className='iconR' size={40}/>
    <div className='category'>
    <div className="annoucment-card cursor-pointer max-w-48 m-4 bg-white shadow-md rounded-xl flex flex-col p-3  ">
         <img className='max-w-48 rounded-xl' src={HomeImg} ></img>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium '>Maison individuelle de 150m2 sous-sol comp </h3>
         <h3 className='max-w-44 flex flex-warp p-3 items-center justify-center font-medium' >150.000 TND</h3>
         </div>
         </div>
    </div>
   
  )
}

export default RealEstate



