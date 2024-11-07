import classes from "../ProfileInfo.module.css";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import {AboutMePropsType} from "./ProfileData";
import {useForm} from "react-hook-form";
import {Button} from "../../../../../../common/components/Button/Button";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootReduxStateType} from "../../../../../../app/store/redux-store";
import {updateUserProfile} from "../../../../model/profile-reducer";

export const ProfileDataForm = ({
                                    switchEditMode,
                                }: AboutMePropsType) => {
    const error = useSelector((state: RootReduxStateType) => state.profilePage.error)
    const profile = useSelector((state: RootReduxStateType) => state.profilePage.profile)
    const dispatch = useDispatch<AppDispatch>()
    const {register, handleSubmit, formState: {errors, isSubmitting}, setError} = useForm<any>({
        defaultValues: {
            aboutMe: profile.aboutMe || '',
            facebook: profile.contacts.facebook || '',
            website: profile.contacts.website || '',
            vk: profile.contacts.vk || '',
            twitter: profile.contacts.twitter || '',
            instagram: profile.contacts.instagram || '',
            youtube: profile.contacts.youtube || '',
            github: profile.contacts.github || '',
            mainLink: profile.contacts.mainLink || '',
            lookingForAJobStatus: profile.lookingForAJob ? 'search' : 'employed',
            lookingForAJobDescription: profile.lookingForAJobDescription || '',
            fullName: profile.fullName || '',
        },
        mode: "onChange"
    });
    const onSubmit = (data: any) => {
        switchEditMode()
        dispatch(updateUserProfile({
            aboutMe: data.aboutMe,
            contacts: {
                "facebook": data.facebook,
                "website": data.website,
                "vk": data.vk,
                "twitter": data.twitter,
                "instagram": data.instagram,
                "youtube": data.youtube,
                "github": data.github,
                "mainLink": data.mainLink
            },
            "lookingForAJob": data.lookingForAJob,
            "lookingForAJobDescription": data.lookingForAJobDescription,
            "fullName": data.fullName,
            "userId": profile.userId,
            "photos": {
                "small": profile.photos.small,
                "large": profile.photos.large
            }
        }))
    }
    useEffect(() => {
        if (error) {
            setError('facebook', {type: 'custom', message: error});
            setError('website', {type: 'custom', message: error});
            setError('vk', {type: 'custom', message: error});
            setError('twitter', {type: 'custom', message: error});
            setError('youtube', {type: 'custom', message: error});
            setError('github', {type: 'custom', message: error});
            setError('instagram', {type: 'custom', message: error});
            setError('mainLink', {type: 'custom', message: error});
        }
    }, [error])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.about}>
                <div className={classes.profileInfoWrapper}>
                    <div className={classes.fullNameAndAboutMe}>
                        <input {...register(('fullName'))} type="text" placeholder={'Full name'}/>
                        <ProfileStatus className={classes.aboutMe}/>
                    </div>
                    <div className={classes.jobStatus}>
                        <div>Job status : <select {...register(('lookingForAJobStatus'))}>
                            <option value={'search'}>search</option>
                            <option value={'employed'}>employed</option>
                        </select>
                        </div>
                        <div>Description : <input {...register(('lookingForAJobDescription'))} type="text"
                                                  placeholder={'Status about job'}/></div>
                    </div>
                    <div>
                        <div>About me : <input {...register(('aboutMe'))} type="text" placeholder={'Information about user'}/></div>
                    </div>

                </div>
                <div className={classes.contacts}>
                    <div>
                        <span>facebook: <input type="text" {...register('facebook')}/></span>
                        <span>website: <input type="text" {...register('website')}/></span>
                        <span>vk: <input type="text" {...register('vk')}/></span>
                        <span>twitter: <input type="text" {...register('twitter')}/></span>
                    </div>
                    <div>
                        <span>youtube: <input type="text" {...register('youtube')}/></span>
                        <span>github: <input type="text" {...register('github')}/></span>
                        <span>instagram: <input type="text" {...register('instagram')}/></span>
                        <span>mainLink: <input type="text" {...register('mainLink')}/></span>
                    </div>
                </div>
                <div className={classes.contacts}>
                </div>

                <Button>Save</Button>
            </div>

        </form>
    )
}