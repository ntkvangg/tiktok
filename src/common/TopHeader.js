import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    width: 100%;
    background-color: #000;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    font-size: 14px;
`
const TopHeader = () => {
    return <Wrapper>
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <a>Shop Now</a>
    </Wrapper>

};

export default TopHeader;