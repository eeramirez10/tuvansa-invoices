import React from 'react'
import { dateFormat } from '../../../utils/dateFormat'
import { folioToPdfFilename } from '../../../utils/folioToPdfFilename'
import { formatToMXN } from '../../../../config/utils/formatToMXN'
import type { FileType } from '../../../shared/components/PdfModal'


interface Props {
  folio: string
  status: string
  invoiceDate: string
  amount: string
  downloadPdf: (filename: string, type:FileType) => void
  downloadXml: (filename: string, type:FileType) => void
}


export const Card: React.FC<Props> = ({ folio, status, invoiceDate, amount, downloadPdf,downloadXml  }) => {



  const filename = folioToPdfFilename(folio)

  const amountFormat = formatToMXN(amount)



  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg' >
      <div className='p-5'>
        <div className='flex justify-between items-start mb-3'>
          <div>
            <span className='text-xs font-medium text-gray-500'>Folio</span>
            <h3 className='text-lg font-bold text-gray-800'>{folio}</h3>
          </div>
          <span className='border rounded-full text-sm px-1 py-1 bg-green-500 text-white '>Verificada {status}</span>
        </div>

        <div className='flex justify-between items-start mb-4'>
          <div>
            <span className='text-sm text-gray-500 font-medium'>Fecha</span>
            <p className='text-sm text-gray-700'>{dateFormat(invoiceDate)}</p>
          </div>

          <span className='font-semibold  rounded-lg px-2 py-2 text-yellow-500 bg-yellow-100 border-none text-sm'>{amountFormat}</span>
        </div>

        <div className='border-t pt-4'>

          <div className='flex justify-between space-x-5'>
            <button
              onClick={() => downloadPdf(filename, 'pdf')}
              className='flex items-center justify-center border rounded-md px-4 py-2 w-full text-yellow-500 border-yellow-500 hover:bg-yellow-50' >
              <i className='fas fa-file-pdf mr-3 '></i>  PDF
            </button>
            <button 
              onClick={() => downloadXml(filename, 'xml')}
              className='border rounded-md px-4 py-2 w-full text-yellow-500 border-yellow-500 hover:bg-yellow-50 '>
              <i className='fas fa-file-code mr-3 '></i>XML

            </button>


          </div>

        </div>
      </div>
    </div>
  )
}
