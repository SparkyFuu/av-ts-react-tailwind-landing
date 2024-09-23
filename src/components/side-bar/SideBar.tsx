import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBook, FaCheck, FaLink, FaSave } from "react-icons/fa";
import { FaLocationDot, FaSquarePen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  className?: string;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ className, toggleSidebar }) => {
  const navigate = useNavigate();
  return (
    <aside className={`bg-gray-800 text-white w-64 ${className}`}>
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <button className="md:hidden text-white p-2" onClick={toggleSidebar}>
          ✕
        </button>
        <a className="flex items-center ps-2.5 mb-5">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Enion
          </span>
        </a>
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => navigate("/enion/client-admin")}
            >
              <BsFillPeopleFill size={30} />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Crear cliente
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => navigate("/enion/admin-place")}
            >
              <FaLocationDot size={30} />
              <span className="flex-1 ms-3 whitespace-nowrap">Crear place</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => navigate("/enion/bind-device")}
            >
              <FaLink size={30} />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Enlazar device
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => navigate("/enion/save-configuration-device")}
            >
              <FaSave size={30} />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Guardar configuración
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => navigate("/enion/validate-configuration")}
            >
              <FaCheck size={30} />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Val. de configuración
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => navigate("/enion/modify-device")}
            >
              <FaSquarePen size={30} />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Modificar device
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => navigate("/enion/update-firmware")}
            >
              <FaBook size={30} />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Actualizar firmware
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
