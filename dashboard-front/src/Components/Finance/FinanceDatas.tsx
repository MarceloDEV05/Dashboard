import { TrendingUp, TrendingDown, Wallet, Clock } from "lucide-react";
import { FinanceChart } from "./FinanceChart";


export const FinanceDatas = () => {
  return (
    <div className="pt-15 w-full flex flex-col gap-3 ">
      <div className="grid grid-cols-2 gap-5">

        {/* Inicio Receitas*/}
        <div className="border-2 border-gray-300 rounded-2xl px-6 py-6">
            <div>
                <TrendingUp color="green"/>
                <h1 className="font-semibold">Receitas</h1>
            </div>
            <div>
                <h1 className="font-bold text-2xl text-green-600">R$12.750</h1>
                <p>Serviços e vendas</p>
            </div>
        </div>
        {/* Fim Receitas*/}

      {/* Inicio Despesas*/}
        <div className="border-2 border-gray-300 rounded-2xl px-6 py-6">
              <div>
                <TrendingDown color="red"/>
                <h1 className="font-semibold">Despesas</h1>
            </div>
            <div>
                <h1 className="font-bold text-2xl text-red-600">R$3.450</h1>
                <p>Custos e pagamentos</p>
            </div>
        </div>
        {/* Fim Despesas */}
      </div>

      {/*FIM PRIMEIRO GRID*/}

      <div className="grid grid-cols-2 gap-5">
           {/* Inicio saldo periodo*/}
        <div className="border-2 border-gray-300 rounded-2xl px-6 py-6">
            <div>
                <Wallet color="gold"/>
                <h1 className="font-semibold">Receitas</h1>
            </div>
            <div>
                <h1 className="font-bold text-2xl text-yellow-600">R$12.750</h1>
                <p>Receitas menos despesas</p>
            </div>
        </div>
        {/* Fim saldo perido*/}

           {/* Inicio A receber*/}
        <div className="border-2 border-gray-300 rounded-2xl px-6 py-6">
            <div>
                <Clock color="blue"/>
                <h1 className="font-semibold">A receber</h1>
            </div>
            <div>
                <h1 className="font-bold text-2xl text-blue-600">R$12.750</h1>
                <p>Valores Pendentes</p>
            </div>
        </div>
        {/* Fim a receber*/}
      </div>
        {/*FIM SEGUNDO GRID*/}


        {/* grafico */}
        <FinanceChart/>
    </div>
  );
};
