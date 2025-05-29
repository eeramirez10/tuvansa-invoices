import { useEffect, useState } from "react";
import type { FileType } from "../components/PdfModal";
import { getInvoiceFile } from "../../invoices/services/api";


export const useDownloadFile = () => {


  const [currentPath, setCurrentPath] = useState<string>('');
  const [type, setType] = useState<FileType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pdfUrl, setPdfUrl] = useState<string>('');



  useEffect(() => {

    if (!type) return

    setLoading(true)
    setError(null)
    setType(null)

    getInvoiceFile({ filename: currentPath, type })
      .then(blob => {
        const url = URL.createObjectURL(blob);

        if (type === 'pdf') {

          setPdfUrl(url);

          return
        }

        const a = document.createElement('a');
        a.href = url;
        a.download = `${currentPath}.XML`;     // nombre sugerido
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);

        return



      })
      .catch(err => {
        console.error(err);
        setError('No se pudo cargar el PDF.');
      })
      .finally(() => {
        setLoading(false)
      })
    // .finally(() => setLoading(false));

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
        setPdfUrl('');
      }
    }



  }, [currentPath, pdfUrl, type])


  const cleanType = () => {
    setType(null)
  }




  const downloadFile = (path: string, type: FileType) => {
    setCurrentPath(path)
    setType(type)
  }

  const handleType = (type: FileType) => {
    setType(type)
  }

  const cleanError = () => {
    setError(null)
  }



  return {
    currentPath,
    loading,
    error,
    type,
    pdfUrl,
    handleType,
    downloadFile,
    cleanType,
    cleanError

  }
}
