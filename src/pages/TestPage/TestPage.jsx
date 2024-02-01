import { MenuButton } from '@mui/joy';
import { Autocomplete, FormControl, FormLabel, Menu, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Dropdown, Tab, TabPanel, Tabs, TabsList } from "@mui/base";


export const TestPage = () => {
    return (
        <div>
            <Dropdown>
                <MenuButton
                // onClose={(e) => console.log(e)}
                // onClick={() => setSizeMenu(prev => !prev)}
                >
                    {/* <p>{`${packageSize.name}, ${packageSize.length}x${packageSize.width}x${packageSize.height} см`}</p> */}

                </MenuButton>
                <Menu
                    open={true}
                    onClose={(e, reason) => console.log(reason)}
                >
                    <MenuItem className="">
                        <Tabs defaultValue={1} >
                            <TabsList className="custom-tabs">
                                <Tab value={1}>Примерные</Tab>
                                <Tab value={2}>Точные</Tab>
                            </TabsList>
                            <TabPanel value={1} className="sizes-buttons">
                                {/* {packageTypes.map((el) => <Button value={el.name} onClick={() => dispatch({ type: "change_all", payload: el })} variant="plain">{`${el.name}, ${el.length}x${el.width}x${el.height}`}</Button>)} */}
                            </TabPanel>
                            <TabPanel value={2}>
                                <div className="accurate-size" >
                                    <FormControl onChange={(e) => console.log(e.target.id)}>

                                        <div className="accurate-size-each">
                                            <FormLabel >Длина</FormLabel>
                                            <TextField placeholder="cм" ></TextField>
                                        </div>
                                        <div className="accurate-size-each">
                                            <FormLabel>Ширина</FormLabel>
                                            <TextField placeholder="cм" ></TextField>
                                        </div>
                                        <div className="accurate-size-each">
                                            <FormLabel>Высота</FormLabel>
                                            <TextField placeholder="cм" ></TextField>
                                        </div>
                                        <div className="accurate-size-each">
                                            <FormLabel>Вес</FormLabel>
                                            <TextField placeholder="кг" ></TextField>
                                        </div>
                                    </FormControl>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </MenuItem>
                </Menu>

            </Dropdown>
        </div>
    )
}
