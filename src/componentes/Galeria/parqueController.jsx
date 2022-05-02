import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import parque from '../../Imagenes/Parque/ParqueConfig.jsx';
import Box from '@mui/material/Box';




const Parque = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (

        <div>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >

                <ImageList xl={{ width: 700, height: 500 }} variant="woven" cols={1} gap={12}>

                    {parque.map((item) => (
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
            </Box>

            <Box sx={{ flexGrow: 9, display: { xs: 'none', md: 'flex' } }}>

                <ImageList xs={{ width: 400, height: 300 }} variant="woven" cols={3} gap={12}>

                    {parque.map((item) => (
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
            </Box>

        </div>

    );
};

export default Parque;