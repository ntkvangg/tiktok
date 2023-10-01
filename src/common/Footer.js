import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    background-color: #000;
    color: #fff;
    padding: 1rem;
`

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
    <WrapperStyled className='footer'>
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
    </WrapperStyled>
  )
}
