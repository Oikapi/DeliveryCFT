import React from 'react'
import "./formSenderPage.css"
import { changeSender } from '../../store/selectedDataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const FormSenderPage = () => {
    const sender = useSelector(state => state.selectedData.sender)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='second-step-form'>
                <h2>Отправитель</h2>
                <form>
                    <label>Фамилия</label>
                    <input type="text" name="" id="" placeholder='Фамилия'
                        value={sender.lastname} onChange={(e) => dispatch(changeSender({ ...sender, lastname: e.target.value }))} />
                    <label>Имя</label>
                    <input type="text" name="" id="" placeholder='Имя'
                        value={sender.firstname} onChange={(e) => dispatch(changeSender({ ...sender, firstname: e.target.value }))} />
                    <label>Отчество</label>
                    <input type="text" name="" id="" placeholder='Отчество (при наличии)'
                        value={sender.middlename} onChange={(e) => dispatch(changeSender({ ...sender, middlename: e.target.value }))} />
                    <label>Номер телефона</label>
                    <input type="text" name="" id="" placeholder='Телефон'
                        value={sender.phone} onChange={(e) => dispatch(changeSender({ ...sender, phone: e.target.value }))} />
                </form>
                <div className='nav-buttons'>
                    <button style={{ backgroundColor: "white", color: "#344051" }}>Назад</button>
                    <button style={{ backgroundColor: "#1975FF", color: "white" }} onClick={() => navigate("/form-sender-address")}>Продолжить</button>
                </div>
            </div>
        </div>
    )
}
