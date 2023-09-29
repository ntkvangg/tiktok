import styled from "styled-components";
import React from "react";
import Icon from "@/common/FontAwesomeIcon";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px; /* Set the height of the slider */
  overflow: hidden; /* Hide overflow for images that are larger than the container */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 0;
`;

const images = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/6023354/pexels-photo-6023354.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/6023354/pexels-photo-6023354.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const Slider = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <SliderContainer>
      <Image key={images[currentImage].id} src={images[currentImage].image} alt={`Image ${images[currentImage].id}`} />
      <PrevButton onClick={prevImage}><Icon icon={faChevronLeft}></Icon></PrevButton>
      <NextButton onClick={nextImage}><Icon icon={faChevronRight}></Icon></NextButton>
    </SliderContainer>
  );
};

export default Slider;
