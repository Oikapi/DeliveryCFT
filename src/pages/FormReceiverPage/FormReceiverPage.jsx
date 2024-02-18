import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeReciever } from '../../store/selectedDataSlice'
import { useNavigate } from 'react-router-dom'

export const FormReceiverPage = () => {
    const receiver = useSelector(state => state.selectedData.receiver)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='second-step-form'>
                <h2>Получатель</h2>
                <form >
                    <label>Фамилия</label>
                    <input type="text" name="lastname" id="" placeholder='Фамилия'
                        value={receiver.lastname} onChange={(e) => dispatch(changeReciever({ ...receiver, lastname: e.target.value }))} />
                    <label>Имя</label>
                    <input type="text" name="firstname" id="" placeholder='Имя'
                        value={receiver.firstname} onChange={(e) => dispatch(changeReciever({ ...receiver, firstname: e.target.value }))} />
                    <label>Отчество</label>
                    <input type="text" name="middlename" id="" placeholder='Отчество (при наличии)'
                        value={receiver.middlename} onChange={(e) => dispatch(changeReciever({ ...receiver, middlename: e.target.value }))} />
                    <label>Номер телефона</label>
                    <input type="text" name="phone" id="" placeholder='Телефон'
                        value={receiver.phone} onChange={(e) => dispatch(changeReciever({ ...receiver, phone: e.target.value }))} />
                </form>
                <div className='nav-buttons'>
                    <button style={{ backgroundColor: "white", color: "#344051" }}>Назад</button>
                    <button style={{ backgroundColor: "#1975FF", color: "white" }} onClick={() => navigate("/form-sender")}>Продолжить</button>
                </div>
            </div>
        </div>
    )
}
