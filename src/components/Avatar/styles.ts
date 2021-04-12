import styled from 'styled-components';
import {ImgHTMLAttributes} from 'react';

type ImgProps = ImgHTMLAttributes<HTMLImageElement>;

interface ImageProps extends ImgProps {
  radius: number;
}

export const Img = styled.img<ImageProps>`
  background: none;
  border-radius: ${props => props.radius}%;
`;
