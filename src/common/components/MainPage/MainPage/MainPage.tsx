import NavBar from "../../NavBar/ui/NavBar";
import {AppRoutes} from "common/routes";
import {Header} from "common/components/Header/Header";

export const MainPage = () => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <div className='main-content'>
                    <NavBar/>
                    <div className='content'>
                        <AppRoutes/>
                    </div>
                </div>
            </div>
    )
}