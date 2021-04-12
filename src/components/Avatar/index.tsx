import React, {ImgHTMLAttributes} from 'react';

import { Img } from './styles'

type ImgProps = ImgHTMLAttributes<HTMLImageElement>;

interface Props extends ImgProps {
  radius: number;
  sizes ?: string;
}

const Avatar: React.FC<Props> = ({children, src, sizes, radius,...restProps}) => {

  return <Img src={src} sizes={sizes} radius={radius} {...restProps} alt="Profile"/>
}

export default Avatar;
