import React, { useRef, useState, useMemo } from 'react';
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from "jspdf";
import '../css/PreviewWorksheet.css';


function PreviewWorksheet({ firstAddendsList, secondAddendsList, WorksheetTitle }) {
  const [showAnswerState, setShowAnswerState] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    documentTitle: "Addition Worksheet",
    content: () => componentRef.current,
  });

  const doc = new jsPDF();
  const downloadPDF = () => {
    doc.html(componentRef.current, {
      callback: function (doc) {
        doc.save(`${WorksheetTitle}.pdf`);
      },
      margin: [10, 5, 10, 5],
      x: 10,
      y: 10
    });
  }


  const showAnswer = () => {
    showAnswerState ? setShowAnswerState(false) : setShowAnswerState(true);
    const showAnswerSelector = document.getElementsByClassName("answerRow");
    Array.from(showAnswerSelector).map((item) => {
      showAnswerState ? (item.style.visibility = "visible") :
        (item.style.visibility = "hidden");
    });

  }


  const questions = firstAddendsList.map((items, index) =>
    <div className='questionConatiner' key={index}>
      <div className='firstRow'>{index + 1}<span>)</span></div>
      <div className='secondRow'>{items}</div>
      <div className='thirdRow'>{secondAddendsList[index]}</div>
      <div className='answerRow'>{items + secondAddendsList[index]}</div>
    </div>
  );

  return (
    <>
      <div className='PreviewWorksheetContainer'>
        <span>Preview Questions</span>
        <div className='previewContainer'>
          <div className='contentConatainer' documentTitle={WorksheetTitle} ref={componentRef} >
            <span>{WorksheetTitle}</span>
            <div className='contentMain'>
              {questions}
            </div>
          </div>
        </div>
        <button className='showAnswers' onClick={() => showAnswer()}>Show Answer</button>
        <button className='printWorksheet' onClick={handlePrint}>Print Worksheet</button>
        {/* <button className='printWorksheet' onClick={downloadPDF}>Download Worksheet</button> */}
      </div>
    </>
  )
}

export default React.memo(PreviewWorksheet);