import React from 'react'
import { Link } from 'react-router-dom'
import { getAge } from '../utils/getAge'

const MainPage = () => {
  const student = JSON.parse(localStorage.getItem('student'))

  return (
    <div>
      <h1>Карточка студента</h1>
      {!localStorage.getItem('student') ? (
        <>
          <p>Нет данных</p>
          <p>
            <Link className='btn btn-primary' to='/create'>
              Добавить
            </Link>
          </p>
        </>
      ) : (
        <>
          <p>
            <strong>Имя:</strong> {student.name}
          </p>
          <p>
            <strong>Фамилия:</strong> {student.surname}
          </p>
          <p>
            <strong>Год рождения:</strong> {student.birthYear} (
            {getAge(student.birthYear)})
          </p>
          <p>
            <strong>Электронная почта:</strong>{' '}
            <a href={'mailto:' + student.email}>{student.email}</a>
          </p>
          <p>
            <strong>Портфолио:</strong>{' '}
            <a href={student.portfolio}>{student.portfolio}</a>
          </p>
          <p>
            <Link className='btn btn-primary' to='/edit'>
              Редактировать
            </Link>
          </p>
        </>
      )}
    </div>
  )
}

export default MainPage
