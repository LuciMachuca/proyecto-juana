import * as React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

import { Intro, Laberinto, LosRemansos, MinaClavero, MuseoRocsen, NidoDelAguila, NonoCentro, PasoDeLasTropas, PuentesColgantes, ValleEncantado } from './CardsConfig.jsx';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));


export default function Cards() {

  const classes = useStyles();

  return (

    <div className={classes.root} >

      <Grid container spacing={2} padding={1} justifyContent="center" marginBottom={3}>

        <Grid item xs={12} justifyContent="center" textAlign="center">
          <Intro />
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
          <LosRemansos />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
          <NonoCentro />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
          <MuseoRocsen />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
          <Laberinto />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
          <PasoDeLasTropas />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
          <MinaClavero />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
          <NidoDelAguila />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
          <ValleEncantado />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
          <PuentesColgantes />
        </Grid>

      </Grid>
    </div>
  )
}
