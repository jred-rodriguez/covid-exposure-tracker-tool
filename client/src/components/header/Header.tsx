import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Notifications from './Notifications'
import { Container, Typography } from '@material-ui/core'

type Props = {
    title: string
}

const Header = ({ title }: Props) => {
    return (
        <Fragment>
            <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
                {title}
            </Typography>
            <Navbar />
            <Notifications />
        </Fragment>

    )
}

Header.defaultProps = {
    title: 'COVID Exposure Tracker Tool'
}

export default Header
