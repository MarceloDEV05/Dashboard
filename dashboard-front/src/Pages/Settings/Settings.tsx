import { SettingsHeader } from "../../Components/Settings/SettingsHeader";
import { SettingsTable } from "../../Components/Settings/Settings";

export const Settings = () => {
    return (
        <div>
            <div>
                <SettingsHeader />
            </div>
            <div>
                <SettingsTable/>
            </div>
        </div>
    )
}