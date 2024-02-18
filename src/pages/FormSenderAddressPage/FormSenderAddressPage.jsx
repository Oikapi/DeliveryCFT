
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeSenderAddress } from '../../store/selectedDataSlice'

export const FormSenderAddressPage = () => {
    const senderAddress = useSelector(state => state.selectedData.senderAddress)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='second-step-form'>
                <h2>Откуда забрать</h2>
                <form>
                    <label>Улица</label>
                    <input type="text" name="" id="" placeholder='Улицп'
                        value={senderAddress.street} onChange={(e) => dispatch(changeSenderAddress({ ...senderAddress, street: e.target.value }))} />
                    <label>Номер дома</label>
                    <input type="text" name="" id="" placeholder='Дом'
                        value={senderAddress.house} onChange={(e) => dispatch(changeSenderAddress({ ...senderAddress, house: e.target.value }))} />
                    <label>Номер квартиры</label>
                    <input type="text" name="" id="" placeholder='Квартира'
                        value={senderAddress.appartament} onChange={(e) => dispatch(changeSenderAddress({ ...senderAddress, appartament: e.target.value }))} />
                    <label>Заметка</label>
                    <input type="text" name="" id="" placeholder='Заметка для курьера'
                        value={senderAddress.comment} onChange={(e) => dispatch(changeSenderAddress({ ...senderAddress, comment: e.target.value }))} />
                </form>
                <div className='nav-buttons'>
                    <button style={{ backgroundColor: "white", color: "#344051" }}>Назад</button>
                    <button style={{ backgroundColor: "#1975FF", color: "white" }} onClick={() => navigate("/form-receiver-address")}>Продолжить</button>
                </div>
            </div>
        </div>
    )
}
