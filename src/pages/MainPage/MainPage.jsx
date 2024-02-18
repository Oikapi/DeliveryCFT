import "./mainPage.css"
import { useEffect, useReducer, useState } from "react";
import { Button, SvgIcon, TextField, ToggleButton, createSvgIcon, Menu, MenuItem, } from "@mui/material";
import { Box, FormControl, FormLabel, MenuButton, Option, Select } from "@mui/joy";
import { Dropdown, Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackagesTypes } from "../../store/packageTypesSlice";
import { FromIcon, ArrowDownIcon, MailIcon, ToLogo } from "./components/CustomIcons";
import { SelectCityFrom } from "./components/SelectCityFrom";
import { SelectCityTo } from "./components/SelectCityTo";
import { fetchPoints } from "../../store/pointsSlice";
import { changePackageAll, changePackageField } from "../../store/selectedDataSlice";
import { useNavigate } from "react-router-dom";


const MainPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selectedPackage = useSelector(state => state.selectedData.package)
    const packageTypes = useSelector(state => state.packageTypes.packageTypes)
    const selectedData = useSelector(state => state.selectedData)
    console.log(selectedData)
    useEffect(() => {
        dispatch(fetchPackagesTypes()).then((data) => dispatch(changePackageAll(data.payload[0])))
        dispatch(fetchPoints())

    }, [])

    const [isSizeMenuOpen, setSizeMenu] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setSizeMenu(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                            <SelectCityFrom />

                        </label>

                        <label >Город назначения
                            <SelectCityTo />
                        </label>
                        <label >Размер поссылки
                            <div>
                                <Dropdown
                                >
                                    <Button
                                        onClick={handleClick}
                                        id="basic-menu"
                                        startIcon={<MailIcon />}
                                        className={"size-picking-btn"}
                                        aria-controls={isSizeMenuOpen ? 'basic-menu' : undefined}
                                        endIcon={<ArrowDownIcon fontSize={"lg"} style={{ marginLeft: "auto" }} />}
                                        sx={{ paddingInline: "12px 8px" }}
                                        aria-haspopup="true"
                                        aria-expanded={isSizeMenuOpen ? 'true' : undefined}
                                    >
                                        {selectedPackage.id == 0 ? "Loading..." : <p>{`${selectedPackage.name}, ${selectedPackage.length}x${selectedPackage.width}x${selectedPackage.height} см`}</p>}


                                    </Button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="basic-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                        onClose={(e, reason) => { if (reason === "backdropClick") setSizeMenu(false) }}
                                        open={isSizeMenuOpen}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem className="">
                                            <Tabs defaultValue={1} >
                                                <TabsList className="custom-tabs">
                                                    <Tab value={1}>Примерные</Tab>
                                                    <Tab value={2}>Точные</Tab>
                                                </TabsList>
                                                <TabPanel value={1} className="sizes-buttons">
                                                    {packageTypes?.map((el) => <Button key={el.id} value={el.name} onClick={() => dispatch(changePackageAll(el))} variant="plain">{`${el.name}, ${el.length}x${el.width}x${el.height}`}</Button>)}
                                                </TabPanel>
                                                <TabPanel value={2}>
                                                    <div className="accurate-size" >
                                                        <FormControl>

                                                            <div className="accurate-size-each">
                                                                <FormLabel >Длина</FormLabel>
                                                                <TextField placeholder="cм" onChange={(e) => dispatch(changePackageField({ length: e.target.value }))}></TextField>
                                                            </div>
                                                            <div className="accurate-size-each">
                                                                <FormLabel>Ширина</FormLabel>
                                                                <TextField placeholder="cм" onChange={(e) => dispatch(changePackageField({ width: e.target.value }))}></TextField>
                                                            </div>
                                                            <div className="accurate-size-each">
                                                                <FormLabel>Высота</FormLabel>
                                                                <TextField placeholder="cм" onChange={(e) => dispatch(changePackageField({ height: e.target.value }))}></TextField>
                                                            </div>
                                                            <div className="accurate-size-each">
                                                                <FormLabel>Вес</FormLabel>
                                                                <TextField placeholder="кг" onChange={(e) => dispatch(changePackageField({ weight: e.target.value }))}></TextField>
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
                        <Button className="sub-btn" onClick={() => navigate("/form-cost")}>Расчитать</Button>
                    </form>

                </div >
            </div >
        </div >
    )
}

export default MainPage