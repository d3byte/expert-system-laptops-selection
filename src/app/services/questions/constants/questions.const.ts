import {QuestionInterface} from '../../../share/interfaces/question.interface';

export const questions: QuestionInterface[] = [
  {
    title: 'Для каких целей вам нужен ноутбук?',
    answers: [
      {
        text: 'Игры',
        scaleIncrement: ['gaming'],
      },
      {
        text: 'Работа над расчетами, моделироввание',
        scaleIncrement: ['performance'],
      },
      {
        text: 'Длительные поездки',
        scaleIncrement: ['energyEfficiency'],
      },
      {
        text: 'Для повседневного использования в разных местах',
        scaleIncrement: ['ergonomics'],
      },
    ],
  },
  {
    title: 'Что бы вы поставили во главу угла при выборе модели ноутбука?',
    answers: [
      {
        text: 'Производительность',
        scaleIncrement: ['performance'],
      },
      {
        text: 'Удобство использования',
        scaleIncrement: ['ergonomics'],
      },
      {
        text: 'Удобство переноса с собой',
        scaleIncrement: ['mobility'],
      },
      {
        text: 'Заряд батареи',
        scaleIncrement: ['energyEfficiency'],
      },
      {
        text: 'Графика',
        scaleIncrement: ['gaming'],
      },
    ],
  },
  {
    title: 'Выберите из этих элементов самое важное для вас',
    answers: [
      {
        text: 'Хорошее качество видео и заряд батареи ',
        scaleIncrement: ['energyEfficiency'],
      },
      {
        text: 'Важно то, чтобы ноутбук позволял одновременно работать с несколькими приложениями',
        scaleIncrement: ['performance'],
      },
      {
        text: 'Важно, чтобы позволял запускать текущее поколение игр. ',
        scaleIncrement: ['gaming'],
      },
      {
        text: 'Наиболее приоритетно удобство использования, легкое строение корпуса',
        scaleIncrement: ['ergonomics', 'mobility'],
      },
    ],
  },
  {
    title: 'Где планируете использовать ноутбук чаще всего?',
    answers: [
      {
        text: 'Дома',
        scaleIncrement: ['performance', 'ergonomics'],
      },
      {
        text: 'В поездках',
        scaleIncrement: ['mobility', 'energyEfficiency'],
      },
      {
        text: 'Важно, чтобы позволял запускать текущее поколение игр. ',
        scaleIncrement: ['gaming'],
      },
      {
        text: 'Наиболее приоритетно удобство использования, легкое строение корпуса',
        scaleIncrement: ['ergonomics', 'mobility'],
      },
    ],
  },
  {
    title: 'Область ваших интересов скорее лежит в:',
    answers: [
      {
        text: 'Работе по фрилансу',
        scaleIncrement: ['mobility', 'energyEfficiency'],
      },
      {
        text: 'Современных играх',
        scaleIncrement: ['gaming'],
      },
      {
        text: 'Эффективной работе с офисными приложениями',
        scaleIncrement: ['performance', 'ergonomics'],
      },
    ],
  },
  {
    title: 'Свободное время, вы бы скорее провели',
    answers: [
      {
        text: ' Играя во что-либо',
        scaleIncrement: ['gaming'],
      },
      {
        text: 'Изучая что-то новое',
        scaleIncrement: ['performance', 'ergonomics'],
      },
      {
        text: 'Отправился бы в поездку',
        scaleIncrement: ['mobility', 'energyEfficiency'],
      },
    ],
  }
];
