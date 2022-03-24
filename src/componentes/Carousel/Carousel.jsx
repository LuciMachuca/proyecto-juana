import React, { useState } from 'react';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { Arrow, Container, Image, ImageComen, ImgContainer, InfoContainer, Slide, Wrapper } from './Carousel.elements';
import { sliderItem } from './dataSlider';


function Carousel() {
    const [slideIndex, setSlideIndex] = useState(0)// ESTADOS LOCALES CON EL SETEO EN 0

    function handleClick(direction){
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 5 ? slideIndex +1 : 0)
        }
    }
  return (

    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {
                sliderItem.map((item) => (
                    <Slide>
                        <ImgContainer>
                            <Image src={item.imgP} />
                        </ImgContainer>

                        <InfoContainer>
                            <ImageComen src={item.comen} />
                        </InfoContainer>
                    </Slide>
                ))
            }

            

        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>



  )
  /* return (
    <div>
        esto es el slider
    </div>
  ) */
}

export default Carousel