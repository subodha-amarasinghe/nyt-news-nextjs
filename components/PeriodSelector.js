import { Search } from '@mui/icons-material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { FormControl, Select, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const PeriodSelector = (props) => {
    const router = useRouter()
    const [days, setDays] = useState(1);

    const handleChangeDays = e => {
        // console.log("E", e)
        setDays(e.target.value)
        props.handleChangeDays(e.target.value)
        router.push('/?d=' + e.target.value)
    }

    useEffect(() => {
        if (props.days && [1, 7, 30].indexOf(props.days) > -1) {
            setDays(props.days)
        }
    }, [props.days]);
    return (
        <div style={{ marginTop: '12px' }} >
            <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="uncontrolled-native">
                    Period
                </InputLabel>
                <Select
                    defaultValue={1}
                    value={days}
                    onChange={handleChangeDays}
                    placeholder='Period'
                    label="Period"
                    data-testid="select"
                >
                    <MenuItem value={1} data-testid="select-option" >1 Day</MenuItem>
                    <MenuItem value={7} data-testid="select-option" >7 Days</MenuItem>
                    <MenuItem value={30} data-testid="select-option" >30 Days</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default PeriodSelector;
