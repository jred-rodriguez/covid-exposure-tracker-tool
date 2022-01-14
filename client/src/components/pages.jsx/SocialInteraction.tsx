import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import http from '../common/http';
import ISocialInteractionData from '../types/ISocialInteractionData';
import { Link, Paper, Typography } from '@material-ui/core';



const SocialInteraction = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        var resultData = [];
        return http.get<Array<ISocialInteractionData>>("/social-interactions").then(response => {
            setTableData(response.data)
        }).catch(e => {
            console.log(e.message);
        });;
    }


    const columns = [
        { field: 'name', headerName: 'Name' },
        { field: 'date', headerName: 'Date', width: 200 },
        { field: 'hours', headerName: 'Hours' },
        { field: 'isSocialDistancing', headerName: 'Is Social Distancing', width: 200 }
    ]

    return (
        <>
            <Paper>
                <Typography variant='caption' align='left' color='textPrimary' gutterBottom>
                    <Link href='/'>Go back to dashboard</Link>
                </Typography>
            </Paper>
            <br></br>
            <Typography variant='h5' align='left' color='textPrimary' gutterBottom>Recent Social Interactions</Typography>
            <div style={{ height: 400, width: '100%' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <DataGrid
                            getRowId={row => row._id}
                            rows={tableData}
                            columns={columns}
                            pageSize={12}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SocialInteraction
