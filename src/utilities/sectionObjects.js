import evolutionaryAlgorithmsImg from '../assets/sectionImgs/statue.png';
import financeImg from '../assets/sectionImgs/dogs.png';
import logosImg from '../assets/sectionImgs/whale.png';

const sectionObjects = [
  {
    id: "evolutionaryalgorithms",
    title: "Evolutionary Algorithms",
    path: "/section/evolutionaryalgorithms",
    image: evolutionaryAlgorithmsImg,
    blogs: [
      {
        id: "genetic-algorithms",
        title: "Genetic Algorithms",
        content: 'EvolutionaryAlgorithms/test.md'
      },
      {
        id: "genetic-algorithms2",
        title: "Genetic Algorithms2",
        content: 'EvolutionaryAlgorithms/test.md'
      },
      {
        id: "genetic-algorithms3",
        title: "Genetic Algorithms3",
        content: 'EvolutionaryAlgorithms/test.md'
      },
    ]
  },
  {
    id: "finance",
    title: "Finance",
    path: "/section/finance",
    image: financeImg,
    blogs: [
      {
        id: "intro-to-stock-markets",
        title: "Introduction to Stock Markets",
        content: 'Finance/intro-to-stock-markets.md'
      },
    ]
  },
  {
    id: "logos",
    title: "Logos",
    path: "/section/logos",
    image: logosImg,
    blogs: [
      {
        id: "logo-design-principles",
        title: "Logo Design Principles",
        content: 'Logos/logo-design-principles.md'
      },
    ]
  },
];

export default sectionObjects;