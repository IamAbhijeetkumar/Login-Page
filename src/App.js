import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h3><span>Welcome to Infosec Bridge</span></h3>
      <div className='form'>
        <ul className='nav'>
          <li className='design'>Login</li>
          <li>Signup</li>
        </ul>
        <input className='Email' placeholder='Email Address'></input>
        <input className='Passward' placeholder='Password'></input>
        <button className='Login'>LOGIN</button>
        <span>Forgot Password?</span>
      </div>
      <div>
        <h4>or login with</h4>
        <div className='Icon'>
        <ul>
          <li><img src="./google.png" alt="google-icon" /></li>
          <li><img src="./facebook-2-logo-svgrepo-com.svg" alt="facebook-icon" /></li>
          <li><img src="./twitter-logo-svgrepo-com.svg" alt="twitter-icon" /></li>
        </ul>
        </div>
        <h3>Don't have an account? <span>Create new now!</span></h3>
        <h3>By signing up, you are agree with our <span>Terms & Conditions</span></h3>
      </div>
      </header>
    </div >
  );
}

export default App;
