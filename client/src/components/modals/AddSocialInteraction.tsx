import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Grid, TextField } from '@mui/material'
import React, { Fragment, useState } from 'react'
import http from '../common/http'
import ISocialInteractionData from '../types/ISocialInteractionData'
import IVisitedPlaceData from '../types/ISocialInteractionData'

const AddSocialInteraction = () => {
    const [isOpen, setIsOpen] = useState(false)
    const initData = {
        id: "",
        name: "",
        date: "",
        hours: 0,
        isSocialDistancing: false
    };
    const [formData, setFormData] = useState(initData);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(value)
    };


    const handleSave = () => {
        var data = {
            name: formData.name,
            date: formData.date,
            hours: formData.hours,
            isSocialDistancing: formData.isSocialDistancing
        }
        console.log(data)
        return http.post<ISocialInteractionData>("/social-interactions", data).then(response => {
            setSubmitted(true);
            console.log(response.data);
            setIsOpen(false)
        })
            .catch(e => {
                console.log(e.message);
            });;
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
                Add Social Interaction
            </Button>

            <Fragment>
                <Dialog fullWidth maxWidth='sm' open={isOpen} onClose={handleDialogClose}>
                    <DialogTitle>Add Social Interaction</DialogTitle>
                    <DialogContent>
                        <DialogContentText></DialogContentText>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} id="name" name="name" label="Name" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} id="date" name="date" label="Date" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} id="hours" label="Hours" variant="outlined" required />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox id="isSocialDistancing" onChange={handleInputChange} />} label="Is Social Distancing" />
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

export default AddSocialInteraction

