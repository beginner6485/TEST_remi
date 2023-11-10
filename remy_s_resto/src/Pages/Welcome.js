import Module from "../Components/Module"
import Menu from "../Components/Menu"
import MenuduSoir from "../Components/MenuduSoir"
import team from "../Assets/team.jpeg"
import Photos from "../Components/Photos"


function Welcome(){
    return (
        <div>
            <Module
            title="Restaurant - Traiteur - à Emporter "
            src={team}
            text1="Une team au complet ! Rémy, seulement 24 ans et déjà aux commandes de la cuisine, c'est lui qui régale 👨‍🍳"
            text2="Luis, en salle pour vous accueillir, qui tient le bar et la cave d'une main de maître 🍷"
            text3="Marjorie, la frangine de Rémy, le couteau suisse, qui oscille entre cuisine et service 🍽”"
            />
            <Menu
            title="Ça commence par le Midi..."
            text="Formule du Midi"
            string="Entree/Plat ou Plat/Dessert (16€)"
            string2="Entrée, Plat, Dessert (19€)"
            />
            <div id="MenuID"></div>
            <MenuduSoir
            title="Ça continue avec le Soir"
            text = "La carte"
            titlentree="Les Entrées"
            titleplat="Les Plats"
            titleviande="Les Viandes"
            titledessert="Les Desserts"
    
            />
            <Photos/>
        </div>

    )

}

export default Welcome