import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import {Select,MenuItem} from '@mui/material';
import './Tabs.css'
export default function TabsPage({ tab, setTab, search, setSearch, sortType, setSortType }) {

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };
    return (
        <Box backgroundColor={'#F5F5F5'} sx={{ width: '100%' }}>
            <div className='d-flex justify-content-between align-items-center'>
                <Tabs className='px-3 mx-5 d-inline'
                    value={tab}
                    onChange={handleChange}
                    sx={{
                        '& .MuiTab-root': {
                            color: 'green', // tab label color
                            fontWeight: 'bold'
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: 'green', // bottom border color
                        },
                    }}
                    aria-label="tabs page example">
                    <Tab label="All Submissions" />
                    <Tab label="Favourite Submissions" />
                </Tabs>
                <div className='d-flex align-items-center mx-5'>
                    <div id='searchBox' className='mx-3 rounded-pill border border-secondary border-2 d-flex align-items-center'>
                        &nbsp;
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input id='search' value={search} onChange={(e) => { setSearch(e.target.value) }} type="search" className="rounded-pill border-0" placeholder="Search" aria-label="Search" />
                    </div>
                    <div>
                        {/* <select id='select_sort_type' onChange={(e) => setSortType(e.target.value)} className='mx-3 rounded-pill border border-secondary border-2 form-select' aria-label="Default select example">
                            <option value={1}>Newest</option>
                            <option value={2}>Oldest</option>
                        </select> */}
                        <Select
                            id="select_sort_type"
                            className='rounded-pill'
                            value={sortType}
                            onChange={(e) => setSortType(e.target.value)}
                        >
                            <MenuItem value={1}>Newest</MenuItem>
                            <MenuItem value={2}>Oldest</MenuItem>
                        </Select>
                        {/* {console.log(sortType)} */}
                    </div>
                </div>

            </div>
        </Box>
    );
}