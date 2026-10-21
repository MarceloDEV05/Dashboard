import { ClientsInfo } from "../../Components/fakeInfos/Clients/ClientsInfo"

export const ClientsTable = () => {
    return(
        <div>
             { ClientsInfo.map((client) => (
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
    )
}