import React from 'react'
import styled from 'styled-components'
function NotAvailabel() {
  return (
    <Containerrr>
    <h1 >No Movies availabel for selected genres</h1>
    </Containerrr>
  )
}

export default NotAvailabel

const Containerrr=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;