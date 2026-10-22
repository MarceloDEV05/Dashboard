import { Settings } from "lucide-react";

export const SettingsHeader = () => {
  return (
    <div>
      <div className="flex w-full h-screen ">
        <div>
          <h1 className="text-3xl font-bold flex gap-2 items-center"> 
                Configurações < Settings size={30} />
             </h1>

          <h2 className=" text-gray-600">
            Gerencie seus dados.
          </h2>
        </div>
      </div>
    </div>
  );
};
