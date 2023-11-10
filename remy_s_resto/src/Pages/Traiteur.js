import "../Styles/Traiteur.css"
import "../Styles/MenuduSoir.css"
import "../Styles/Module.css"
import Exterieur from '../Assets/Exterieur.jpg'
import Millefeuille from '../Assets/millefeuille.png'
import aemporter from '../Assets/aemporter.jpeg'

function Traiteur (){

    return (
        <div>
            <div className="traiteur_TakeAway">
                <div className="TextMenu_Traiteur"> -  Traiteur  - </div>
                <div className="Traiteur_Space">
                    <div className="Traiteur_Title">
                    Chez Fanfan, c'est aussi un traiteur pour toutes vos occasions évènementielles (professionnels comme particuliers)
                    </div>
                    <div className="Traiteur_photos_space">
                        <div className="photos_position uno"><img className="traiteur_pics_size" src={Exterieur} alt="Exterieur"/></div>
                        <div className="photos_position tres"><img className="traiteur_pics_size"src={aemporter} alt="Salle"/></div>
                        <div className="photos_position dos"><img className="traiteur_pics_size"src={Millefeuille} alt="Plat Couteau et sa purée" /></div>
                        <div className="photos_position quatro">
                            <div className="traiteur_pics_text">
                                <span className="traiteur_buffet"> - Buffet dinatoire - </span> 
                                <span className="traiteur_buffet_text"><b>5</b> pièces salées,
                                    <span className="price">12€/ personne</span>
                                </span>
                                <span className="price_space"> ou </span>
                                <span className="traiteur_buffet_text"><b>8</b> pièces (5 salées et 3 sucrées),
                                    <span className="price"> 18€/ personne</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="price_infos">- Pour plus d'information contactez-nous au <b>05 61 42 53 96</b> -</div>
                </div>
            </div>
        </div>
    )

}

export default Traiteur