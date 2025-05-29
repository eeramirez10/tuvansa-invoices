import React from 'react'


interface Props {
  total: number
  setTotal: (total:number) => void
}

export const Visualitation: React.FC<Props> = ({ total, setTotal}) => {

  const handleChangeShowValue = (element: React.ChangeEvent<HTMLSelectElement>) => {
    const value = element.target.value;

    setTotal(parseInt(value))
  }

  return (
    <div className="flex justify-between">
      <h2 className="text-lg font-semibold text-gray-700 " >Listado de facturas</h2>


      <div className='flex  items-center space-x-4'>
        <span className='text-sm text-gray-600 '>Mostrar:</span>
        <select
          onChange={handleChangeShowValue} 
          value={total} 
          className='px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500'
        >
          <option value='5'> 5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>

        </select>
      </div>

    </div>
  )
}
