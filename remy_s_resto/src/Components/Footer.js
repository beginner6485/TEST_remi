import '..//Styles/Footer.css'
import Logo from '..//Assets/logo/logo chez fanfan sans fond blanc.png'

function Footer (){
    return (
        <div className="footerBanner">
            <div className='footerElement'>
                <img src={Logo} alt="Logo fin" className='picture'></img>
                <div className='textFooter'> 
                    <div className='infoFooter'>Ouvert du mardi midi au samedi soir - 05 61 42 53 96 -
                        <div className='infoFooter'>© 2023 ChezFanFan. All rights reserved </div> 
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default Footer