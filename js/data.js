import {getRandomInRange, getRandomArrayElement} from './util.js';

const PICTURES_COUNT = 25;
const AVATARS_COUNT = 6;

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const COMMENT_LENGTH = 15;

const COMMENT_LINES = [
  'Отличная фотография!',
  'Нет ничего дороже воспоминаний. Твои кадры – главный вклад в них!',
  'Анджелина Джоли нервно курит в стороне от завести!',
  'Ну в нашем селе и то красивее подача блюд.',
  'Ну вот... опять клаву слюной закапал!',
  'Браво, фотографу! Ухватил и сохранил замечательный кадр. Мне нравится, как все получились.',
];

const DESCRIPTIONS = [
  'Летний отдых на юге. #Астрахань #жара #лето',
  'Вайя, что за красота! #природа #отдых #chill #nature',
  'Здесь очень необычная подача блюда, и при этом безумно вкусная. #вкуснаяеда #food',
  'Вот с такой красавицой девушкой сегодня познакомился! #ДевочкаОгонь #gorgeous',
  'Прекрасный вид с отеля. #КрасивыйВид #hotel',
  'Хороший отдых с друзьями! #Друзья #ЦениДрузей #friend #home',
  'Вот это тачка! #wow #car',
  'Где купить такую обувь???',
  '#fun #party #cool',
  'Отлично',
];

const NAMES = ['Михаил', 'Мага', 'Дима', 'Мария', 'Саша', 'Елена'];

const createMessage = () =>
  Array.from({ length: getRandomInRange(1, 2) }, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInRange(1, AVATARS_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInRange(LikesCount.MIN, LikesCount.MAX),
  comments: Array.from(
    { length: getRandomInRange(0, COMMENT_LENGTH) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPictures = () =>
  Array.from({ length: PICTURES_COUNT }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export {getPictures};
