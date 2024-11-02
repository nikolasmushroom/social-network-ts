import {Navigate, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {Preloader} from "../../components/Preloader/Preloader";
import DialogsContainer from "../../../features/dialogs/ui/Dialogs/DialogsContainer";
import ProfileContainer from "../../../features/profile/ui/Profile/ProfileContainer";
import UsersContainer from "../../../features/users/ui/UsersPage/UsersContainer";
import {News} from "../../../features/news/ui/News/News";
import {Music} from "../../../features/music/ui/Music/Music";
import {Settings} from "../../../features/settings/ui/Settings/Settings";
import {AuthContainer} from "../../../features/login/ui/Login/LoginContainer";
import {Page404} from "../../components/404page/Page404";

export const AppRoutes = () => {
    return (
        <Routes>

            <Route path={'/'} element={<Navigate to={"/profile"}/>}/>

            <Route path={'/dialogs'}
                   element={ <Suspense fallback={<Preloader/>}>
                       <DialogsContainer />
                   </Suspense>}/>
            <Route path={"/profile/:userId?"}
                   element={<Suspense fallback={<Preloader/>}>
                       <ProfileContainer />
                   </Suspense>}/>
            <Route path={'/users'}
                   element={<UsersContainer
                   />}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/settings'} element={<Settings/>}/>
            <Route path={'/login'} element={<AuthContainer/>}/>
            <Route path={'*'} element={<Page404/>}/>
        </Routes>
    )
}