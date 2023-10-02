import React from 'react';
import HeaderCategory from '@/common/HeaderCategory';
import CardProduct from '@/common/ProductCard';
import styled from 'styled-components';
import { faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/common/FontAwesomeIcon";

const WrapperFlashSalesStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

const WrapperProductStyle = styled.div`
    display: flex;
    overflow: hidden;

`
export const ButtonStyled = styled.button`
    color: var(--Text, #FAFAFA);
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    margin: 0 auto;
    margin-top: 2rem;
`

export const ContainerButtons = styled.div`
    display: flex;
    color: #666666;

    .icon{
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;    
    }
    .icon-left{
        margin-right: 10px;
    }

`

export const HeaderSectionStyle = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: end;
`

export default function FlashSales() {
    return (
        <WrapperFlashSalesStyle className='flash-salses'>
            <HeaderSectionStyle className='header'>
                <HeaderCategory label="Today's" title="Fash sales" />
                <ContainerButtons>
                    <Icon icon={faCircleArrowLeft} className="icon icon-left" />
                    <Icon icon={faCircleArrowRight} className="icon icon-right" />
                </ContainerButtons>
            </HeaderSectionStyle>
            <WrapperProductStyle className='product-list'>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </WrapperProductStyle>
            <ButtonStyled className='btn btn-danger'>View All Products</ButtonStyled>
        </WrapperFlashSalesStyle>
    )
}
