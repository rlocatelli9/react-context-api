import React from 'react';

import { Container, Content } from './styles';

import Sidebar from '../Sidebar';

const Main: React.FC = () => {
  return (
    <Container>
        <Sidebar />
        <Content>
          <h1>Content</h1>
          <p className="col-wide">
            É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
            cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos
            reafirmam que o lobo cinzento é ancestral do cão doméstico
          </p>

          <img src="https://i.pinimg.com/originals/01/3d/67/013d67a83447c3f750f61018ebbc30cf.jpg" alt="Wolf 1" className="image1" />

          <p className="featured">
            É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
            cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos.
          </p>

          <img src="https://i.pinimg.com/originals/01/3d/67/013d67a83447c3f750f61018ebbc30cf.jpg" alt="Wolf 2" className="image2" />

          <p>
            O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude, como previsto pela teoria de Christian Bergmann. Em geral,
            a altura, medida a partir dos ombros, varia de 60 a 95 centímetros.
          </p>

          <p>
            O peso varia geograficamente. Em média, os lobos europeus pesam 38,5 kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes, 25 kg.[7] Embora raros, lobos com mais de
            77 kg foram encontrados no Alasca, Canadá,[8] e na antiga União Soviética.
          </p>

          <blockquote className="mention col-wide" >
            <p>“Há algo no uivar do lobo que tira um homem do aqui e agora e o transporta para uma floresta da mente.”</p>
          </blockquote>

          <ul className="attributes">
            <li>Surgiu: 12.000 anos</li>
            <li>Tipo: Mamífero</li>
            <li>Idade Média: 13 anos</li>
            <li>Macho adulto: 80kg</li>
            <li>Fêmea adulta: 55kg</li>
            <li>Família: Lupus</li>
          </ul>
        </Content>
    </Container>
  )
}

export default Main;
