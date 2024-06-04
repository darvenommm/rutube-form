interface IField {
  name: string;
  title: string;
  start: number;
  end: number;
  texts?: string[];
}

export const fieldsNames = [
  'speed',
  'is-problem-solved',
  'specialist-language',
  'specialist-responsive',
  'specialist-competent',
  'recommendation',
];

export const formFields: IField[] = [
  {
    name: fieldsNames[0],
    title: 'Как быстро вы получили ответ от клиентского сервиса RUTUBE?*',
    start: 1,
    end: 3,
    texts: ['Быстрее, чем ожидал', 'Как и ожидал', 'Медленно, чем ожидал'],
  },
  {
    name: fieldsNames[1],
    title: 'Клиентский сервис RUTUBE помог в решении проблемы?*',
    start: 1,
    end: 5,
  },
  {
    name: fieldsNames[2],
    title: 'Специалист RUTUBE хорошо изъяснялся и владел языком?*',
    start: 1,
    end: 5,
  },
  {
    name: fieldsNames[3],
    title: 'Специалист RUTUBE был отзывчив?*',
    start: 1,
    end: 5,
  },
  {
    name: fieldsNames[4],
    title: 'Специалист RUTUBE был компетентен?*',
    start: 1,
    end: 5,
  },
  {
    name: fieldsNames[5],
    title:
      'Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу?*',
    start: 0,
    end: 10,
  },
];
