import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Kola</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Misha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Ola</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi, hove are you?
                </div>
                <div className={s.message}>
                    When you are come back?
                </div>
                <div className={s.message}>
                    Are you learn it ?
                </div>

            </div>

        </div>
    )
}

export default Dialogs;