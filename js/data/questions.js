import songs from './songs.js';

export default [
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[1].src,
    options: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[1].artist
  },
  {
    type: `genre`,
    title: `Выберите рок треки`,
    options: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: [songs[3].name]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[2].src,
    options: [songs[0], songs[2], songs[1]],
    correctAnswer: songs[2].artist
  },
  {
    type: `genre`,
    title: `Выберите R&B треки`,
    options: [songs[0], songs[3], songs[2], songs[5]],
    correctAnswer: [songs[3].name]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[3].src,
    options: [songs[0], songs[1], songs[3]],
    correctAnswer: songs[1].artist
  },
  {
    type: `genre`,
    title: `Выберите Pop треки`,
    options: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: [songs[3].name]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[4].src,
    options: [songs[4], songs[5], songs[2]],
    correctAnswer: songs[5].artist
  },
  {
    type: `genre`,
    title: `Выберите Electronic треки`,
    options: [songs[1], songs[3], songs[2], songs[5]],
    correctAnswer: [songs[3].name]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[5].src,
    options: [songs[3], songs[5], songs[0]],
    correctAnswer: songs[5].artist
  },
  {
    type: `genre`,
    title: `Выберите Jazz треки`,
    options: [songs[0], songs[3], songs[2], songs[5]],
    correctAnswer: [songs[3].name]
  },
];
