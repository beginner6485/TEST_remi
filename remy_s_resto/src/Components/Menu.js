import "../Styles/Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Menu (props){

    return (
        <div className="Module_Menu">
            <div className="TextMenu">{props.title}</div>
            <div className="Backgd_Img">
                <div className="Formule">
                    <div className="Title_Text">{props.text}</div>
                    <a href="https://www.facebook.com/chezfanfanmicouleau/?locale=fr_FR" className="Title_CTA">Découvrez le menu de la semaine</a>
                    <div className="Menu_space">
                    <div className="Menu_Text">{props.string}</div>
                    <div className="Border_Text"></div>
                    <div className="Menu_Text">{props.string2}</div>
                    </div>
                    <div className="Menu_CTA">Sur place <b>ou à Emporter* </b></div>
                    <div className="Menu_CTA">(Possibilité de plat à emporter : <b>Formule du Midi</b> ou <b>Salade Fanfan*</b> ou  <b>Tartare de Boeuf* </b>) au <b><FontAwesomeIcon icon={faPhone} /></b><b style={{fontsize:"30px"}}> 05 61 42 53 96</b></div>
                </div>
            </div>
        </div>

    )
}

export default Menu 

//"Possibilité d'inclure boisson sur demande (mail téléphone). A commander 3 jours avant. Possibilité de livraison (5km)