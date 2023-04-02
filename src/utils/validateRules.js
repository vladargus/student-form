/* eslint-disable import/no-anonymous-default-export */
export default {
  isRequired: value => Boolean(value.trim()),
  isBirthYear: value => value >= 1900 && value < new Date().getFullYear(),
  isEmail: value => /^\S+@\S+\.\S+$/g.test(value),
  isUrl: value => /^https?:\/\/\S+\.\S+$/g.test(value),
}
