import { Radio } from '@mui/material'
import React, { useState } from 'react'
import { CheckedRadio, UnCheckedRadio } from '../MainPage/components/CustomIcons'
import "./formPayerPage.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changePayer } from '../../store/selectedDataSlice'

export const FormPayerPage = () => {
    const payer = useSelector(state => state.selectedData.payer)
    console.log(payer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='payer-container'>
                <h2>Оплата доставки</h2>
                <form className='payer-form-radios'>
                    <label><Radio checkedIcon={<CheckedRadio />} checked={payer === "RECEIVER"} icon={<UnCheckedRadio />} value={"RECEIVER"} onClick={(e) => dispatch(changePayer(e.target.value))} />Получатель</label>
                    <label><Radio checkedIcon={<CheckedRadio />} checked={payer === "SENDER"} icon={<UnCheckedRadio />} value={"SENDER"} onClick={(e) => dispatch(changePayer(e.target.value))} /> Отправитель</label>
                </form>
                <div className='nav-buttons'>
                    <button style={{ backgroundColor: "white", color: "#344051" }} onClick={() => navigate("/form-receiver-address")}>Назад</button>
                    <button style={{ backgroundColor: "#1975FF", color: "white" }} onClick={() => navigate("/last-step")}>Продолжить</button>
                </div>
            </div>
        </div>
    )
}
