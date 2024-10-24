import HeaderContainer from "../../Header/HeaderContainer";
import NavBar from "../../NavBar/ui/NavBar";
import {AppRoutes} from "../../../routes/Routes/AppRoutes";

export const MainPage = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='main-content'>
                    <NavBar/>
                    <div className='content'>
                        <AppRoutes/>
                    </div>
                </div>
            </div>
    )
}