import React from 'react';
import HeaderCategory from '@/common/HeaderCategory';
import CardProduct from '@/common/ProductCard';
import styled from 'styled-components';
import { HeaderSectionStyle, ContainerButtons, ButtonStyled } from "@/components/FlashSales"
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

export default function ExploreOurProduct() {
    return (
        <WrapperFlashSalesStyle className='best-selling-products'>
            <HeaderSectionStyle>
                <HeaderCategory label="Our Product" title="Explore Our Products" />
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
