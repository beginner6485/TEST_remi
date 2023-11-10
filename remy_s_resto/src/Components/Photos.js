import Exterieur from '../Assets/Exterieur.jpg'
import Ris from '../Assets/ris.JPG'
import Salle from '../Assets/SalleInterieur.jpg'
import Fondant from '../Assets/Fondant.JPG'
import Salle2 from '../Assets/salle2.jpg'
import ceviche from '../Assets/ceviche.jpg'
import '../Styles/Photos.css'

function Photos (){

    return(
        <div>
            <div className="photos_space">
                <div className="photos_position"><img className="pics_size" src={Exterieur} alt="Exterieur"/></div>
                <div className="photos_position"><img className="pics_size"src={Ris} alt="Ris de Veau" /></div>
                <div className="photos_position"><img className="pics_size"src={Salle} alt="Salle"/></div>
                <div className="photos_position"><img className="pics_size"src={Fondant} alt="Dessert Fondant" /></div>
                <div className="photos_position"><img className="pics_size"src={Salle2} alt="" /></div>
                <div className="photos_position"><img className="pics_size"src={ceviche} alt="Céviche" /></div>
            </div>
        </div>
    )


}

export default Photos