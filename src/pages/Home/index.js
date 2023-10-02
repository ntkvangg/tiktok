import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from '@/common/Slider';
import styled from 'styled-components';
import FlashSales from '@/components/FlashSales';
import BestSellingProducts from '@/components/BestSellingProducts';
import ExploreOurProduct from "@/components/ExploreOurProduct";
import CustomerService from '@/common/CustomerService';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import Icon from '@/common/FontAwesomeIcon';

const WrapperHomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

const ContainerButtonIcon = styled.button`
    position: fixed;
    right: 1rem;
    bottom: 8rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #DB4444;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 1000;
    transition: all .3s ease-in-out;
    color: #fff;
    padding: 0;
    &:hover{   
        transform: scale(1.1);
    }
`



function Home() {
    const [showTop, setShowTop] = useState(false);

    const handleScroll = () => {
        setShowTop(window.scrollY > 200) ;
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <WrapperHomeStyle className='home-page'>
            <section className='section-header container-fuild'>
                <Slider />
            </section>
            <section>
                <FlashSales />
            </section>
            <section>
                <BestSellingProducts/>
            </section>
            <section>
                <ExploreOurProduct/>
            </section>
            <section className='customer-service-section'>
                <CustomerService/>
            </section>
            
            { showTop ? <ContainerButtonIcon onClick={handleScrollToTop}>
                <Icon icon={faArrowCircleUp} className="icon fa-lg"/>
            </ContainerButtonIcon> : null}
        </WrapperHomeStyle>
    );
}

export default Home;
