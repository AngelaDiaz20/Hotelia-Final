import FormHuesped from "../components/formHuesped/FormHuesped";
import logoblanco from "../img/Hotelia-horizontal-blanco.png"
function RegistroHuesped (){
    return(
        <main className="huesped-background-img">
            <div className="huesped">
                <div className="logo-formhuesped">
                    <div>
                        <img src={logoblanco} />
                        <h5>Eres más que bienvenido</h5>
                    </div>
                </div>
                <FormHuesped />
            </div>
        </main>
    );
}
export default RegistroHuesped