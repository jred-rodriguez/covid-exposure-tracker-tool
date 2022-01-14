import { Box, Paper } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

const Notifications = () => {
    return (
        <Box sx={{ margin: '25px' }}>
            <Paper elevation={3}>
                <Alert severity="error" variant='filled'>You have been exposed to crowded place for the last 14 days.<br />
                    Try to avoid crowded places to minimized exposure risk.</Alert>

                {/* <Alert severity="success" variant='filled'>Thank you for helping to stop spread the virus by staying at home.</Alert> */}
            </Paper>
        </Box>
    )
}

export default Notifications
