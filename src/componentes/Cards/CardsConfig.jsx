import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// ----
import Lab from '../../Imagenes/Cards/Laberinto.jpg';
import Remansos from '../../Imagenes/Cards/LosRemansos.jpg';
import Mina from '../../Imagenes/Cards/MinaClavero.jpg';
import Rocsen from '../../Imagenes/Cards/MuseoRocsen.jpg';
import NidoAguila from '../../Imagenes/Cards/NidoDelAguila.jpg';
import Centro from '../../Imagenes/Cards/NonoCentro.jpg';
import PasoTropas from '../../Imagenes/Cards/PasoDeLasTropas.jpg';
import PtesColgantes from '../../Imagenes/Cards/PuentesColgantes.png';
import VaEncantado from '../../Imagenes/Cards/ValleEncantado.jpg';


import './Cards.css';



export function LosRemansos() {
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#F8F4F2" }}>
      <CardMedia
        component="img"
        height="200"
        image={Remansos}
        alt="Balneario Los Remansos"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#BB9981">
          Los Remansos - 500 metros
        </Typography>
        <Typography variant="body2" color="text.primary">
          A sólo 2 km del centro de Nono, se encuentra sobre el Río Chico éste balneario natural
          formado por profundas ollas de agua tibia flanqueadas por la sombra de los sauces.
        </Typography>
      </CardContent>

      <CardActions>
        <Button target={'_blank'}
          href="https://www.google.com/maps/dir/-31.798324,-64.9829048/San+Alberto,+C%C3%B3rdoba/@-31.7984988,-64.9834726,18.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x942d2edecdfde223:0x5cba13ed18c2a757!2m2!1d-64.9826915!2d-31.7982978"
          size="small" style={{ color: '#DBC9BD' }} >Cómo Llegar</Button>
      </CardActions>

    </Card>
  );
}

export function NonoCentro() {
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#F8F4F2" }}>
      <CardMedia
        component="img"
        height="200"
        image={Centro}
        alt="Nono Centro"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='#BB9981'>
          Nono CENTRO - 2 km
        </Typography>
        <Typography variant="body2" color="text.primary">
          Por su ubicación, conectividad, diversidad y calidad en sus servicios es considerado
          centro de la región, además de ser, históricamente, el pueblo más antiguo del Valle.
        </Typography>
      </CardContent>

      <CardActions>
        <Button target={'_blank'} href="https://www.nonoturismo.gob.ar"
          style={{ color: '#DBC9BD' }} size="small">Sitio Web</Button>

        <Button target={'_blank'}
          href="https://www.google.com/maps/place/Iglesia+San+Juan+Bautista/@-31.796994,-65.0224547,14z/data=!4m13!1m7!3m6!1s0x942d2f535d267349:0x9e1e7f01a046e8a9!2zTm9ubywgQ8OzcmRvYmE!3b1!8m2!3d-31.7973619!4d-65.0042739!3m4!1s0x942d28d50670acfd:0x2a63cb727157f71e!8m2!3d-31.79725!4d-65.0031333"
          size="small" style={{ color: '#DBC9BD' }}  >Cómo Llegar</Button>
      </CardActions>

    </Card>
  );
}

export function MuseoRocsen() {
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#F8F4F2" }}>
      <CardMedia
        component="img"
        height="200"
        image={Rocsen}
        alt="Museo Rocsen"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='#BB9981'>
          Museo Rocsen - 3 km
        </Typography>
        <Typography variant="body2" color="text.primary">
          Fundado en 1969 y con una exhibición de más de 60.000 piezas de todo el mundo,
          el museo resume la evolución humana en toda su extensión.<br />
        </Typography>
      </CardContent>

      <CardActions>
        <Button target={'_blank'} href="https://www.museorocsen.org"
          size="small" style={{ color: '#DBC9BD' }} >Sitio Web</Button>

        <Button target={'_blank'}
          href="https://www.google.com/maps/place/Museo+Rocsen/@-31.799595,-64.9587677,17z/data=!3m1!4b1!4m5!3m4!1s0x942d2ef9d0783977:0xd9764e49db56f5e0!8m2!3d-31.799595!4d-64.956579"
          size="small" style={{ color: '#DBC9BD' }} >Cómo Llegar</Button>
      </CardActions>

    </Card>
  );
}

export function Laberinto() {
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#F8F4F2" }}>
      <CardMedia
        component="img"
        height="200"
        image={Lab}
        alt="Laberinto Nono"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='#BB9981'>
          Laberinto Nono - 5 km
        </Typography>
        <Typography variant="body2" color="text.primary">
          Es un centro de juego y entretenimiento con 6 laberintos, incluido uno de 900 metros cuadrados,
          ofrece desafío y diversión para todas las edades.
        </Typography>
      </CardContent>

      <CardActions>
        <Button target={'_blank'}
          href="http://www.laberintodenono.com.ar"
          size="small" style={{ color: '#DBC9BD' }} >Sitio Web</Button>

        <Button target={'_blank'}
          href="https://www.google.com/maps/place/Laberinto+De+Nono/@-31.8195085,-65.0022355,17z/data=!3m1!4b1!4m5!3m4!1s0x942d2ecaa5ee92f1:0x6f8415422e79244a!8m2!3d-31.8195085!4d-65.0000468"
          size="small" style={{ color: '#DBC9BD' }} >Cómo Llegar</Button>
      </CardActions>

    </Card>
  );
}

export function PasoDeLasTropas() {
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#F8F4F2" }}>
      <CardMedia
        component="img"
        height="200"
        image={PasoTropas}
        alt="Paso De Las Tropas"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='#BB9981'>
          Paso de Las Tropas - 5,6 km
        </Typography>
        <Typography variant="body2" color="text.primary">
          Sobre el río Chico, éste balneario ofrece un sin número de ollas naturales y
          un paisaje tranquilo entre cerros y vegetación autóctona.
        </Typography>
      </CardContent>
      <CardActions>
        <Button target={'_blank'}
          href="https://www.google.com/maps/place/Balneario+Paso+de+Las+Tropas/@-31.8122344,-64.9558326,17z/data=!3m1!4b1!4m5!3m4!1s0x942d2e8a83307d6d:0xb2975b3853112ad2!8m2!3d-31.8122344!4d-64.9536439"
          size="small" style={{ color: '#DBC9BD' }} >Cómo Llegar</Button>
      </CardActions>

    </Card>
  );
}

export function MinaClavero() {
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#F8F4F2" }}>
      <CardMedia
        component="img"
        height="200"
        image={Mina}
        alt="Mina Clavero"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='#BB9981'>
          Mina Clavero - 10 km
        </Typography>
        <Typography variant="body2" color="text.primary">
          Pueblo que cautiva por sus inigualables ríos, balnearios y ollas naturales.
          Elegido en 2019 una de las “siete maravillas naturales de la Argentina”.
        </Typography>
      </CardContent>

      <CardActions>
        <Button target={'_blank'}
          href="http://www.minaclavero.gov.ar"
          size="small" style={{ color: '#DBC9BD' }} >Sitio Web</Button>

        <Button target={'_blank'}
          href="https://www.google.com/maps/place/Mina+Clavero,+C%C3%B3rdoba/@-31.7290295,-65.0287517,14z/data=!3m1!4b1!4m5!3m4!1s0x942d25d59048c4dd:0xa693b3400e45cb6c!8m2!3d-31.7282783!4d-65.0055595"
          size="small" style={{ color: '#DBC9BD' }} >Cómo Llegar</Button>
      </CardActions>

    </Card>
  );
}


export function NidoDelAguila() {
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#F8F4F2" }}>
      <CardMedia
        component="img"
        height="200"
        image={NidoAguila}
        alt="Nido Del Aguila"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='#BB9981'>
          Nido Del Aguila - 11 km
        </Typography>
        <Typography variant="body2" color="text.primary">
          Este balneario ofrece una pileta natural muy profunda, con sectores que superan
          los 6 metros de profundidad, que lo convierte en el lugar ideal para clavadistas.
        </Typography>
      </CardContent>

      <CardActions>
        <Button target={'_blank'}
          href="https://www.google.com/maps/place/Balneario+Nido+del+Aguila/@-31.7253821,-64.9946753,17z/data=!3m1!4b1!4m5!3m4!1s0x942d25dbae8c8703:0xa646ce71d9314c29!8m2!3d-31.7253821!4d-64.9924866"
          size="small" style={{ color: '#DBC9BD' }} >Cómo Llegar</Button>
      </CardActions>

    </Card>
  );
}



export function ValleEncantado() {
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#F8F4F2" }}>
      <CardMedia
        component="img"
        height="200"
        image={VaEncantado}
        alt="Valle Encantado"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='#BB9981'>
          Valle Encantado - 12 km
        </Typography>
        <Typography variant="body2" color="text.primary">
          Rodeado de bosque autóctono y montañas en todas las direcciones,
          éste parque ofrece una verdadera aventura acuática!
        </Typography>
      </CardContent>

      <CardActions>
        <Button target={'_blank'}
          href="https://www.valleencantado.com.ar"
          size="small" style={{ color: '#DBC9BD' }} >Sitio Web</Button>

        <Button target={'_blank'}
          href="https://www.google.com/maps/place/Valle+Encantado/@-31.862234,-64.9653037,17z/data=!3m1!4b1!4m5!3m4!1s0x942d25e058185915:0xc6d8dc24e66b5661!8m2!3d-31.862234!4d-64.963115"
          size="small" style={{ color: '#DBC9BD' }} >Cómo Llegar</Button>
      </CardActions>

    </Card>
  );
}

export function PuentesColgantes() {
  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#F8F4F2" }}>
      <CardMedia
        component="img"
        height="200"
        image={PtesColgantes}
        alt="Puentes Colgantes"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='#BB9981'>
          Puentes Colgantes - 98 km
        </Typography>
        <Typography variant="body2" color="text.primary">
          Un recorrido que muestra
          las proezas de la ingeniería vial del siglo pasado, entre curvas y pendientes,
          se encuentran generosas panorámicas de los valles.
        </Typography>
      </CardContent>

      <CardActions>
        <Button target={'_blank'}
          href="https://www.google.com/maps/place/Tercer+Puente+colgante/@-31.5666153,-64.7122903,17z/data=!3m1!4b1!4m5!3m4!1s0x942d407dfb515df1:0xccec8e1b7692c4a8!8m2!3d-31.5666199!4d-64.7101016"
          size="small" style={{ color: '#DBC9BD' }} >Cómo Llegar</Button>
      </CardActions>

    </Card>
  );
}

export function Intro() {
  return (
    <div>

      <div className='enunciado' >
        <p className='enun'>
          <strong className='comienzo1'>Cabañas Doña Juana  </strong> es un <strong>sueño familiar</strong>, un proyecto en plena expansión que inició en el año 2017 <br />
          con la inauguración de nuestras 2 primeras unidades.<br />
          Somos un complejo vacacional ubicado en <strong>Nono Traslasierra</strong>, una zona privilegiada
          por sus espectaculares vistas a las montañas,<br />  tranquilidad, flora y fauna silvestre.
        </p>

      </div>


      <div>
        <br />
        <h3 className='lugares'>Lugares de Interés para toda la Familia</h3>
        <hr className='linea1' />
      </div>

    </div>
  )
}