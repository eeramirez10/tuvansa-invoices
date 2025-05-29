import { useEffect, useState } from 'react'
import { getInvoices } from '../services/api'
import type { InvoicesResponse } from '../services/types'






interface Props {

  size: number
  page: number
  search: string
  branch?: string

}

export const useInvoices = ({ size, page, search, branch  }: Props) => {

 
  const [loading, setLoading] = useState(false)

  const [invoicesList, setInvoicesList] = useState<InvoicesResponse>()



  useEffect(() => {

    setLoading(true)

    const controller = new AbortController()
    const signal = controller.signal

    getInvoices(
      { signal },
      {
        page,
        pageSize: size,
        // rfc: 'GCO980828GY0',
        search,
        branchOffice: branch
      })
      .then((resp) => {

        setInvoicesList({ ...resp })
      })
      .catch((e) => {
        console.log(e)

      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      controller.abort()
    }

  }, [size, page, search, branch])





  return {
    invoicesList,
    loading

  }
}
