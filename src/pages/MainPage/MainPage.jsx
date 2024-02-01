import "./mainPage.css"
import { useEffect, useReducer, useState } from "react";
import { Button, SvgIcon, TextField, ToggleButton, createSvgIcon, Menu, MenuItem, } from "@mui/material";
import { Box, FormControl, FormLabel, MenuButton, Option, Select } from "@mui/joy";
import { Dropdown, Tab, TabPanel, Tabs, TabsList } from "@mui/base";


function reducerSize(state, action) {
    console.log(state, action)
    if (action.type === "change_all") {
        return {
            ...action.payload
        }
    }
    if (action.type === "change_length") {
        return {
            ...state, length: action.payload, name: "Свой размер"
        }
    }
    if (action.type === "change_width") {
        return {
            ...state, width: action.payload, name: "Свой размер"
        }

    }
    if (action.type === "change_height") {
        return {
            ...state, height: action.payload, name: "Свой размер"
        }

    }
    if (action.type === "change_weight") {
        return {
            ...state, weight: action.payload, name: "Свой размер"
        }

    }
}

const MainPage = () => {
    const FromIcon = createSvgIcon(
        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99988 17.3281C7.99988 17.3281 14.2608 11.7629 14.2608 7.58899C14.2608 4.13121 11.4577 1.32812 7.99988 1.32812C4.5421 1.32812 1.73901 4.13121 1.73901 7.58899C1.73901 11.7629 7.99988 17.3281 7.99988 17.3281Z" stroke="black" strokeWidth="2" />
            <path d="M10.0001 7.32825C10.0001 8.43282 9.10471 9.32825 8.00014 9.32825C6.89557 9.32825 6.00014 8.43282 6.00014 7.32825C6.00014 6.22368 6.89557 5.32825 8.00014 5.32825C9.10471 5.32825 10.0001 6.22368 10.0001 7.32825Z" stroke="black" strokeWidth="2" />
        </svg>
        ,
        'From',
    );
    const ArrowDownIcon = createSvgIcon(
        <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8333 0.8278L7.70703 5.95403C7.3165 6.34455 6.68334 6.34455 6.29281 5.95403L1.16659 0.827799" stroke="#637083" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        ,
        'ArrowDown',
    );
    const MailIcon = createSvgIcon(
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.90625 2.95345L8.46637 6.94533C8.78741 7.17582 9.21259 7.17582 9.53363 6.94533L15.0938 2.95345M3.375 13.1618H14.625C15.6605 13.1618 16.5 12.2912 16.5 11.2173V3.43956C16.5 2.36567 15.6605 1.49512 14.625 1.49512H3.375C2.33947 1.49512 1.5 2.36567 1.5 3.43956V11.2173C1.5 12.2912 2.33947 13.1618 3.375 13.1618Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ,
        "Mail"
    )
    const ToLogo = createSvgIcon(
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.55269 10.9961L9.41411 16.38C9.76302 17.3892 11.1779 17.423 11.5745 16.4316L16.9147 3.08312C17.2862 2.15451 16.3802 1.22563 15.4426 1.57386L1.75163 6.65875C0.751143 7.03034 0.748911 8.44465 1.74822 8.81939L7.55269 10.9961Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ,
        "To"
    )
    const [packageSize, dispatch] = useReducer(reducerSize, {
    })
    const [packageTypes, setPackageTypes] = useState([])
    useEffect(() => {
        fetch("https://shift-backend.onrender.com/delivery/package/types")
            .then((res) => res.json())
            .then((packTypes) => {
                setPackageTypes(packTypes.packages)
                dispatch({ type: "change_all", payload: packTypes.packages[0] })
            })
    }, [])
    const [cityFrom, changeCityFrom] = useState("Санкт-Петербург")
    const [cityTo, changeCityTo] = useState("Новосибирск")
    const [accurateSize, changeAccurateSize] = useState({
        length: "",
        width: "",
        height: "",
        weight: ""
    })

    const [isSizeMenuOpen, setSizeMenu] = useState(false)
    return (
        <div className="main-container">
            <div className="center-container">
                <div className="left-side-containe">
                    <div className="plane-container">
                        <div className="earth"><img src="/earth.svg" alt="" /></div>
                        <div className="left-point"><img src="/leftPoint.svg" alt="" /></div>
                        <div className="central-point"><img src="centralPoin.svg" alt="" /></div>
                        <div className="right-point"><img src="/rightPoint.svg" alt="" /></div>
                        <div className="plane"><img src="/plane.svg" alt="" /></div>
                    </div>
                    <div className="left-container-text">
                        <h1>
                            ЦФТ доставка - быстро, удобно, надежно!
                        </h1>
                    </div>

                </div>

                <div className="delivery-form">
                    <h2>Расчитать доставку</h2>
                    <form action="">
                        <label >Город отправки

                            <Select
                                value={cityFrom}
                                variant="plain"
                                indicator={<ArrowDownIcon fontSize={"lg"} />}
                                startDecorator={<FromIcon />
                                }
                                className="custom-select"
                                onChange={(e, value) => changeCityFrom(value)}
                            >
                                <Option value="Москва">Москва</Option>
                                <Option value="Санкт-Петербург">Санкт-Петербург</Option>
                                <Option value="Новосибирск">Новосибирск</Option>
                                <Option value="Томск">Томск</Option>
                            </Select>
                            <div className="fast-options">
                                <Button variant="text" value={"Санкт-Петербург"} onClick={(e) => changeCityFrom(e.target.value)}>Санкт-Петербург</Button>
                                <Button variant="text" value={"Новосибирск"} onClick={(e) => changeCityFrom(e.target.value)} > Новосибирск</Button>
                                <Button variant="text" value={"Томск"} onClick={(e) => changeCityFrom(e.target.value)}> Томск</Button>
                            </div>
                        </label>

                        <label >Город назначения
                            <Select
                                value={cityTo}
                                variant="plain"
                                indicator={<ArrowDownIcon fontSize={"lg"} />}
                                startDecorator={<ToLogo />
                                }
                                onChange={(e, value) => changeCityTo(value)}
                                className="custom-select"
                            >
                                <Option value="Москва">Москва</Option>
                                <Option value="Санкт-Петербург">Санкт-Петербург</Option>
                                <Option value="Новосибирск">Новосибирск</Option>
                                <Option value="Томск">Томск</Option>
                            </Select>
                            <div className="fast-options">
                                <Button variant="text" value={"Санкт-Петербург"} onClick={(e) => changeCityTo(e.target.value)}>Санкт-Петербург</Button>
                                <Button variant="text" value={"Новосибирск"} onClick={(e) => changeCityTo(e.target.value)} > Новосибирск</Button>
                                <Button variant="text" value={"Томск"} onClick={(e) => changeCityTo(e.target.value)}> Томск</Button>
                            </div>
                        </label>
                        <label >Размер поссылки
                            <div>
                                <Dropdown
                                >
                                    <MenuButton
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClose={(e) => console.log(e)}
                                        startDecorator={<MailIcon />}
                                        className={"size-picking-btn"}
                                        sx={{ paddingInline: "12px 8px" }}
                                        endDecorator={<ArrowDownIcon fontSize={"lg"} />}
                                        onClick={() => setSizeMenu(prev => !prev)}
                                    >
                                        <p>{`${packageSize.name}, ${packageSize.length}x${packageSize.width}x${packageSize.height} см`}</p>

                                    </MenuButton>
                                    <Menu
                                        onClose={(e, reason) => { if (reason === "backdropClick") setSizeMenu(false) }}
                                        open={isSizeMenuOpen}
                                    >
                                        <MenuItem className="">
                                            <Tabs defaultValue={1} >
                                                <TabsList className="custom-tabs">
                                                    <Tab value={1}>Примерные</Tab>
                                                    <Tab value={2}>Точные</Tab>
                                                </TabsList>
                                                <TabPanel value={1} className="sizes-buttons">
                                                    {packageTypes.map((el) => <Button value={el.name} onClick={() => dispatch({ type: "change_all", payload: el })} variant="plain">{`${el.name}, ${el.length}x${el.width}x${el.height}`}</Button>)}
                                                </TabPanel>
                                                <TabPanel value={2}>
                                                    <div className="accurate-size" >
                                                        <FormControl onChange={(e) => console.log(e.target.id)}>

                                                            <div className="accurate-size-each">
                                                                <FormLabel >Длина</FormLabel>
                                                                <TextField placeholder="cм" onChange={(e) => dispatch({ type: "change_length", payload: e.target.value })}></TextField>
                                                            </div>
                                                            <div className="accurate-size-each">
                                                                <FormLabel>Ширина</FormLabel>
                                                                <TextField placeholder="cм" onChange={(e) => dispatch({ type: "change_width", payload: e.target.value })}></TextField>
                                                            </div>
                                                            <div className="accurate-size-each">
                                                                <FormLabel>Высота</FormLabel>
                                                                <TextField placeholder="cм" onChange={(e) => dispatch({ type: "change_height", payload: e.target.value })}></TextField>
                                                            </div>
                                                            <div className="accurate-size-each">
                                                                <FormLabel>Вес</FormLabel>
                                                                <TextField placeholder="кг" onChange={(e) => dispatch({ type: "change_weight", payload: e.target.value })}></TextField>
                                                            </div>
                                                        </FormControl>
                                                    </div>
                                                </TabPanel>
                                            </Tabs>
                                        </MenuItem>
                                    </Menu>

                                </Dropdown>
                            </div>
                        </label>
                        <Button className="sub-btn" >Расчитать</Button>
                    </form>

                </div >
            </div >
        </div >
    )
}

export default MainPage