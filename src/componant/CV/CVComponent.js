import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CVPreview } from './CvPreview';
//npm install react-to-print

const CVComponent = () => {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>

            <button onClick={handlePrint}>Download PDF</button>

            <div ref={componentRef}>
                <CVPreview />
            </div>
        </div>
    );
};

export default CVComponent;
