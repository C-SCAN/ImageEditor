import "../styles/BasePage.css";
import logoText from '../logoText.png'
import bg from '../bg.png'

export default function BasePage(props){
    return(
        <div className="base-page">
            <img src={bg} alt="image" class="bg"/>
            <img src={logoText} alt="Logo Text" className="logo-text"/>
            {props.children}
        </div>
    );
}