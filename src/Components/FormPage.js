import React, { useEffect, useState } from 'react'

export default function FormPage(props) {
    const [text,updateText] = useState("Enter Something");
    const [enableDarkText,updateDarkModeText] = useState("Enable Dark");
    const [myStyle,setStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });
    useEffect(()=>{
        console.log("FormsPage Mounted");
        return ()=>{ console.log("FormsPage Unmounted")}
    },[])
    let OnChangeFun = (e)=>{
        updateText(e.target.value);
    }
    let LowerCaseFun = ()=>{
        updateText(text.toLowerCase());
        props.updateAlert("success","String Converted To Lowercase!");
    }
    let UpperCaseFun = ()=>{
        updateText(text.toUpperCase());
        props.updateAlert("success","String Converted To Uppercase!");
    }
    let TitleCaseFun = ()=>{
        let temp_str = text.split(' '),arr =[];
        temp_str.forEach(e=>{
            arr.push(e.replace(e[0],e[0].toUpperCase()));
        });
        updateText(arr.join(' '));
        props.updateAlert("success","String Converted To Titlecase!");
    }
    let darkMode = ()=>{
        if(myStyle.color==="black"){
            setStyle({
                color: "white",
                backgroundColor: "black"
            });
            updateDarkModeText("Enable Light"); 
        }else{
            setStyle({
                color: "black",
                backgroundColor: "white"
            });
            updateDarkModeText("Enable Dark")
        }
    }
    return (
    <div>
        <h3 className='formPageTitle' style={{color: props.theme}}>{props.title}</h3><br/>
        <br/>
            <div className='container'>
                <div className="form-group">
                    <textarea style={props.mode==='light'?{
                color: "black",
                backgroundColor: "white"
            }:{
                color: "white",
                backgroundColor: "#010d3c"
            }} className="form-control" value={text} onChange={OnChangeFun} id="exampleFormControlTextarea1" rows="7"></textarea>
                    <br/>
                    <div className='formPageBody'>
                        <button className='btn btn-primary' onClick={LowerCaseFun}>LowerCase</button>
                        <button className='btn btn-primary' onClick={UpperCaseFun}>UpperCase</button>
                        <button className='btn btn-primary' onClick={TitleCaseFun}>TitleCase</button>
                        <button className='btn btn-primary' onClick={darkMode}>{enableDarkText}</button>
                    </div>
                </div>
            </div>
            <div className='container' style={props.mode==='light'?{
                color: "black",
                backgroundColor: "white"
            }:{
                color: "white",
                backgroundColor: "#010d3c"
            }}>
                <h4>Text Summry</h4>
                <p>{text.split(' ').length} Words {text.length} Characters</p>
                <h6>Time to Read : {0.008 * text.split(' ').length}</h6>
                <p>{text.split(' ').length} Words {text.length} Characters</p>
                <h4>Preview</h4>
                <p>{text} </p>
            </div>
    </div>
  )
}
