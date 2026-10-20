import { Link } from "react-router-dom";


export const SideBar = () => {
  const user = "Marcelo Cardoso";

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
              <Link to='/'>
              <li>Dashboard</li>
              </Link>

              <Link to='appointments'>
              <li>Agendamentos</li>
              </Link>

              <Link to='/services'>
              <li>Serviços</li>
              </Link>
              
              <li>Clientes</li>
              <li>Financeiro</li>
              <li>Configurações</li>
            </ul>
          </nav>
        </div>

        <div className=" flex flex-col items-center gap-4">
          <aside className="border-b-2 pb-2">
            {user}
          </aside>
          <button>Sair</button>
        </div>

      </div>
    </aside>
  );
};
