import { Home, User, Settings, Bell } from "lucide-react";
import style from "../style/SideBar.module.css";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <h3>Menú</h3>

      <ul>
        <li><Home size={20}/> Inicio</li>
        <li><User size={20}/> Usuarios</li>
        <li><Bell size={20}/> Notificaciones</li>
        <li><Settings size={20}/> Configuración</li>
      </ul>
    </aside>
  );
}