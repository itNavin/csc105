import { useState } from 'react'
import Content from './components/Content.jsx'
import Nav from './components/Nav.jsx'
import React from 'react'
import { Sidebar } from './components/SideBar.jsx'
import Rightbar from './components/RightBar.jsx'
import { Grid } from '@mui/material'

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item md={6}>
            <Content />
          </Grid>
          <Grid item md={3}>
            <Rightbar />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App
