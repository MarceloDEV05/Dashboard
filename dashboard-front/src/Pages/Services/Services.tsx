import { ServicesHeader } from "../../Components/Services/ServicesHeader"
import { ServiceOptions } from "../../Components/Services/ServicesOptions"

export const Services = () => {
    return(
    <div className="">
        <div>
            <ServicesHeader/>
        </div>
        <div>
            <ServiceOptions/>
        </div>
    </div>
    )
}