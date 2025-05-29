import Paginator from '../components/Pagination'
import { PdfModal, } from '../../../shared/components/PdfModal'
import { Welcome } from '../components/Welcome'
import { useEffect, useState } from 'react'
import { useInvoices } from '../../hooks/useInvoices'
import { Search } from '../components/Search'
import { Visualitation } from '../components/Visualitation'
import { Loader } from '../../../shared/components/Loader'
import { Card } from '../components/Card'

import { usePagination } from '../../../shared/hooks/usePagination'
import { useDownloadFile } from '../../../shared/hooks/useDownloadFile'




export const Invoices = () => {


  const { size, search, page, branch, hadleSearch, handlePage, handleSize } = usePagination()

  const { invoicesList, loading } = useInvoices({ size, search, page, branch })

  const { downloadFile, currentPath, type, pdfUrl, error, loading: fileLoading, } = useDownloadFile()


  const [modalOpen, setModalOpen] = useState(false);


  const openInvoice = () => {
    setModalOpen(true);
  };

  const closeModalInvoice = () => {
    setModalOpen(false)

  }

  useEffect(() => {

    if (currentPath && type === 'pdf') {
      openInvoice()
    }

  }, [currentPath, type])



  const isClient = false;


  return (
    <>
      {
        isClient &&
        <Welcome totalInvoices={invoicesList?.total ?? 0} />
      }

      <Search handleSearch={hadleSearch} />


      <Visualitation total={size} setTotal={handleSize} />


      <div className='invoices-container relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>



        {
          loading
            ?
            <Loader />
            :

            <>

              {invoicesList?.items.map((item) => (

                <Card
                  key={item.invoiceNumber}
                  folio={item.invoiceNumber}
                  status={item.statusCfd.toString()}
                  invoiceDate={item.invoiceDate}
                  amount={item.totalAmount}
                  downloadPdf={downloadFile}
                  downloadXml={downloadFile}

                />
              ))}
            </>
        }
      </div>


      <div className=' 
          fixed              
          bottom-5          
          left-1/2            
          transform 
          -translate-x-1/2 
          z-50                          
          flex items-center justify-center
        '
      >

        <Paginator
          currentPage={page}
          totalPages={7}
          onPageChange={handlePage}
        />


      </div>

      <PdfModal
        isOpen={modalOpen}
        onClose={() => closeModalInvoice()}
        pdfUrl={pdfUrl}
        error={error}
        loading={fileLoading}
      />


    </>
  )
}
