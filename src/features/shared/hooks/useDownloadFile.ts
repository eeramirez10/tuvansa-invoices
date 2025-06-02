import { useCallback, useEffect, useState } from "react";
import type { FileType } from "../components/PdfModal";
import { getInvoiceFile } from "../../invoices/services/api";


export const useDownloadFile = () => {


  const [currentPath, setCurrentPath] = useState<string>('');
  const [type, setType] = useState<FileType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pdfUrl, setPdfUrl] = useState<string>('');

  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

  useEffect(() => {

    if (!type) return

    setLoading(true)
    setError(null)
    setType(null)

    getInvoiceFile({ filename: currentPath, type })
      .then(blob => {


        // 1) Si es PDF: guardo el Blob en estado y creo URL para el iframe
        if (type === "pdf") {
          setPdfBlob(blob);

          // Revoco URL anterior (si existía) antes de crear una nueva
          if (pdfUrl) {
            URL.revokeObjectURL(pdfUrl);
          }
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
          return;
        }


        // 2) Si es XML: descargo inmediatamente con el nombre que quiero
        if (type === "xml") {
          const xmlUrl = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = xmlUrl;
          // <-- Aquí defines el nombre con el que quieres salvar el XML:
          a.download = `${currentPath}.xml`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(xmlUrl);
          return;
        }



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

  const downloadPdf = useCallback(() => {
    if (!pdfBlob) return;

    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    // <-- Aquí defines el nombre con el que se guardará el PDF:
    a.download = `${currentPath}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [pdfBlob, currentPath]);


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
  const resetType = () => {
    setType(null);
    // Si reseteas, también eliminas el Blob y la URL del PDF
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl("");
    }
    setPdfBlob(null);
  };

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
    cleanError,
    downloadPdf,
    resetType

  }
}
