import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setRetryDelay } from "../../store/profileDataSlice"

const AuthSecondStepPage = () => {
    const phone = useSelector(state => state.profileData.phone)
    const retryDelay = useSelector(state => state.profileData.retryDelay);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register,
        formState: {
            errors,
        },
        setError,
        handleSubmit
    } = useForm()
    const onSubmit = async (data) => {
        const response = await fetch("https://shift-backend.onrender.com/users/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const dataRes = await response.json()
        Cookies.set("token", dataRes.token, { expires: 1 });
        console.log(dataRes)
        if (dataRes.success == true) {
            navigate("/profile");
        } else {
            setError("code", {
                message: "Код не прошел проверку на сервере",
            })
        }

    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(setRetryDelay(retryDelay - 1))
        }, 1000);

        return () => clearInterval(intervalId);
    });
    console.log(errors);
    return (
        <div className="container">
            <div className="auth-form">
                <h2>Вход</h2>
                <p>Введите проверочный код для входа
                    в личный кабинет</p>

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input value={phone}{...register("phone",
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
                    <input type="number" placeholder="Проверочный код" {...register("code",
                        {
                            required: "Поле обязательно к заполннению",
                            minLength: {
                                value: 6,
                                message: "Код должен содержать 6 цифр"
                            },
                            maxLength: {
                                value: 6,
                                message: "Код должен содержать 6 цифр",
                            }
                        })
                    }

                    />
                    {errors?.code && <p>{errors?.code.message}</p>}

                    <button>Войти</button>
                    <p>Запросить код повторно можно через {retryDelay} секунд</p>
                </form>
            </div>
        </div>

    )
}

export default AuthSecondStepPage
