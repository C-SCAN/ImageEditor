import "../styles/BasePage.css";
import logo from '../logo.png';
import logoText from '../logoText.png'

export default function BasePage(props){
    return(
        <div className="base-page">
            <img src={logo} alt="My Logo" className="logo"/>
            <img src={logoText} alt="Logo Text" className="logo-text"/>
            {props.children}
        </div>
    );
}