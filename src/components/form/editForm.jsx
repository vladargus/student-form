import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import TextField from '../textField'
import { validationScheme } from './validationScheme'
import { validate } from '../../utils/validator'

const EditForm = () => {
  const student = JSON.parse(localStorage.getItem('student'))

  const [values, setValues] = useState({
    name: student.name,
    surname: student.surname,
    birthYear: student.birthYear,
    email: student.email,
    portfolio: student.portfolio,
  })

  const history = useHistory()

  const [errors, setErrors] = useState({})

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = e => {
    e.preventDefault()
    if (isValid) {
      console.log('Отредактировано!')
      localStorage.setItem('student', JSON.stringify(values))
      history.push(`/`)
    }
  }

  const handleChange = e => {
    const { value, name } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    const errors = validate(values, validationScheme)
    setErrors(errors)
  }, [values])

  return (
    <>
      <h1>Редактировать</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id='name'
          name='name'
          label='Имя'
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          id='surname'
          name='surname'
          label='Фамилия'
          value={values.surname}
          onChange={handleChange}
          error={errors.surname}
        />
        <TextField
          type='number'
          id='birthYear'
          name='birthYear'
          label='Год рождения'
          value={values.birthYear}
          onChange={handleChange}
          error={errors.birthYear}
        />
        <TextField
          id='email'
          name='email'
          label='Электронная почта'
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          id='portfolio'
          name='portfolio'
          label='Портфолио'
          value={values.portfolio}
          onChange={handleChange}
          error={errors.portfolio}
        />
        <Link to='/' className='btn btn-secondary me-2'>
          Назад
        </Link>
        <button className='btn btn-primary' type='submit' disabled={!isValid}>
          Обновить
        </button>
      </form>
    </>
  )
}

export default EditForm
