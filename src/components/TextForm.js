import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to UpperCase","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to LowerCase","success");
    }

    const clear = () => {
        let newText = '';
        setText(newText)
        props.showalert("Textarea is cleared","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === 'dark' ? 'white' : 'black' }} 
                    id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={clear}>Clear text</button>
            </div>

            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} Characters </p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to above textbox preview here "}</p>
            </div>
        </>
    )
}