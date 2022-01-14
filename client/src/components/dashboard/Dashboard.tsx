import React from 'react'
import SocialInteractionsChart from './SocialInteractionsChart'
import VisitedPlacesChart from './VisitedPlacesChart'

const Dashboard = () => {
    return (
        <div>
            <VisitedPlacesChart />
            <SocialInteractionsChart />
        </div>
    )
}

export default Dashboard
