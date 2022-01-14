import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, DialogTitleProps, Button, Modal, Box, Typography } from '@material-ui/core'
import React, { Fragment } from 'react'

type Props = {
    isOpen: boolean,
    handleClose: any,
    title: string,
    subtitle: string,
    children: any
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CustomModal = ({ isOpen, handleClose, title, subtitle, children }: Props) => {
    return (
        <Fragment>
            <Dialog fullWidth maxWidth='sm'
                open={isOpen}
                onClose={handleClose}
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{subtitle}</DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='outlined' color="primary">Save</Button>
                    <Button onClick={handleClose} variant='contained' color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
        // <>
        //     <Modal
        //         open={isOpen}
        //         onClose={handleClose}
        //         aria-labelledby="modal-modal-title"
        //         aria-describedby="modal-modal-description"
        //     >
        //         <Box sx={style}>
        //             <Typography id="modal-modal-title" variant="h6" component="h2">
        //                 Text in a modal
        //             </Typography>
        //             <Typography id="modal-modal-description">
        //                 Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        //             </Typography>
        //         </Box>
        //     </Modal>
        // </>
    )
}

export default CustomModal
