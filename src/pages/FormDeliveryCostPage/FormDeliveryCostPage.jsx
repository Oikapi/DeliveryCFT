import { Container, Radio, RadioGroup, Sheet } from '@mui/joy'
import "./formDeliveryCostPage.css"
import { SvgIcon } from '@mui/material'
import { yellow } from '@mui/material/colors'
import { useEffect, useState } from 'react'
import { FastDeliveryIcon, SlowDeliveryIcon } from '../MainPage/components/CustomIcons'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const FormDeliveryCostPage = () => {
    const navigate = useNavigate()
    const selectedData = useSelector(state => state.selectedData)
    const [selectedButton, setButton] = useState("")
    const [options, setOptions] = useState([])
    useEffect(() => {
        fetch("https://shift-backend.onrender.com/delivery/calc", {
            method: "POST",
            headers: {
                // Добавляем необходимые заголовки
                'Content-type': 'application/json',
            },
            body: JSON.stringify(selectedData)
        }).then(response => response.json()).then(res => {
            console.log(selectedData)
            setOptions(res.options)
        })
    }, [])

    return (
        <div className='deliv-option-container'>
            <div style={{ width: "66%" }}>
                <h2>
                    Способ отправки
                </h2>
                <div className='delivery-options'>
                    {options.map((el) =>
                        <button id={el.id} className={el.id === selectedButton ? "option-button sel" : "option-button"} onClick={(e) => el.id !== selectedButton ? setButton(el.id) : navigate("/form-receiver")}>
                            <div className='each-option'>
                                {el.type === "EXPRESS" ? <FastDeliveryIcon selected={el.id === selectedButton} /> : <SlowDeliveryIcon selected={el.id === selectedButton} />}

                                <div className='text-option' >
                                    <p>{el.name}</p>
                                    <h3>{el.price} ₽</h3>
                                    <p>{el.days} рабочих дней</p>
                                </div>
                            </div>
                        </button>)
                    }
                </div>
            </div>
        </div >
    )
}
