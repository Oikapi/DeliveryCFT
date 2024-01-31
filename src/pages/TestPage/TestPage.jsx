import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'

export const TestPage = () => {
    const [value, setValue] = useState(null);

    const handleInputChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                options={['Вариант 1', 'Вариант 2', 'Вариант 3']}
                isOptionEqualToValue={(option, value) => option === value}
                renderInput={(params) => (
                    <TextField {...params} label="Выберите или введите" />
                )}
                freeSolo
                autoSelect
                autoComplete
                includeInputInList
            />
        </div>
    )
}
