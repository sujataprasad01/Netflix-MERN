import React from 'react'
import background from '../assests/login.jpg';
import styled from 'styled-components';
function BackgroundImage() {
  return (
    <Container>
        <img src={background} alt='background'></img>
    </Container>
  )
}
const Container=styled.div``;
export default BackgroundImage
