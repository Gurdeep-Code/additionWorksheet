import React from 'react';
import '../../css/FormAdditionWorksheet.css';


function OperationSelectionEle({ children, setselectedOperation }) {

    return (
        <div className='OperationSelectionContainer'>
            <label>{children}</label>
            <select onChange={(e)=>setselectedOperation(e.target.value)}>
                <option value="Mixed">Mixed</option>
                <option value="Carry">Carry</option>
                <option value="Non Carry">Non Carry</option>
                
            </select>
        </div>
    )
}

export default React.memo(OperationSelectionEle);