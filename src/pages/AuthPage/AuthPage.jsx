import { useState } from "react"
import "./authPage.css"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changePhone, setRetryDelay } from "../../store/profileDataSlice"

const AuthPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const phone = useSelector(state => state.profileData.phone)
    const { register,
        formState: {
            errors,
        },
        handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const response = await fetch("https://shift-backend.onrender.com/auth/otp",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
        const resData = await response.json()
        console.log(data)
        if (resData.success) {
            dispatch(setRetryDelay(resData.retryDelay));
            navigate("/auth-second")
            dispatch(changePhone(data.phone))
        }
    }

    return (
        <div className="container">
            <div className="auth-form">
                <h2>Вход</h2>
                <p>Введите номер телефона для входа<br />
                    в личный кабинет
                </p>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="number"
                        {...register("phone",
                            {
                                required: "Поле обязательно к заполннению",
                                pattern: {
                                    value: /[0-9]{11}/,
                                    message: "Только цифры",
                                },
                                minLength: {
                                    value: 11,
                                    message: "Номер должен состоять из 11 цифр"
                                },
                                maxLength: {
                                    value: 11,
                                    message: "Номер должен состоять из 11 цифр",
                                }
                            }
                        )
                        }
                        placeholder="Телефон" />
                    {errors?.phone && <p>{errors?.phone.message}</p>}
                    <button>Продолжить</button>
                </form>
            </div>
        </div>

    )
}

export default AuthPage
