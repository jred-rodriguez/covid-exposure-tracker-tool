import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import IVisitedPlaceData from '../types/IVisitedPlaceData';
import http from '../common/http';
import { Link, Paper, Typography } from '@material-ui/core';


const VisitedPlaces = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        var resultData = [];
        return http.get<Array<IVisitedPlaceData>>("/visited-places").then(response => {
            setTableData(response.data)
        }).catch(e => {
            console.log(e.message);
        });;
    }


    const columns = [
        { field: 'place', headerName: 'Place' },
        { field: 'date', headerName: 'Date', width: 200 },
        { field: 'hours', headerName: 'Hours' },
        { field: 'isCrowded', headerName: 'Is Crowded' }
    ]

    return (
        <>
            <Paper>
                <Typography variant='caption' align='left' color='textPrimary' gutterBottom>
                    <Link href='/'>Go back to dashboard</Link>
                </Typography>
            </Paper>
            <br></br>
            <Typography variant='h5' align='left' color='textPrimary' gutterBottom>Recent Visited Places</Typography>
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

export default VisitedPlaces
