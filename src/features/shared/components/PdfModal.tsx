// src/components/PdfModal.tsx
import React from 'react';
import { Loader } from './Loader';

export type FileType = 'pdf' | 'xml';

interface PdfModalProps {
  /** Si el modal está abierto o cerrado */
  isOpen: boolean;
  /** Función para cerrar el modal */
  onClose: () => void;
  /** URL temporal del PDF (ObjectURL) para mostrar en el iframe */
  pdfUrl: string;
  /** Mensaje de error, si aplica */
  error: string | null;
  /** Flag de carga (true mientras se obtiene el Blob) */
  loading: boolean;
  /** Función que dispara la descarga del PDF con nombre personalizado */
  downloadPdf: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({
  isOpen,
  pdfUrl,
  error,
  loading,
  onClose,
  downloadPdf,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '80%',
          height: '80%',
          background: '#fff',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {/* Botón de Cerrar */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        {/* Loader */}
        {loading && <Loader />}

        {/* Mensaje de error */}
        {error && (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>
            {error}
          </p>
        )}

        {/* Aquí va el PDF y el botón de descarga */}
        {!loading && !error && pdfUrl && (
          <>
            {/* Ajustamos la altura del iframe al 90% para dejar espacio al botón */}
            <iframe
              src={`${pdfUrl}`}
              title="PDF"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />

            {/* Contenedor para el botón de descarga */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
              }}
            >
              <button
                onClick={downloadPdf}
                className="bg-yellow-500 rounded-md px-2 py-1 text-white hover:bg-yellow-400 font-medium"
              >
                Descargar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
