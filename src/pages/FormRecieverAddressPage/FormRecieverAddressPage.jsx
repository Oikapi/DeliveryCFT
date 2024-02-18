import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeReceiverAddress } from '../../store/selectedDataSlice'

export const FormReceiverAddressPage = () => {
    const navigate = useNavigate()
    const receiverAddress = useSelector(state => state.selectedData.receiverAddress)
    const dispatch = useDispatch()
    console.log(receiverAddress)
    return (
        <div className='container'>
            <div className='second-step-form'>
                <h2>Куда доставить</h2>
                <form>
                    <label>Улица</label>
                    <input type="text" name="" id="" placeholder='Улицп'
                        value={receiverAddress.street} onChange={(e) => dispatch(changeReceiverAddress({ ...receiverAddress, street: e.target.value }))} />
                    <label>Номер дома</label>
                    <input type="text" name="" id="" placeholder='Дом'
                        value={receiverAddress.house} onChange={(e) => dispatch(changeReceiverAddress({ ...receiverAddress, house: e.target.value }))} />
                    <label>Номер квартиры</label>
                    <input type="text" name="" id="" placeholder='Квартира'
                        value={receiverAddress.appartament} onChange={(e) => dispatch(changeReceiverAddress({ ...receiverAddress, appartament: e.target.value }))} />
                    <label>Заметка</label>
                    <input type="text" name="" id="" placeholder='Заметка для курьера'
                        value={receiverAddress.comment} onChange={(e) => dispatch(changeReceiverAddress({ ...receiverAddress, comment: e.target.value }))} />
                </form>
                <div className='nav-buttons'>
                    <button style={{ backgroundColor: "white", color: "#344051" }} onClick={() => navigate("/form-sender-address")}>Назад</button>
                    <button style={{ backgroundColor: "#1975FF", color: "white" }} onClick={() => navigate("/form-payer")}>Продолжить</button>
                </div>
            </div>
        </div>
    )
}
