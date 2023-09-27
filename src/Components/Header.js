import logo from '../logo.svg';
import '../App.css';

let king = "Venkatesh";
function Header() {
  return (
    <>
      <div className='testHead'>
        <div>
          <img src={logo} alt='leftimage' className='App-logo'/>
        </div>
        <div>
          <p className='headName'>Hello {king}</p>
        </div>
        <div>
          <img src={logo} alt='rightimage' className='App-logo1'/>
        </div>
      </div>
    </>
  );
}

export default Header;