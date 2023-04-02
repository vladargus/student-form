export const validationScheme = {
  name: {
    isRequired: {
      message: 'Поле "Имя" обязательно для заполнения',
    },
  },
  surname: {
    isRequired: {
      message: 'Поле "Фамилия" обязательно для заполнения',
    },
  },
  birthYear: {
    isRequired: {
      message: 'Поле "Год рождения" обязательно для заполнения',
    },
    isBirthYear: {
      message: 'Поле "Год рождения" не корректно',
    },
  },
  email: {
    isRequired: {
      message: 'Поле "Электронная почта" обязательно для заполнения',
    },
    isEmail: {
      message: 'Поле "Электронная почта" не корректно',
    },
  },
  portfolio: {
    isRequired: {
      message: 'Поле "Портфолио" обязательно для заполнения',
    },
    isUrl: {
      message: 'Поле "Портфолио" должно быть ссылкой',
    },
  },
}
