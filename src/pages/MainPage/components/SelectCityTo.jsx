import { Option, Select } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import { ArrowDownIcon, ToLogo } from './CustomIcons'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { changeReceiverPoint } from '../../../store/selectedDataSlice'

export const SelectCityTo = () => {
    const pointsInfo = useSelector(state => state.points)
    const receiverPoint = useSelector(state => state.selectedData.receiverPoint)
    const dispatch = useDispatch()
    useEffect(() => {
        if (pointsInfo.status === "resolved") {
            dispatch(changeReceiverPoint(pointsInfo.points[0]))
        }
    }, [pointsInfo.status])
    const changeReceiverPointHandler = (value) => {
        dispatch(changeReceiverPoint(pointsInfo.points.find((el) => el.id === value)))
    }
    return (
        <>
            <Select
                value={pointsInfo.status === "resolved" ? receiverPoint.id : "loading"}
                variant="plain"
                indicator={<ArrowDownIcon fontSize={"lg"} />}
                startDecorator={<ToLogo />
                }
                onChange={(e, value) => changeReceiverPointHandler(value)}
                className="custom-select"
            >
                {pointsInfo.status === "resolved" && pointsInfo.points.map((el) => <Option value={el.id} key={el.id}>{el.name}</Option>)}
                <Option value={"loading"} sx={{ display: "none" }}>Loading...</Option>
                {/* Костыль спросить как */}
            </Select>
            <div className="fast-options">
                {pointsInfo.status === "resolved" && pointsInfo.points
                    .slice(0, 3)
                    .map((el) => <Button variant="text" value={el.id} key={el.id} onClick={(e) => changeReceiverPointHandler(e.target.value)}>{el.name}</Button>)}
            </div>
        </>
    )
}
