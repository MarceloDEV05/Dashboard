import { Users } from "lucide-react";

export const ClientHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
            Clientes < Users size={30}/>
            </h1>

        <h2 className=" text-gray-600">Veja todos os clientes da barbearia.</h2>
      </div>
    </div>
  );
};
