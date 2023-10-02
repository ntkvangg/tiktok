import React from 'react';
import HeaderCategory from '@/common/HeaderCategory';
import CardProduct from '@/common/ProductCard';
import styled from 'styled-components';
import { HeaderSectionStyle } from "@/components/FlashSales"


const WrapperFlashSalesStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

const WrapperProductStyle = styled.div`
    display: flex;
    overflow: hidden;

`
export default function BestSellingProducts() {
    return (
        <WrapperFlashSalesStyle className='best-selling-products'>
            <HeaderSectionStyle>
                <HeaderCategory label="This Month" title="Best Selling Products" />
                <div>
                    <button className='btn btn-danger'>View All </button>
                </div>
            </HeaderSectionStyle>
            <WrapperProductStyle className='product-list'>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </WrapperProductStyle>
        </WrapperFlashSalesStyle>
    )
}
