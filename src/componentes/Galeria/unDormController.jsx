import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import un_dorm from '../../Imagenes/Un-dormitorio/unDormConfig.jsx';



const Un_Dormitorio = () => {

    return (

        <ImageList xl={{ width: 700, height: 500 }} variant="woven" cols={3} gap={12}>
            {un_dorm.map((item) => (
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
 export default Un_Dormitorio;


