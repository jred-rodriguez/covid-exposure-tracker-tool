import { Grid, Button, TextField, Paper, Checkbox, FormControlLabel } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import AddSocialInteraction from '../modals/AddSocialInteraction'
import AddVisitedPlace from '../modals/AddVisitedPlace'



const Toolbar = () => {
    return (
        <Fragment>
            <Grid container spacing={1} justifyContent='center'>
                <Grid item>
                    <AddSocialInteraction />

                </Grid>
                <Grid item>
                    <AddVisitedPlace />
                </Grid>
                <Grid item><Button variant="contained" color="primary">
                    Reset Data
                </Button></Grid>
            </Grid>
        </Fragment>

    )
}

export default Toolbar
