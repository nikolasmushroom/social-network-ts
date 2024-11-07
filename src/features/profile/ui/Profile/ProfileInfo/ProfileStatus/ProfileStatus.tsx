import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootReduxStateType} from "../../../../../../app/store/redux-store";
import {updateUserStatus} from "../../../../model/profile-reducer";

export type ProfileStatusPropsType = {
    className: string
}

export const ProfileStatus = React.memo(({className}: ProfileStatusPropsType) => {
    const dispatch = useDispatch<AppDispatch>()
    const status = useSelector((state: RootReduxStateType) => state.profilePage.status)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [statusValue, setStatusValue] = useState<string>(status)
    useEffect(() => {
        setStatusValue(status);
    }, []);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        setStatus()
    }
    const setStatus = () => {
        if (statusValue !== '') {
            dispatch(updateUserStatus(statusValue))
        }
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatusValue(e.currentTarget.value)
    }
    return (
        <>
            {!editMode
                ?
                <div className={className}>
                    <span onDoubleClick={activateEditMode}>{status}</span>
                </div>
                :
                <div className={className}>
                    <input value={statusValue} onChange={(e) => onChange(e)} onBlur={deactivateEditMode} autoFocus/>
                </div>
            }
        </>
    )
})
