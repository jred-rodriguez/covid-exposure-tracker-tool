import { Container, Link, Typography } from '@material-ui/core'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import groupBy from '../common/helper';
import http from '../common/http';
import IVisitedPlaceData from '../types/IVisitedPlaceData';


const VisitedPlacesChart = () => {
    const [values, setValues] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        var resultData = [];
        return http.get<Array<IVisitedPlaceData>>("/visited-places").then(response => {
            let data = groupBy(response.data, 'day').sort((a,b) => new moment(a.Date).format('YYYYMMDD') - new moment(b.Date).format('YYYYMMDD'));
            for (var i = 0; i < data.length; i++) {
                resultData.push([moment(data[i].Date).format('DD MMM YYYY'),data[i].Count]);
            }
            setValues(resultData);
        }).catch(e => {
            console.log(e.message);
        });;
    }

    return (
        <Container>
            <Typography variant='caption' align='left' color='textPrimary' gutterBottom>Recent Visited Places</Typography>
            <Typography variant='caption' align='left' color='textSecondary' gutterBottom><Link href='/visited-places'>View all</Link></Typography>

            <Chart
                chartType="ColumnChart"
                data={[["Date", "No. Of Visited Places"], ...values]}
                width="100%"
                height="300px"
                legendToggle
            />
        </Container>
    )
}

export default VisitedPlacesChart
