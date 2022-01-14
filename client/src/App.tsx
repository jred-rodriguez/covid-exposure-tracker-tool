import { Container, CssBaseline } from '@material-ui/core'
import React, { Fragment } from 'react'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import SocialInteraction from './components/pages.jsx/SocialInteraction'
import VisitedPlaces from './components/pages.jsx/VisitedPlaces'


const App = () => {
  const getPage = () => {
    const route = window.location.pathname;
    console.log("Route", route);
    if (route === "/visited-places") return <VisitedPlaces />;
    if (route === "/social-interaction") return <SocialInteraction />;
    return <Dashboard />;
  }

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <div className="App">{getPage()}</div>
      </Container>
    </Fragment>
  )
}

export default App
