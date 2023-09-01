import '../../estilos/estilos.css'
import { Link, useNavigate } from 'react-router-dom';


type Props={
    item1:String;
    item2:String;
    item3:String;
}

function Menu(item:Props){
    const navHome = useNavigate();
    function handleClicknavHome(){
        navHome('/')
    }
    const navCadPonto = useNavigate();
    function handleClicknavCad(){
        navHome('/formulariocoleta')
    }
    const cyber = useNavigate();
    function handleClickCyber(){
        cyber('/sobre')
    }
    return(
        <div className='menuPai'>
            <button className='linkMenu' onClick={handleClicknavHome}>{item.item1}</button>
            <button className='linkMenu' onClick={handleClicknavCad} >{item.item2}</button>  
            <button className='linkMenu' onClick={handleClickCyber}  >{item.item3}</button>
        </div>
     
    )
}

export default Menu;
