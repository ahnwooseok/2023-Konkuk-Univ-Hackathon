import logo from "../img/yangbong.png"
import github from "../img/git.png"
import '../css/header.css'
export default function Header() {
   return(
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between",borderBottom:"1px solid black"}}>
    <div style={{display:"flex", flexDirection:"row"}}>
    <img id="logo" src={logo}></img>
       
    </div>
    <div style={{paddingRight:"20px"}}>
        <img src={github} style={{width:"150px"}}></img>
      
    </div>
</div>

   
   )
}