import React from 'react'
import { useRouteError } from "react-router-dom"
import { BiError } from 'react-icons/bi'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page" className="flex items-center justify-center h-screen bg-gradient-to-l from-zinc-50 to-zinc-100">
        <div className='grid justify-items-center'>
            <div className=' text-red-800 text-3xl'><BiError/ ></div>
            <div className='text-lg text-red-700 font-semibold'>Attenzione!</div>
            <div>Si è verificato un errore inaspettato</div>
            <div className=' font-medium'><i>{error.statusText || error.message}</i></div>
        </div>
      </div>
    );
}
