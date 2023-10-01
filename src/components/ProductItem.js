import React from 'react';
import styled from 'styled-components';
import { Image } from '../common/Slider';
import RateStar from '../common/RateStar';

const CardProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    position: relative;
    margin-right: 15px;
`
const TagDiscount = styled.div`
    position: absolute;
    left: 1rem;
    top: .5rem;
`

const ContainerImage = styled.div`
    border-radius: 0.25rem;
    background: var(--Secondary, #F5F5F5);
    overflow: hidden;
    width: 100%;
    height: 180px;
`

const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .2rem;
`

const ProductNameStyle = styled.div`
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
`

const PriceStyle = styled.span`
    color: var(--Secondary-2, #DB4444);
    /* Title/16PX Medium */
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
`

const PriceDiscountStyle = styled.span`
    color: var(--Button, #000);
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    text-decoration-line: strikethrough;
    opacity: 0.5;
`

const CardProduct = ({ product }) => {
    return <CardProductWrapper className='col-4'>
        <TagDiscount className='label label-danger'>40%</TagDiscount>
        <ContainerImage>
            <Image src="https://images.pexels.com/photos/9842750/pexels-photo-9842750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </ContainerImage>
        <CardFooter>
            <ProductNameStyle>HAVIT HV-G92 Gamepad</ProductNameStyle>
            <div className='d-flex'>
                <PriceStyle>$120</PriceStyle>
                <PriceDiscountStyle>$160</PriceDiscountStyle>
            </div>
            <RateStar number={5} />
        </CardFooter>
    </CardProductWrapper>
};

export default CardProduct;