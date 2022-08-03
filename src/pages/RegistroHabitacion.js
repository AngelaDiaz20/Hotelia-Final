import React from 'react';
import FormHabitacion from "../components/formHabitacion/FormHabitacion";
import SidebarAdmon from "../components/sidebar/SidebarAdmon";

function RegistrarHabitacion() {
  return (
    <div className="room-register-admon">
        
      <div>
          <SidebarAdmon/>
      </div>

      <div className="room-register-admon__form">
        <FormHabitacion/>
      </div>

    </div>
  )
}

export default RegistrarHabitacion;