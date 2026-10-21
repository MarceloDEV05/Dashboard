export const ClientHeader = () => {
    return(
        <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-bold"> Agendamentos </h1>
             
            <h2 className=" text-gray-600">
                 Gerencie seus horários e Atendimentos.
            </h2>
         </div>

         <div className="flex flex-col items-center text-white p-3 bg-black rounded-md">
                <button className="font-bold flex items-center">+Novo Agendamento</button>
         </div>
        </div>
    )
}