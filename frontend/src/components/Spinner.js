import logo from '../logo.png';
import '../styles/Spinner.css'

export default function Spinner(){
    return (
        <div className="spinner">
            <img src={logo} alt = "spinner-logo" className='spinning-logo'/>
        </div>
    )
}