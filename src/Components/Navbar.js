import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
export default function Navbar(props) {
  let modeUpdate = ()=>{
    props.updateMode();
  }

  let updateColor = (colorName)=>{
    props.updateThemeColor(colorName);
  }

  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">Navbar-{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        <Link className="nav-link" to="/"><li className="nav-item active">{props.msg}</li></Link>
        <Link className="nav-link" to="/about"><li className="nav-item">AboutUS</li></Link>
    </ul>

    <div style={{display: "flex",marginRight: "1%",gap: "10px"}}>
      {
      props.mode==='light'?
        <>
          <div onClick={()=> updateColor("magenta")} style={{cursor: 'pointer',backgroundColor: "magenta",width: "20px",height: "20px",border: "1px solid magenta",borderRadius: "50%"}}></div>
          <div onClick={()=> updateColor("orangered")} style={{cursor: 'pointer',backgroundColor: "orangered",width: "20px",height: "20px",border: "1px solid orangered",borderRadius: "50%"}}></div>
          <div onClick={()=> updateColor("royalblue")} style={{cursor: 'pointer',backgroundColor: "royalblue",width: "20px",height: "20px",border: "1px solid royalblue",borderRadius: "50%"}}></div>
        </>
      :<>
        <div onClick={()=> updateColor("lightblue")} style={{cursor: 'pointer',backgroundColor: "lightblue",width: "20px",height: "20px",border: "1px solid lightblue",borderRadius: "50%"}}></div>
        <div onClick={()=> updateColor("#ec4eff")} style={{cursor: 'pointer',backgroundColor: "#ec4eff",width: "20px",height: "20px",border: "1px solid #ec4eff",borderRadius: "50%"}}></div>
        <div onClick={()=> updateColor("hotpink")} style={{cursor: 'pointer',backgroundColor: "hotpink",width: "20px",height: "20px",border: "1px solid hotpink",borderRadius: "50%"}}></div>
      </>
      }
      
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={modeUpdate} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'Dark':'Light'}</label>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    msg: PropTypes.string
}

Navbar.defaultProps = {
    title: "Page",
    msg: "Galary"
}
