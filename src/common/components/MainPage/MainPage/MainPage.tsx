import NavBar from "../../NavBar/ui/NavBar";
import {AppRoutes} from "../../../routes/Routes/AppRoutes";
import HeaderNew from "../../Header/Header";

export const MainPage = () => {
    return (
            <div className='app-wrapper'>
                <HeaderNew/>
                <div className='main-content'>
                    <NavBar/>
                    <div className='content'>
                        <AppRoutes/>
                    </div>
                </div>
            </div>
    )
}