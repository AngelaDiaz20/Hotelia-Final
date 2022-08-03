import EditarUsuario from "../components/editarUsuario/EditarUsuario";
import SidebarAdmon from "../components/sidebar/SidebarAdmon";

function PerfilUsuario (){
    return(
        <div >
            <div>
               <SidebarAdmon/>
            </div>
            <div>
                <EditarUsuario/>
            </div>
        </div>
        
    );
}
export default PerfilUsuario