import React, {useState} from "react";

type ProfileStatusPropsType = {
    className: string
    status: string
}

export const ProfileStatus = ({className, status} : ProfileStatusPropsType) =>  {
    const [editMode, setEditMode] = useState<boolean>(false)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
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
                        <input value={status} onBlur={deactivateEditMode} autoFocus/>
                    </div>
                }
            </>
        )
}