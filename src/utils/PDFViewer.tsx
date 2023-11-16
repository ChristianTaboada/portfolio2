import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { IconContext } from 'react-icons'
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

import pdf from './CV- Christian Taboada FullStack.pdf'

// Configuración del trabajador de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const PDFViewer: React.FC = (): JSX.Element => {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess ({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  const goToPreviousPage = (): void => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const goToNextPage = (): void => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  return (
    <div>
      <div className='flex align-center justify-center space-x-5 bg-slate-600 text-white'>
        <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
          <IconContext.Provider value={{ className: 'text-white w-8 h-8' }}>
            <CgArrowLongLeft/>
          </IconContext.Provider>
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
        <IconContext.Provider value={{ className: 'text-white w-8 h-8' }}>
            <CgArrowLongRight/>
          </IconContext.Provider>
        </button>
      </div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        customTextRenderer={false}/>
      </Document>
    </div>
  )
}

export default PDFViewer
