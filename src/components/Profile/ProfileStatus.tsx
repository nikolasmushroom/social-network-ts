import React, {useEffect, useState} from "react";

type ProfileStatusPropsType = {
    className: string
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatus = ({className, status, updateUserStatus} : ProfileStatusPropsType) =>  {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [statusValue, setStatusValue] = useState<string>(status)

    useEffect(() => {
        setStatusValue(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        setStatus()
    }
    const setStatus = () => {
        if(statusValue){
            updateUserStatus(statusValue)
        }
    }
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
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
}
// class ProfileStatus extends React.Component <ProfileStatusPropsType> {
//     componentDidUpdate(prevProps: ProfileStatusPropsType) {
//         if(prevProps.status !== this.props.status){
//             this.setState({...this.state, statusValue: this.props.status})
//         }
//     }
//
//     state = {
//         editMode: false,
//         statusValue: this.props.status
//     }
//
//     render() {
//         const activateEditMode = () => {
//             return this.setState({...this.state, editMode : true})
//         }
//         const deactivateEditMode = () => {
//             this.props.updateUserStatus(this.state.statusValue)
//             return this.setState({...this.state, editMode : false})
//         }
//         const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     return this.setState({...this.state, statusValue : e.currentTarget.value})
// }
// const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     {e.key === 'Enter' && deactivateEditMode()}
// }
// return (
//     <>
//         {!this.state.editMode
//             ?
//             <div className={this.props.className}>
//                 <span onDoubleClick={activateEditMode}>{this.props.status || 'No status'}</span>
//             </div>
//             :
//             <div className={this.props.className}>
//                 <input value={this.state.statusValue} onKeyDown={(e) => onKeyDown(e)} onChange={(e) => onChange(e)} onBlur={deactivateEditMode}
//                        autoFocus/>
//             </div>
//         }
//     </>
// )
// }
// }
// export default ProfileStatus