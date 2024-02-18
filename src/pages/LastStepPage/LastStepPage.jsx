import React from 'react'
import "./lastStepPage.css"
import LastStepItem from './lastStepItem'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LastStepPage = () => {
    const navigate = useNavigate()
    const selectedData = useSelector(state => state.selectedData)
    return (
        <div className='container'>
            <div className='last-step-page-container'>
                <h2>Проверка данных заказа</h2>
                <LastStepItem name="Получатель" data={selectedData.receiver} type={"people"} />
                <LastStepItem name="Отправитель" data={selectedData.sender} type={"people"} />
                <LastStepItem name="Откуда забрать" data={selectedData.senderAddress} type={"point"} />
                <LastStepItem name="Куда доставить" data={selectedData.receiverAddress} type={"point"} />
                <div className='result-footer'>
                    <div className='result-footer-text'>
                        <h3>Итого: 780р</h3>
                        <p>Тариф: Экспресс доставка до двери</p>
                        <p>Срок: 1 рабочий день</p>
                    </div>
                </div>
                <div className='nav-buttons last-step-buttons'>
                    <button style={{ backgroundColor: "white", color: "#344051" }} onClick={() => navigate("/form-payer")}>Назад</button>
                    <button style={{ backgroundColor: "#1975FF", color: "white" }} onClick={() => navigate("/last-step")}>Продолжить</button>
                </div>
            </div>
        </div>
    )
}

export default LastStepPage