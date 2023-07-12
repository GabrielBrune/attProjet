import '../../estilos/estilos.css'
import { Link } from 'react-router-dom';


type Props={
    item1:String;
    item2:String;
    item3:String;
    item4?:String;
    item5?:String;
}

function Menu(item:Props){
    return(
        <div className='menuPai'>
            <div className='linkMenu'><Link to='/'>{item.item1}</Link></div>
            <div className='linkMenu'><Link to='formulariocoleta'>{item.item2}</Link></div>  
            <div className='linkMenu'><Link to='sobre'>{item.item3}</Link></div>
            {/*<div><Link to='/home/detalhamento'>{item.item4}</Link></div>
            <div><Link to='/home/cadastrocoleta'>{item.item5}</Link></div> */} 
            
        </div>
     
    )
}

export default Menu;
