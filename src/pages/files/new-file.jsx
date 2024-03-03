import Button from '@/components/button'
import Form from '@/components/form'
import FormBody from '@/components/form/form-body'
import FormField from '@/components/form/form-field'
import FormFooter from '@/components/form/form-footer'
import FormHeader from '@/components/form/form-header'
import { fileCreated } from '@/services/data-service'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function CreateNewFilePage() {
  const [name, setName] = useState('untitled')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const createFile = useCallback(async () => {
    await dispatch(fileCreated({ id: '/' + name, name }))
    navigate('/')
  }, [navigate, dispatch, name])

  return (
    <Form className="vertical">
      <FormHeader title="Create New File" />
      <FormBody tabable={true}>
        <FormField
          label="File Name"
          dataType="text"
          value={name}
          onChange={setName}
        />
      </FormBody>
      <FormFooter>
        <Button
          className="primary"
          label="Create"
          icon="Check"
          onClick={createFile}
        />
      </FormFooter>
    </Form>
  )
}
