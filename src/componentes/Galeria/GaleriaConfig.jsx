import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//import '../../Imagenes/Un-dormitorio/1.1.JPG';
//import '../../Imagenes/Un-dormitorio/1.2.JPG';
//import '../../Imagenes/Un-dormitorio/1.3.JPG';
//import '../../Imagenes/Un-dormitorio/1.4.JPG';
//import '../../Imagenes/Parque/image.png';



var itemData = [
    {
        img: 'Logo.png',
        title: "prueba"
    },
    
    {
        img: 'Logo.png',
        title: "una-foto"
    },
    {
        img: 'Logo.png',
        title: "otra-foto"
    },
    {
        img: 'Logo.png',
        title: "una-foto-mas"
    },
    {
        img: 'Logo.png',
        title: "una-foto-4"
    }

]



const Imagenes = () => {

    return (

        <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=161&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>

    );
};

export default Imagenes;