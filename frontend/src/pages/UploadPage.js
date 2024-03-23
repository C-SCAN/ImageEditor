import React, { useRef } from 'react';
import '../styles/UploadPage.css';

export default function UploadPage(){
    const fileInputRef = useRef(null);
    return (
        <div>
            <p className="upload-text"> Upload An Image</p>
            <button className="upload-button" onClick={()=>fileInputRef.current.click()}> Upload </button>
            <input type="file" 
            ref={fileInputRef}
            style ={{display: 'none'}}
            />
        </div>
    );
}