import SidebarAdmon from "../components/sidebar/SidebarAdmon";
import SidebarHuesped from "../components/sidebar/SidebarHuesped";
import VistaReserva from "../components/vistaReserva/VistaReserva";

function ReservaRealizada() {
    return (
        <div>
            <div>
               <SidebarAdmon/>
            </div>
            <div>
                <VistaReserva />
            </div>
        </div>
    );
}

export default ReservaRealizada;