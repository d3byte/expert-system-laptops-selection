import {QuestionInterface} from '../../../share/interfaces/question.interface';

export const questions: QuestionInterface[] = [
  {
    title: 'Для каких целей вам нужен ноутбук?',
    answers: [
      {
        text: 'Игры',
        scaleIncrement: ['videoMemory'],
      },
      {
        text: 'Работа над расчетами, моделирование',
        scaleIncrement: ['processor', 'coresAmount', 'frequency'],
      },
      {
        text: 'Длительные поездки/повседневное использование в разных местах',
        scaleIncrement: ['workTime'],
      },
      {
        text: 'Для повседневного использования в разных местах',
        scaleIncrement: ['weight'],
      },
      {
        text: 'Монтаж, дизайн, программирование (качество + размер)',
        scaleIncrement: ['inch', 'videoMemory'],
      },
    ],
  },
  {
    title: 'Что бы вы поставили во главу угла при выборе модели ноутбука?',
    answers: [
      {
        text: 'Цена',
        scaleIncrement: ['price'],
      },
      {
        text: 'Производительность',
        scaleIncrement: ['processor', 'coresAmount', 'frequency', 'videoMemory'],
      },
      {
        text: 'Эргономика',
        scaleIncrement: ['weight'],
      },
      {
        text: 'Заряд батареи',
        scaleIncrement: ['workTime'],
      },
      {
        text: 'Графика',
        scaleIncrement: ['videoMemory'],
      },
      {
        text: 'Ресурсоемкие приложения',
        scaleIncrement: ['memorySpace', 'frequency', 'coresAmount', 'ram'],
      },
      {
        text: 'Качество изображения',
        scaleIncrement: ['inch'],
      },
    ],
  },
  {
    title: 'Выберите из этих элементов самое важное для вас',
    answers: [
      {
        text: 'Хорошее качество видео и заряд батареи ',
        scaleIncrement: ['workTime', 'inch'],
      },
      {
        text: 'Важно то, чтобы ноутбук позволял одновременно работать с несколькими приложениями',
        scaleIncrement: ['coresAmount', 'frequency', 'ram'],
      },
      {
        text: 'Важно, чтобы позволял запускать текущее поколение игр. ',
        scaleIncrement: ['videoMemory'],
      },
      {
        text: 'Наиболее приоритетно удобство использования, легкое строение корпуса',
        scaleIncrement: ['weight'],
      },
    ],
  },
  {
    title: 'Где планируете использовать ноутбук чаще всего?',
    answers: [
      {
        text: 'Дома',
        scaleIncrement: ['memorySpace'],
      },
      {
        text: 'В поездках',
        scaleIncrement: ['weight', 'workTime'],
      },
      {
        text: 'В офисе',
        scaleIncrement: ['frequency', 'processor'],
      },
    ],
  },
  {
    title: 'Область ваших интересов скорее лежит в:',
    answers: [
      {
        text: 'Дизайн/разработка/моделирование/видео-монтаж',
        scaleIncrement: ['processor', 'coresAmount', 'frequency'],
      },
      {
        text: 'Современных играх',
        scaleIncrement: ['ram', 'videoMemory'],
      },
      {
        text: 'Эффективной работе с офисными приложениями',
        scaleIncrement: ['ram', 'frequency'],
      },
    ],
  },
  {
    title: 'Свободное время, вы бы скорее провели',
    answers: [
      {
        text: 'Смотря фильмы',
        scaleIncrement: ['inch'],
      },
      {
        text: 'Изучая что-то новое',
        scaleIncrement: ['ram', 'frequency'],
      },
      {
        text: 'Отправился бы в поездку',
        scaleIncrement: ['workTime', 'weight'],
      },
    ],
  }
];
