const PICTURES_COUNT = 25;
const AVATAR_COUNT = 6;

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const commentLines = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const descriptions = [
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

const names = ['Михаил', 'Мага', 'Дима', 'Мария', 'Саша', 'Елена'];

const getRandomInRange = (min, max) => {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);
  return (max <= min || min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number')
    ? NaN
    : Math.floor(Math.random() * ((maxRounded - minRounded + 1)) + minRounded);
};

getRandomInRange();


const checkStringLength = (string, length) => string.length <= length;


const getRandomArrayElement = (array) =>
  array[getRandomInRange(0, array.length - 1)];

const createMessage = () =>
  Array.from({ length: getRandomInRange(1, 2) }, () =>
    getRandomArrayElement(commentLines)
  ).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInRange(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInRange(LikesCount.MIN, LikesCount.MAX),
  Comments: Array.from(
    { length: getRandomInRange(0, 20) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPictures = () =>
  Array.from({ length: PICTURES_COUNT }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

checkStringLength('', 140);
getPictures();
