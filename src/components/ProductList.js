import React, { useState } from 'react';
import styled from 'styled-components';
import CardProduct from '@/common/ProductCard';

const ProductsWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const ProductsContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductList = ({ products }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = React.createRef();

  const scrollBy = (scrollOffset) => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;
    const maxScroll = scrollWidth - containerWidth;

    let newPosition = scrollPosition + scrollOffset;

    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > maxScroll) {
      newPosition = maxScroll;
    }

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });

    setScrollPosition(newPosition);
  };

  return (
    <div>
      <ProductsWrapper>
        <Button onClick={() => scrollBy(-300)}>Previous</Button>
        <div ref={containerRef}>
          <ProductsContainer>
            {products.map((product, index) => (
              <CardProduct key={index} product={product} />
            ))}
          </ProductsContainer>
        </div>
        <Button onClick={() => scrollBy(300)}>Next</Button>
      </ProductsWrapper>
    </div>
  );
};

export default ProductList;
