import {Navigate, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {Preloader} from "common/components";
import {News} from "../../../features/news/ui/News/News";
import {Music} from "../../../features/music/ui/Music/Music";
import {Settings} from "../../../features/settings/ui/Settings/Settings";
import {Page404} from "common/components";
import Profile from "../../../features/profile/ui/Profile/Profile";
import {Users} from "../../../features/users/ui/UsersPage/Users";
import {Dialogs} from "../../../features/dialogs/ui/Dialogs/Dialogs";
import {Login} from "../../../features/login/ui/Login/Login";

export const AppRoutes = () => {
    return (
        <Routes>

            <Route path={'/'} element={<Navigate to={"/profile"}/>}/>

            <Route path={'/dialogs'}
                   element={ <Suspense fallback={<Preloader/>}>
                       <Dialogs/>
                   </Suspense>}/>
            <Route path={"/profile/:userId?"}
                   element={<Suspense fallback={<Preloader/>}>
                       <Profile/>
                   </Suspense>}/>
            <Route path={'/users'}
                   element={<Users
                   />}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/settings'} element={<Settings/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'*'} element={<Page404/>}/>
        </Routes>
    )
}