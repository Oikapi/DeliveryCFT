import { useEffect, useState } from "react"
import "./profilePage.css"
import Cookies from "js-cookie"

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch("https://shift-backend.onrender.com/users/session", {
            method: "GET",
            headers: {
                'Authorization': "Bearer " + Cookies.get("token"), // добавляем заголовок Authorization с токеном
                'Content-Type': 'application/json' // если необходимо, укажите тип контента
            },
        }
        ).then(resToken => resToken.json()).then(data => setUserInfo(data.user))
    }, [])

    const onSubmit = async () => {
        const body = JSON.stringify({
            profile: {
                firstname: userInfo.firstname,
                lastname: userInfo.lastname,
                middlename: userInfo.middlename,
                email: userInfo.email,
            },
            phone: userInfo.phone
        })
        console.log(body);
        const data = await fetch("https://shift-backend.onrender.com/users/profile", {
            method: "PATCH",
            headers: {
                'Authorization': "Bearer " + Cookies.get("token"),
                'Content-Type': 'application/json'
            },
            body: body
        })
        const dataObj = await data.json();
        console.log(dataObj);
    }
    return (
        <div className="container">
            <div className="profile-form">
                <h2>Профиль</h2>
                <form >
                    <label>
                        Фамилия
                        <input type="text" defaultValue={userInfo?.lastname} onChange={e => setUserInfo(prev => { return { ...prev, lastname: e.target.value, } })} />
                    </label>
                    <label>
                        Имя
                        <input type="text" defaultValue={userInfo?.firstname} onChange={e => setUserInfo(prev => { return { ...prev, firstname: e.target.value, } })} />
                    </label>
                    <label>
                        Отчество
                        <input type="text" defaultValue={userInfo?.middlename} onChange={e => setUserInfo(prev => { return { ...prev, middlename: e.target.value, } })} />
                    </label>
                    <label>
                        Номер телефона
                        <input type="text" disabled={true} placeholder={userInfo.phone} />
                    </label>
                    <label>
                        Email
                        <input type="text" defaultValue={userInfo?.email} onChange={e => setUserInfo(prev => { return { ...prev, email: e.target.value, } })} />
                    </label>

                </form>
                <button onClick={onSubmit}>Обновить данные</button>
            </div>
        </div>
    )
}

export default ProfilePage
