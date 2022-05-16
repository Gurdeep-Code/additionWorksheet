import React, { useState } from 'react';
import FormAdditionWorksheet from './FormAdditionWorksheet';
import PreviewWorksheet from './PreviewWorksheet';
import { mixedProblemGenerator, carryNonCarryProblemGenerator } from './additionLogic';
import '../css/AdditionWorksheetSection.css';

function AdditionWorksheetSection() {
  const [firstAddendsList, setFirstAddendsList] = useState([]);
  const [secondAddendsList, setSecondAddendsList] = useState([]);
  const [WorksheetTitle,setWorksheetTitle] = useState("Addition");


  // function for generate addend problems this is passed inside form componenet 
  const worksheetGenerator = (numberOfProblems, endRange, startRangeByuser, digits, selectedOperation) => {
    let addendProblems = selectedOperation == "Mixed" ?
      mixedProblemGenerator(numberOfProblems, endRange, startRangeByuser) :
      carryNonCarryProblemGenerator(digits, numberOfProblems, selectedOperation);
    setFirstAddendsList(addendProblems[0]);
    setSecondAddendsList(addendProblems[1]);
  }
  // function for generate addend problems this is passed inside form componenet

  return (
    <div className='AdditionWorksheetContainer'>
      <h1>Addition</h1>
      <h1>Math worksheet generator</h1>
      <div className='AdditionWorksheetSection2'>
        <FormAdditionWorksheet maxDigits={4} maxNumberOfProblems={25} 
        worksheetGenerator={worksheetGenerator} setWorksheetTitle={setWorksheetTitle} WorksheetTitle={WorksheetTitle} />
        <PreviewWorksheet firstAddendsList={firstAddendsList} 
        secondAddendsList={secondAddendsList} WorksheetTitle={WorksheetTitle}/>
      </div>
    </div>
  )
}

export default AdditionWorksheetSection