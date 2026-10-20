export const AppointmentsHeader = () => {
    const user = "Marcelo"

    return(
        <div className="">
            <h1 className="text-3xl font-bold">Agendamentos</h1>
            { user ? <span>Olá {user} </span> : <span> Olá visitante</span>}
        </div>
    )
}