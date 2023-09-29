import axios from 'axios';
import { useEffect } from 'react';
import Slider from '@/common/Slider';
import Sidebar from '@/components/Layout/Sidebar';
import styled from 'styled-components';
const SectionHeader = styled.div`
    display: flex;
`;
const SectionContent = styled.div`

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

        useEffect(()=>{
            // getVideo();
        }, [])
        
    return (
        <div className='home-page'>
            <SectionHeader className='section-header container-fuild'>
                <Slider/>
            </SectionHeader>
            
        </div>
    );
}

export default Home;
