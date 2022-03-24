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





  export function LosRemansos() {
    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="200"
          image={Remansos}
          alt="Balneario Los Remansos"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Los Remansos - 500 metros
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A sólo 2 km del centro de Nono, se encuentra sobre el Río Chico éste balneario natural 
          formado por profundas ollas de agua tibia flanqueadas por la sombra de los sauces.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{color: '#534340'}} >Cómo Llegar</Button>
        </CardActions>
      </Card>
    );
  }

  export function NonoCentro() {
    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="200"
          image={Centro}
          alt="Nono Centro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nono CENTRO - 2 km
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Por su ubicación, conectividad, diversidad y calidad en sus servicios es considerado 
          centro de la región, además de ser, históricamente, el pueblo más antiguo del Valle. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button target={'_blank'} href="https://www.nonoturismo.gob.ar" style={{color: '#534340'}} size="small">Sitio Web</Button>
          <Button size="small"style={{color: '#534340'}}  >Cómo Llegar</Button>
        </CardActions>
      </Card>
    );
  }

  export function MuseoRocsen() {
    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="200"
          image={Rocsen}
          alt="Museo Rocsen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Museo Rocsen - 3 km
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fundado en 1969 y con una exhibición de más de 60.000 piezas de todo el mundo, 
          el museo resume la evolución humana en toda su extensión.
          </Typography>
        </CardContent>
        <CardActions>
          <Button target={'_blank'} href="https://www.museorocsen.org" size="small" style={{color: '#534340'}} >Sitio Web</Button>
          <Button size="small" style={{color: '#534340'}} >Cómo Llegar</Button>
        </CardActions>
      </Card>
    );
  }

export function Laberinto() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="200"
        image={Lab}
        alt="Laberinto Nono"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Laberinto Nono - 5 km
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Es un centro de juego y entretenimiento con 6 laberintos, incluido uno de 900 metros cuadrados, 
        ofrece desafío y diversión para todas las edades.
        </Typography>
      </CardContent>
      <CardActions>
        <Button target={'_blank'} href="http://www.laberintodenono.com.ar" size="small" style={{color: '#534340'}} >Sitio Web</Button>
        <Button size="small" style={{color: '#534340'}} >Cómo Llegar</Button>
      </CardActions>
    </Card>
  );
}

export function PasoDeLasTropas() {
    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="200"
          image={PasoTropas}
          alt="Paso De Las Tropas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Paso de Las Tropas - 5,6 km
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sobre el río Chico, éste balneario ofrece un sin número de ollas naturales y 
          un paisaje tranquilo entre cerros y vegetación autóctona.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{color: '#534340'}} >Cómo Llegar</Button>
        </CardActions>
      </Card>
    );
  }

  export function MinaClavero() {
    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="200"
          image={Mina}
          alt="Mina Clavero"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mina Clavero - 10 km
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Pueblo que cautiva por sus inigualables ríos, balnearios y ollas naturales. 
          Es el centro turístico del Valle de Traslasierra. Elegido en 2019 una de las “siete maravillas naturales de la Argentina”.
          </Typography>
        </CardContent>
        <CardActions>
          <Button target={'_blank'} href="http://www.minaclavero.gov.ar" size="small" style={{color: '#534340'}} >Sitio Web</Button>
          <Button size="small" style={{color: '#534340'}} >Cómo Llegar</Button>
        </CardActions>
      </Card>
    );
  }


  export function NidoDelAguila() {
    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="200"
          image={NidoAguila}
          alt="Nido Del Aguila"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Nido Del Aguila - 11 km
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Este balneario ofrece una pileta natural muy profunda, con sectores que superan 
          los 6 metros de profundidad, que lo convierte en el lugar ideal para clavadistas.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{color: '#534340'}} >Cómo Llegar</Button>
        </CardActions>
      </Card>
    );
  }

 

  export function ValleEncantado() {
    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="200"
          image={VaEncantado}
          alt="Valle Encantado"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Valle Encantado - 12 km
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Rodeado de bosque autóctono y montañas en todas las direcciones, 
          éste parque ofrece una verdadera aventura acuática!
          </Typography>
        </CardContent>
        <CardActions>
          <Button target={'_blank'} href="https://www.valleencantado.com.ar" size="small" style={{color: '#534340'}} >Sitio Web</Button>
          <Button size="small" style={{color: '#534340'}} >Cómo Llegar</Button>
        </CardActions>
      </Card>
    );
  }

  export function PuentesColgantes() {
    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="200"
          image={PtesColgantes}
          alt="Puentes Colgantes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Puentes Colgantes - 98 km
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Un recorrido que muestra 
          las proezas de la ingeniería vial del siglo pasado, entre curvas y pendientes, 
           se encuentran generosas panorámicas de los valles.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{color: '#534340'}} >Cómo Llegar</Button>
        </CardActions>
      </Card>
    );
  }