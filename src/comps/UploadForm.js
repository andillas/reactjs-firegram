import React, { useState } from "react";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const validTypes = ["image/png", "image/jpeg"];
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected)
        
        if(selected && validTypes.includes(selected.type)){
            setFile(selected);
            setError("");
        }else{
            setFile(null);
            setError("Please select an image valid file (png or jpeg");
        }
    }
    return (
        <div>

            <input type="file" onChange={changeHandler}/>
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
        </div>
    )
}

export default UploadForm;