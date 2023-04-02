import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../textField'
import { validationScheme } from './validationScheme'
import { validate } from '../../utils/validator'
import Modal from 'react-bootstrap/Modal'

const CreateForm = () => {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    birthYear: '',
    email: '',
    portfolio: '',
  })

  const [modalShow, setModalShow] = useState(false)
  const handleClose = () => setModalShow(false)

  const [errors, setErrors] = useState({})

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = e => {
    e.preventDefault()
    if (isValid) {
      console.log('Обновлено!')
      localStorage.setItem('student', JSON.stringify(values))
      setModalShow(!modalShow)
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
      <h1>Создать</h1>
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
        <button className='btn btn-primary' type='submit' disabled={!isValid}>
          Создать
        </button>
      </form>
      <Modal show={modalShow} onHide={handleClose} centered>
        <Modal.Body>Обновлено!</Modal.Body>
        <Modal.Footer>
          <Link to='/'>Close</Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateForm
