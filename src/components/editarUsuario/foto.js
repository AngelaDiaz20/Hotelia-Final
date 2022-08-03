import usuariofoto from "./usuario-foto.png"
function Foto(){
    return(
        <div className="cambiofoto">
            <img src={usuariofoto} />
            <div class="contenedor-cambiar-foto">
                <button class="cambiar-foto-editarusuario"><i class="fa-solid fa-upload"></i></button>
                <input type="file" name="myfile" className="formhuesped-image" accept=".jpg,.png" />
            </div>
        </div>
    );
}
export default Foto