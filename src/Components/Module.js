 import "../Styles/Module.css"

 

 function Module (props){
    return (
    <div>
        <div className="Module_intro"><h1 className="Module_title">{props.title}</h1></div>
        <div className="Module_1" id="menu_section">
            <div className="Module_Bandeau">
                <div className="Module">
                    <div className="Module_pres" >
                        <img src={props.src} className="Module_photos" alt="Equipe" />
                    </div>
                    <div className="Module_text">
                    <div className="Module_description">{props.text1}</div>
                    <div className="Module_description">{props.text2}</div>
                    <div className="Module_description">{props.text3}</div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    )
 }

 export default Module