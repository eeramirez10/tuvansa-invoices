import { useState, type ChangeEvent } from "react"


interface Props {
  handleSearch: (value: string) => void
}

export const Search: React.FC<Props> = ({ handleSearch }) => {

  const [value, setValue] = useState('')


  const handleChange = (res: ChangeEvent<HTMLInputElement>) => {
    setValue(res.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === 'Enter') {
      handleSearch(value)
    }
  }

  return (
    <section className="mb-8">
      <div className='bg-white rounded-lg shadow p-6'>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              onChange={handleChange}
              onKeyDown={handleKeyDown}

              type="text"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 "
              placeholder="Buscar por folio, fecha, monto..."
            />
          </div>

          <div className="flex items-center space-x-2">
            <select id="sort-by" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option value="date-desc">Más recientes primero</option>
              <option value="date-asc">Más antiguas primero</option>
              <option value="amount-desc">Mayor monto primero</option>
              <option value="amount-asc">Menor monto primero</option>
            </select>
            <button id="filter-btn" className="p-2 rounded-md hover:bg-gray-100">
              <i className="fas fa-filter text-gray-500"></i>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
