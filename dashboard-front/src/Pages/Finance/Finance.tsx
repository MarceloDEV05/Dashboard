import { FinanceHeader } from "../../Components/Finance/FinanceHeader";
import { FinanceDatas } from "../../Components/Finance/FinanceDatas";

export const Finance = () => {
    return(
        <div>
            <div>
                <FinanceHeader />
            </div>
            <div>
                <FinanceDatas />
            </div>
        </div>
    )
}