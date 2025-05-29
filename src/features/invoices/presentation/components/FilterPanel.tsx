import React from 'react'

export const FilterPanel = () => {
  return (

    <div className='bg-white p-6 rounded-lg shadow'>

      <div className='mt-4'>
        <div className='border-t pt-4'>
          <h3 className='font-medium mb-3'>Filtrar por:</h3>
          <div className='flex flex-wrap gap-2' >
            <button className='px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100'>Todas</button>
            <button className='px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100'>Verificadas</button>
            <button className='px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100'>Canceladas</button>
          </div>
          <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm  font-medium text-gray-700 mb-1'>Periodo</label>
              <div className='flex space-x-2'>
                <input type="date" className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-yellow-300' />
                <input type="date" className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-yellow-300' />

              </div>
            </div>
            <div>
              <label className='block font-medium text-sm text-gray-700 mb-1'>Monto minimo</label>
              <input
                type="number"
                className='border rounded px-4 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-yellow-500'
                placeholder='Moto minimo'
              />
            </div>
          </div>
          <div className='mt-4 flex space-x-2 justify-end'>
            <button className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100'>Limpiar</button>
            <button className='px-4 py-2 border bg-yellow-400 text-white rounded-md hover:bg-yellow-500'>Aplicar</button>
          </div>
        </div>
      </div>

    </div>

  )
}
