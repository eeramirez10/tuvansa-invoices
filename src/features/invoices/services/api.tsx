import { envs } from "../../../config/envs"
import { getFetcher, postFileFetcher } from "../../utils/fetcher"
import type { InvoicesResponse } from "./types"



const API_URL = `${envs.URL}/billing/invoices`

export const getInvoices = async (options: RequestInit, params?: { [key: string]: unknown; }) => {

  const newParams = []

  if (params?.page) {
    newParams.push(`page=${params?.page}`)
  }

  if (params?.pageSize) {
    newParams.push(`pageSize=${params?.pageSize}`)
  }

  if (params?.rfc) {
    newParams.push(`rfc=${params?.rfc}`)
  }

  if (params?.search) {
    newParams.push(`search=${params?.search}`)
  }

  if (params?.branchOffice) {
    newParams.push(`branchOffice=${params?.branchOffice}`)


  }


  const resp = await getFetcher<InvoicesResponse>(`${API_URL}?${newParams.join('&')}`, options)


  return resp


}

export const getInvoiceFile = async (body: { filename: string, type: string }) => {

  const { filename, type } = body


  return await postFileFetcher(`${API_URL}/file`, { filename: `${filename}.${type}`.split('/').pop(), type })

}