import {ComponentPropsWithoutRef} from "react";

export const Button = ({disabled, title, onClick, className, ...restProps}: ComponentPropsWithoutRef<'button'>) => {
    return <button
        style={{pointerEvents: disabled ? 'none' : 'all'}}
        className={className}
        onClick={onClick}
        disabled={disabled}
        {...restProps}/>
}