import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Grid, TextField } from '@mui/material'
import React, { Fragment, useState } from 'react'
import http from '../common/http'
import IVisitedPlaceData from '../types/IVisitedPlaceData'

const AddVisitedPlace = () => {
    const [isOpen, setIsOpen] = useState(false)
    const initData = {
        id: "",
        place: "",
        date: "",
        hours: 0,
        isCrowded: false
    };
    const [places, setPlace] = useState(initData);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setPlace({ ...places, [name]: value });
        console.log(value)
    };


    const handleSave = () => {
        var data = {
            place: places.place,
            date: places.date,
            hours: places.hours,
            isCrowded: places.isCrowded
        }
        console.log(data)
        return http.post<IVisitedPlaceData>("/visited-places", data).then(response => {
            setPlace({
                id: response.data.id,
                place: response.data.place,
                date: response.data.date,
                hours: response.data.hours,
                isCrowded: response.data.isCrowded
            });
            setSubmitted(true);
            console.log(response.data);
            setIsOpen(false)
        })
            .catch(e => {
                console.log(e.message);
            });;
        // http.post<IVisitedPlaceData>("/visited-places", data)
    
    }

    const handleDialogOpen = () => {
        setIsOpen(true)
    }

    const handleDialogClose = () => {
        setIsOpen(false)
    }



    return (
        <Fragment>
            <Button variant="contained" onClick={handleDialogOpen}>
                Add Place Exposure
            </Button>

            <Fragment>
                <Dialog fullWidth maxWidth='sm' open={isOpen} onClose={handleDialogClose}>
                    <DialogTitle>Add Visited Place</DialogTitle>
                    <DialogContent>
                        <DialogContentText></DialogContentText>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} id="place" name="place" label="Place" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} id="date" name="date" label="Date" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} id="hours" label="Hours" variant="outlined" required />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox id="isCrowded" onChange={handleInputChange}/>} label="Is Crowded" />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSave} variant='outlined' color="primary">Save</Button>
                        <Button onClick={handleDialogClose} variant='contained' color="primary">Close</Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        </Fragment>


    )
}

export default AddVisitedPlace

