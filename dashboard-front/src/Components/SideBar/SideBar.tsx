import { Link } from "react-router-dom";
import {
  House,
  CalendarClock,
  Scissors,
  Users,
  BadgeDollarSign,
  Bolt,
  LogIn,
  LogOut,
} from "lucide-react";

export const SideBar = () => {
  const user = null;

  return (
    <aside className="bg-black w-60 shrink-0 min-h-screen text-white">
      <div className="flex min-h-full flex-col justify-between py-4 items-center">
        <div className="flex flex-col items-center">
          <h1 className="p-8 text-3xl">
            MYDASH
            <p className="text-xs">by SalesTech</p>
          </h1>

          <nav>
            <ul className="flex flex-col h-full pt-40 gap-5">
             
                <Link to="/" className="flex items-center gap-1">
                  <House size={20} />
                  <li>Dashboard</li>
                </Link>
              

            
                <Link to="/appointments" className="flex items-center gap-1">
                  <CalendarClock size={20} />
                  <li>Agendamentos</li>
                </Link>
             

              
                <Link to="/services" className="flex items-center gap-1">
                  <Scissors size={20} />
                  <li>Serviços</li>
                </Link>
              

              
                <Link to="/clients" className="flex items-center gap-1">
                  <Users size={20} />
                  <li>Clientes</li>
                </Link>
             

              
                <Link to="/finance" className="flex items-center gap-1">
                  <BadgeDollarSign size={20} />
                  <li>Financeiro</li>
                </Link>
              

              
                <Link to="/settings" className="flex items-center gap-1">
                  <Bolt size={20} />
                  <li>Configurações</li>
                </Link>
              
            </ul>
          </nav>
        </div>

        <div className=" flex flex-col items-center gap-4">
          <div className="border-b-2 pb-2">{user ? user : ""}</div>
          {user ? (
            <button className="flex items-center gap-1">
              Sair <LogOut size={20} />
            </button>
          ) : (
            <button className="flex items-center gap-1">
              Entrar <LogIn size={20} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
