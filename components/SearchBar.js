import { Search } from '@mui/icons-material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { FormControl } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'

const Searchbar = (props) => {
    const router = useRouter()
    const [term, setTerm] = useState('');

    useEffect(() => {
        setTerm(props.searchTerm)
    }, [props.searchTerm]);

    const handleChangeSearchTerm = (event) => {
        setTerm(event.target.value)
        if (event.keyCode === 13) {
            // router.push('/search?term=' + event.target.value)
            props.handleChangeSearchKey(event.target.value)
        }
    }
    return (
        <div style={{ marginTop: '31px' }}>
            <FormControl fullWidth>
                {/* <InputLabel htmlFor="my-input">Search News</InputLabel> */}
                <Input
                    fullWidth
                    size="small"
                    placeholder="Search"
                    id="input-with-icon-adornment"
                    onKeyDown={handleChangeSearchTerm}
                    endAdornment={
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    }

                />
            </FormControl>
        </div>
    );
}

export default Searchbar;
