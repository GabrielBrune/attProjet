import '../../estilos/estilos.css'
import { Link } from 'react-router-dom';

type Props={
    item1:String
    item2:String
    item3:String
}

function Menu(item:Props){
    return(
        <div>
            <div><Link to='/home/contatos'>{item.item1}</Link></div>
            <div><Link to='/home/sobre'>{item.item2}</Link></div>  
            <div><Link to='/home/recebendo'>{item.item3}</Link></div>
        </div>
    )
}

export default Menu;