import { ClientsInfo } from "../../Components/fakeInfos/Clients/ClientsInfo";
import { Search } from "lucide-react";

export const ClientsTable = () => {
  return (
    <div className="border h-full p-3 flex flex-col gap-5 rounded-2xl">
      <div className="flex gap-3 p-2 border rounded-xl">
        <Search />
        <input
          type="search"
          placeholder="Pesquisar Agendamentos..."
          className="w-full outline-none"
        />
      </div>
      {ClientsInfo.map((client) => (
        <div className="flex w-full justify-between pt-3 pb-3 items-center border-t border-b px-3">
          <div className="">
            <h1>{client.nome}</h1>
            <p>{client.telefone}</p>
          </div>

          <div>
            <p>{client.visitas}</p>
            <span>{client.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
