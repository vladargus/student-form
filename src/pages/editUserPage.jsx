import React from 'react'
import { useParams } from 'react-router-dom'
import EditForm from '../components/form/editForm'
import CreateForm from '../components/form/createForm'

const EditUserPage = () => {
  const { type } = useParams()

  return <div>{type === 'edit' ? <EditForm /> : <CreateForm />}</div>
}

export default EditUserPage
