import React,{useState} from 'react';
import '../../css/FormAdditionWorksheet.css';

function WorksheetTitleElement({children,WorksheetTitle,setWorksheetTitle}) {

    return (
        <>
            <label className='worksheetTitleLable'>{children}</label>
            <input className='worksheetTitleInput' value={WorksheetTitle} onChange={(e)=>setWorksheetTitle(e.target.value)} placeholder={children} type="text" />
        </>
    )
}

export default React.memo(WorksheetTitleElement)