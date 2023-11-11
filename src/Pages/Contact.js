import "../Styles/Module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "../Styles/Contact.css"


function Contact (){
    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/chezfanfanmicouleau/?locale=fr_FR', '_blank');
      };
    const handleInstaClick = () => {
        window.open('https://www.instagram.com/chezfanfan_micouleau/?hl=fr')
    }
return (
    <div>
        <div className="TextMenu_Contact">  Contact  </div>
        <div className="Contact_space">
            <div className="Contact_text"> Pour vos réservations, commandes (24 heures à l'avance), et demande d'informations, c'est au :</div>
            <div className="Contact_infos"><FontAwesomeIcon icon={faPhone} /><b> 05 61 42 53 96</b></div>
            <div className="Contact_infos"><FontAwesomeIcon icon={faTruckFast} /> Livraison possible dans un rayon de 5 km (avant 11h)</div>
            <div className="Contact_reseaux">Retrouvez-nous sur les réseaux : 
                <div className="Contact_reseau"><FontAwesomeIcon icon={faFacebook} onClick={handleFacebookClick} />
                </div>
                <div className="Contact_reseau"><FontAwesomeIcon icon={faInstagram} onClick={handleInstaClick} />
                </div>
                <div className="infos_add">- Pour plus d'information contactez-nous au <b>05 61 42 53 96</b> -</div>
            </div>
        </div>

    </div>)

}

export default Contact