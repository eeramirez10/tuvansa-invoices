// src/components/PdfModal.tsx
import React from 'react';
import { Loader } from './Loader';



export type FileType = 'pdf' | 'xml'

interface PdfModalProps {

  /** Si el modal está abierto o cerrado */
  isOpen: boolean;
  /** Función para cerrar el modal */
  onClose: () => void;
  pdfUrl: string
  error: string | null
  loading: boolean

}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, pdfUrl, error, loading, onClose }) => {

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        position: 'relative',
        width: '80%', height: '80%',
        background: '#fff', borderRadius: '8px', overflow: 'hidden',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '8px', right: '8px',
            background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer'
          }}
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        {loading && <Loader />}
        {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>{error}</p>}

        {!loading && !error && pdfUrl && (
          <iframe
            src={pdfUrl}
            title="PDF"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        )}
      </div>
    </div>
  );
};
