import React from 'react'
import styled from 'styled-components'


const ContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5rem;
`
const ColumnStyled = styled.div`

`

export default function Footer() {
  return (
    <footer className='footer'>
        <ContainerStyled>
            <ColumnStyled>
                <h2>Logo</h2>
                <span>Subcribe</span>
                <span>Get 10% off your list order</span>
            </ColumnStyled>
            <ColumnStyled>
                <h2>Logo</h2>
                <span>Subcribe</span>
                <span>Get 10% off your list order</span>
            </ColumnStyled>
            <ColumnStyled>
                <h2>Logo</h2>
                <span>Subcribe</span>
                <span>Get 10% off your list order</span>
            </ColumnStyled>
        </ContainerStyled>
    </footer>
  )
}
