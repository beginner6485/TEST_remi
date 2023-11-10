import "../Styles/MenuduSoir.css"
import "../Styles/Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function MenuduSoir(props){

    return (
        <div className="Module_Menu">
            <div className="TextMenu">{props.title}
            </div>
            <div className="Backgd_Img2">
                <div className="Formule2">
                    <div className="Title_Text_Soir" id="LaCarte">{props.text}</div>
                        <div className="Menu_space_Soir">
                            <div className="Menudusoir">
                                <h3>{props.titlentree}</h3>
                                <div className="Menu_Text2_Soir">
                                    <ul className="Liste_Soir">
                                        <li><span>Foie gras de canard mi-cuit, confit d'oignons, </span><div className="Price">15€</div></li>
                                        <li><span>Couteaux persillés et jus de viande, </span><div className="Price">11€</div></li>
                                        <li><span>Cœurs de canard persillés, </span><div className="Price">10€</div></li>
                                        <li><span>Tartare de thon mayonnaise wasabi et marinade thaï, </span><div className="Price">12€</div></li>
                                        <li><span>Salade fanfan, <b style={{fontSize: "25px"}}></b></span><div className="Price">16€</div></li>
                                        <li><span>Planche de jambon, </span><div className="Price">14€</div></li>
                                        <li><span>Bol de saucisses sèches. </span><div className="Price">4€</div></li>
                                    </ul>
                                </div>
                                <h3>{props.titleviande}</h3>
                                <div className="Menu_Text2_Soir">
                                    <ul className="Liste_Soir">
                                        <li><span>Magret de canard du Sud Ouest, </span><div className="Price">24€</div></li>
                                        <li><span>Côte de cochon fermier plein air label rouge, <b style={{fontSize: "25px"}}></b></span><div className="Price">24€</div></li>
                                        <li><span>Entrecôte, (sélection du boucher), </span><div className="Price">27€</div></li>
                                        <li><span>Filet de boeuf (sélection du boucher), </span><div className="Price"> 27€</div></li>
                                        <li><span>Côtes d'agneau filet label rouge/pays d'oc, </span><div className="Price">21€</div></li>
                                        <li><span>Confit de canard du Sud Ouest. </span><div className="Price">16€</div></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Border_Text_Soir"></div>
                            <div className="Menudusoir">
                                <h3>{props.titleplat}</h3>
                                <div className="Menu_Text2_Soir">
                                    <ul className="Liste_Soir">
                                        <li><span>Céviche de dorade royale et sa vinaigrette mangue/passion, </span><div className="Price">22€</div></li>
                                        <li><span>Tartare de boeuf, frites et salade, </span><div className="Price">19€</div></li>
                                        <li><span>Maigre de ligne, son risotto de riz arborio au parmesan et ses légumes sautés au jus d'épinards, </span><div className="Price">21€</div></li>
                                        <li><span>Ris de veau rissolés à la crème de morilles accompagnés de ses pommes de terre et pommes paille, </span><div className="Price">22€</div></li>
                                        <li><span>Cassoulet au confit de canard. </span><div className="Price">19€</div></li>

                                    </ul>
                                </div>
                                <h3>{props.titledessert}</h3>
                                <div className="Menu_Text2_Soir">
                                    <ul className="Liste_Soir">
                                    <li><span>Cœur coulant au chocolat, son crumble cacao et sa glace vanille, </span><div className="Price">7€</div></li>
                                    <li><span>Millefeuille de palmito, son siphon de mousse de lait et fraise au pesto basilic, </span><div className="Price">7€</div></li>
                                    <li><span>Soufflé citron et son sorbet agrume, </span><div className="Price">7€</div></li>
                                    <li><span>Vacherin au tartare mangue-passion et éclats de meringue, </span><div className="Price">7€</div></li>
                                    <li><span>Assiette de fromages, </span><div className="Price">7€</div></li>
                                    <li><span>Café liégeois, </span><div className="Price"> 7€</div></li>
                                    <li><span>Chocolat liégeois, </span><div className="Price">7€</div></li>
                                    <li><span>Colonel. </span><div className="Price">7€</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="Menu_Offres">
                            <span className="Title_Text_Soir">Les Menus</span>
                            <div className="Menu_Offres_Space">
                                <div className="Menu_Offres_Text">
                                    <ul className="menu">
                                        <li>
                                            <div className="Menu_Flex">
                                                <h3>3 PLATS AU CHOIX</h3>
                                                <div className="Price2">35€</div>
                                            </div>
                                        </li>
                                        <div className="Menu_Offres_Text2">
                                            <li>Composez votre Menu</li>
                                            <li><b>Entrée - Plat - Dessert</b></li>
                                            <li><b>Au Choix</b></li>
                                            <li>(supplément 2€ pour entrecôte et filet, côte de boeuf non comprise)</li>
                                        </div>
                                    </ul>
                                </div>
                                <div className="Menu_Offres_Text">
                                    <ul className="menu">
                                        <li>
                                            <div className="Menu_Flex">
                                                <h3>4  PLATS AU CHOIX</h3>
                                                <div className="Price2">40€</div>
                                            </div>
                                        </li>
                                        <div className="Menu_Offres_Text2">
                                            <li>Pour les plus gourmands, nous vous proposons de composer votre menu avec </li>
                                            <li><b>2 entrées - 1 plat - 1 Dessert</b></li>
                                            <li>Ou</li>
                                            <li><b>1 entrée - 1 plat - 2 Desserts</b></li>
                                            <li>(supplément 2€ pour entrecôte et filet, côte de boeuf non comprise)</li>
                                        </div>
                                    </ul>
                                </div>
                                <div className="Menu_Offres_Text">
                                    <ul className="menu">
                                        <li>
                                            <div className="Menu_Flex">
                                                <h3>MENU PITCHOUN</h3>
                                                <div className="Price2">10,50€</div>
                                            </div>
                                        </li>
                                        <div className="Menu_Offres_Text2">
                                            <li>Petite boisson</li>
                                            <li>Saucisse de Toulouse maison</li>
                                            <li>Accompagnement au Choix</li>
                                            <li>Glace artisanale</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    <div className="Menu_CTA_Soir">Réservez au <b><FontAwesomeIcon icon={faPhone} /> 05 61 42 53 96</b></div>
                </div>
            </div>
        </div>
    )
}

export default MenuduSoir