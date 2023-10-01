import axios from 'axios';
import { useEffect } from 'react';
import Slider from '@/common/Slider';
import styled from 'styled-components';
import FlashSales from '@/components/FlashSales';
import BestSellingProducts from '@/components/BestSellingProducts';
import ExploreOurProduct from "@/components/ExploreOurProduct";

const WrapperHomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

function Home() {
    const getVideo = async () => {
        const axios = require('axios');

        const options = {
            params: {
                keyword: 'Lego Star Wars',
                page: '1',
                sortBy: 'best_match'
            },
            headers: {
                'X-RapidAPI-Key': '7421cfe6dbmshc4671e0572427d3p1a274ejsn7e8de1ae97b6',
                'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.get("https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword", options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // getVideo();
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

        </WrapperHomeStyle>
    );
}

export default Home;
