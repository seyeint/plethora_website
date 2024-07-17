import evolutionaryAlgorithmsImg from '../assets/sectionImgs/statue.png';
import financeImg from '../assets/sectionImgs/dogs.png';
import logosImg from '../assets/sectionImgs/whale.png';
import deepLearningImg from '../assets/sectionImgs/nns.jpg';
import aestheticsImg from '../assets/sectionImgs/hmm.jpg';
import praedictioImg from '../assets/sectionImgs/next.jpg';

const sectionObjects = [
  {
    id: "evolutionaryalgorithms",
    title: "Evolutionary Algorithms",
    path: "/section/evolutionaryalgorithms",
    image: evolutionaryAlgorithmsImg,
    blogs: [
      {
        id: "intro_ec",
        title: "Introduction",
        content: 'EvolutionaryAlgorithms/intro.md'
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
        id: "intro_finance",
        title: "Introduction",
        content: 'Finance/intro.md'
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
  {
    id: "deeplearning",
    title: "Deep Learning",
    path: "/section/deeplearning",
    image: deepLearningImg,
    blogs: [
      {
        id: "why-not-dl",
        title: "Why not Deep Learning?",
        content: 'DeepLearning/whynotdl.md'
      },
    ]
  },
  {
    id: "aesthetics",
    title: "Aesthetics",
    path: "/section/aesthetics",
    image: aestheticsImg,
    blogs: [
      {
        id: "principles-of-aesthetics",
        title: "Principles of Aesthetics",
        content: 'Aesthetics/principles-of-aesthetics.md'
      },
    ]
  },
  {
    id: "praedictio",
    title: "Prædictio",
    path: "/section/praedictio",
    image: praedictioImg,
    blogs: [
      {
        id: "intro-to-praedictio",
        title: "Introduction to Prædictio",
        content: 'Praedictio/intro-to-praedictio.md'
      },
    ]
  },
];

export default sectionObjects;