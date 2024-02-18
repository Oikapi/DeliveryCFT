
import React from 'react'
import { EditItem } from '../MainPage/components/CustomIcons'

const LastStepItem = ({ name, data, type }) => {
    let firstString = ""
    let secondString = ""
    if (type === "point") {
        firstString = `ул. ${data.street}, д.${data.appartament}`
        secondString = data.comment
    } else {
        firstString = `${data.firstname} ${data.middlename} ${data.lastname}`
        secondString = data.phone
    }
    return (
        <div className='last-step-item'>
            <div className='item-name'><p>Получатель</p>
                <button><EditItem /></button>
            </div>

            <div className='lstep-bottom'>
                <label>
                    {type === "point" ? "Адресс" : "ФИО"}
                    <input type="text" value={firstString} disabled />
                </label>
                <label>
                    {type === "point" ? "Заметка" : "Телефон"}
                    <input type="text" value={secondString} disabled />
                </label>
            </div>
        </div>

    )
}

export default LastStepItem