import { Container, Link, Typography } from '@material-ui/core'
import moment from 'moment'

import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import groupBy from '../common/helper'
import http from '../common/http'
import ISocialInteractionData from '../types/ISocialInteractionData'


const SocialInteractionsChart = () => {
    const [values, setValues] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        var resultData = [];
        return http.get<Array<ISocialInteractionData>>("/social-interactions").then(response => {
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
            <Typography variant='caption' align='left' color='textPrimary' gutterBottom>Recent Social Interactions</Typography>
            <Typography variant='caption' align='left' color='textSecondary' gutterBottom><Link href='/social-interaction'>View all</Link></Typography>

            <Chart
                chartType="ColumnChart"
                data={[["Date", "No. Of Social Interactions"], ...values]}
                width="100%"
                height="300px"
                legendToggle
            />
        </Container>
    )
}

export default SocialInteractionsChart
