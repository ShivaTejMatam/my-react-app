import React,{useState} from 'react'

export default function TextForm(props) {  
    const handleupclick=()=>{
       // console.log("Uppercase was Clicked!");
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase","success")  
    }
    const handleLoclick=()=>{
        // console.log("Lowercase was Clicked!");
         let newtext = text.toLowerCase();
         setText(newtext)
         props.showAlert("Converted to Lowercase","success")

     }
    const handleonchange=(event)=>{
        //console.log("On change");
        setText(event.target.value);
        
    }
    const [text, setText] = useState(' ');
    return ( 
    <>
    <div className='container' style= {{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleonchange} style= {{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
       </div> 
       <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase</button> 
       <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style= {{Color:props.mode === 'dark'?'white':'black'}}>
        <h2>
            Your text summary
        </h2>
        <p> 
            {text.split(" ").length-1}words and{text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}  
   