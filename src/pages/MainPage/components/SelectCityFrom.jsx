import { Option, Select } from '@mui/joy'
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ArrowDownIcon, FromIcon } from './CustomIcons'
import { useDispatch, useSelector } from 'react-redux'
import { changeSenderPoint } from '../../../store/selectedDataSlice'

export const SelectCityFrom = () => {
    const pointsInfo = useSelector(state => state.points)
    const senderPoint = useSelector(state => state.selectedData.senderPoint)
    const dispatch = useDispatch()
    useEffect(() => {
        if (pointsInfo.status === "resolved") {
            dispatch(changeSenderPoint(pointsInfo.points[0]))
        }
    }, [pointsInfo.status])
    const changeSenderPointHandler = (value) => {
        dispatch(changeSenderPoint(pointsInfo.points.find((el) => el.id === value)))
    }
    return (
        <>
            <Select
                value={pointsInfo.status === "resolved" ? senderPoint.id : "loading"}
                variant="plain"
                indicator={<ArrowDownIcon fontSize={"lg"} />}
                startDecorator={<FromIcon />
                }
                onChange={(e, value) => changeSenderPointHandler(value)}
                className="custom-select"
            >
                {pointsInfo.status === "resolved" && pointsInfo.points.map((el) => <Option value={el.id} key={el.id}>{el.name}</Option>)}
                <Option value={"loading"} sx={{ display: "none" }}>Loading...</Option>
                {/* Костыль спросить как */}
            </Select>
            <div className="fast-options">
                {pointsInfo.status === "resolved" && pointsInfo.points
                    .slice(0, 3)
                    .map((el) => <Button variant="text" key={el.id} value={el.id} onClick={(e) => changeSenderPointHandler(e.target.value)}>{el.name}</Button>)}
            </div>
        </>
    )
}
