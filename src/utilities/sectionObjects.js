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
      {
        id: "thesis",
        title: "Thesis: Non-geometric pulse",
        content: 'EvolutionaryAlgorithms/Thesis.pdf'
      },
      {
        id: "scalableEC",
        title: "Scalable EC",
        content: 'EvolutionaryAlgorithms/scalable_ec.md'
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
      {
        id: "playbook",
        title: "Playbook",
        content: 'Finance/play_log.md'
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
        id: "intro_logos",
        title: "Introduction",
        content: 'Logos/intro.md'
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
      {
        id: "tools",
        title: "Selected quality resources",
        content: 'DeepLearning/resources.md'
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
        id: "aesthetics",
        title: "No_content_yet",
        content: 'Aesthetics/null.md'
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
        title: "No_content_yet",
        content: 'Praedictio/null.md'
      },
    ]
  },
];

export default sectionObjects;