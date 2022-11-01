export interface CardProps {
  author: string;
  title: string;
  frase: string;
  imagem: string;
  imagemDescricao: string;
}

const cardData: Array<CardProps> = [
  {
    author: 'jamerson',
    title: 'Bem vindo growdevers',
    frase: 'oi mundo',
    imagem:
      'https://sm.ign.com/ign_br/news/o/obi-wan-ke/obi-wan-kenobi-first-look-at-darth-vader-revealed_hsrc.jpg',
    imagemDescricao: 'eu',
  },
  {
    author: 'MMCamargo',
    title: 'Segundo o MM',
    frase: 'Grid é melhor que flex',
    imagem:
      'https://www.hojeemdia.com.br/image/policy:1.711510.1628585960:1628585960/image.jpg?w=1280&',
    imagemDescricao: 'MM',
  },
  {
    author: 'Samir',
    title: ' O MM tá errado',
    frase: 'flex é melhor que Grid',
    imagem: '/assets/images/han-solo-main_a4c8ff79.jpeg',
    imagemDescricao: 'Samir',
  },
];

export default cardData;
