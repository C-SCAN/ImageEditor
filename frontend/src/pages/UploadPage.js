import React, { useRef } from 'react';
import '../styles/UploadPage.css'
import BasePage from './BasePage';

export default function UploadPage(){
    const fileInputRef = useRef(null);
    return (
        <BasePage>
            <p className="upload-text"> Upload An Image</p>
            <button className="upload-button" onClick={()=>fileInputRef.current.click()}> Upload </button>
            <input type="file" 
            ref={fileInputRef}
            style ={{display: 'none'}}
            />
        </BasePage>
    );
}