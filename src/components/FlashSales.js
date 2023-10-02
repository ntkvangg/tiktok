import React, { useRef, useState, useEffect } from 'react';
import HeaderCategory from '@/common/HeaderCategory';
import CardProduct from '@/common/ProductCard';
import styled from 'styled-components';
import { faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/common/FontAwesomeIcon";
import ProductList from './ProductList';

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

const ButtonIconStyle = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    .icon{
        color: #666666;
    }
    &:hover{
        .icon{
            color: #000;
        }
    }
`

const products = [
    {
      "id": 1,
      "name": "Product 1",
      "price": 49.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "image": "product1.jpg"
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 29.99,
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": "product2.jpg"
    },
    {
      "id": 3,
      "name": "Product 3",
      "price": 39.99,
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "product3.jpg"
    },
    {
      "id": 4,
      "name": "Product 4",
      "price": 59.99,
      "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "image": "product4.jpg"
    },
    {
      "id": 5,
      "name": "Product 5",
      "price": 19.99,
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "image": "product5.jpg"
    },
    {
      "id": 6,
      "name": "Product 6",
      "price": 69.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "image": "product6.jpg"
    },
    {
      "id": 7,
      "name": "Product 7",
      "price": 79.99,
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": "product7.jpg"
    },
    {
      "id": 8,
      "name": "Product 8",
      "price": 49.99,
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "product8.jpg"
    },
    {
      "id": 9,
      "name": "Product 9",
      "price": 39.99,
      "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "image": "product9.jpg"
    },
    {
      "id": 10,
      "name": "Product 10",
      "price": 29.99,
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "image": "product10.jpg"
    },
    {
      "id": 11,
      "name": "Product 11",
      "price": 59.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "image": "product11.jpg"
    },
    {
      "id": 12,
      "name": "Product 12",
      "price": 79.99,
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": "product12.jpg"
    },
    {
      "id": 13,
      "name": "Product 13",
      "price": 49.99,
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "image": "product13.jpg"
    },
    {
      "id": 14,
      "name": "Product 14",
      "price": 39.99,
      "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "image": "product14.jpg"
    },
    {
      "id": 15,
      "name": "Product 15",
      "price": 19.99,
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "image": "product15.jpg"
    },
    {
      "id": 16,
      "name": "Product 16",
      "price": 69.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "image": "product16.jpg"
    },
    {
      "id": 17,
      "name": "Product 17",
      "price": 79.99,
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": "product17.jpg"
    }
  ]

const ProductsWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const ProductsContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;
  

export default function FlashSales() {
    const containerRef = useRef(null);
    const productRef  = useRef(null);
    let currentIndex = 0;
    const [numSlides, setNumSlides] = useState(0);
    useEffect(() => {
        setNumSlides(containerRef?.current?.children?.length);
    }, []);

    const showSlide = (index) => {
        const translateX = index * productRef?.current?.offsetWidth;
        containerRef.current.style.transform = `translateX(-${translateX}px)`;
        
    };

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        } else {
            currentIndex = numSlides - 1;
            showSlide(currentIndex);
        }
    }

    const handleNextClick = () => {
        
        if (currentIndex < numSlides - 1) {
            currentIndex++;
            showSlide(currentIndex);
        } else {
            currentIndex = 0;
            showSlide(currentIndex);
        }
    };
  
    return (
        <WrapperFlashSalesStyle className='flash-salses'>
            <HeaderSectionStyle className='header'>
                <HeaderCategory label="Today's" title="Fash sales" />
                <ContainerButtons>
                    <ButtonIconStyle onClick={handlePrevClick}><Icon icon={faCircleArrowLeft} className="icon icon-left" /></ButtonIconStyle>
                    <ButtonIconStyle onClick={handleNextClick}><Icon icon={faCircleArrowRight} className="icon icon-right" /></ButtonIconStyle>
                </ContainerButtons>
            </HeaderSectionStyle>
            <WrapperProductStyle className='product-list'>
                <ProductsContainer ref={containerRef}>
                    {products.map((product, index) => (
                        <CardProduct product={product} key={index} ref={productRef}/>
                    ))}
                </ProductsContainer>
            </WrapperProductStyle>  
            <ButtonStyled className='btn btn-danger'>View All Products</ButtonStyled>
        </WrapperFlashSalesStyle>
    )
}
