"use client"
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf'; 
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const PdfViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file="https://ncert.nic.in/textbook.php?jemh1=1-14" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

export default PdfViewer