import React from 'react'
import FileUpload from './fileupload.js';
import {ref} from "firebase/storage";
import Dropdown from "./dropdown.js";
function dApp() {
    return ( 
        <div >
            <h1 >Welcome to the<code> TIME-CAPSULE!</code></h1><br/>
            <h4>Follow the below written steps to save your future generations a legacy!</h4>
            <div className="text-dApp-upload-file"> Upload the file to preserve for future!</div>
            <div className="Progress-Bar"><FileUpload/></div>
            <br/>
            <div>Choose the type of time-capsule that you want to build</div><br/>
            <div className="dropdown">
                <Dropdown/>
                
            </div>

        </div>
    );
}

export default dApp;