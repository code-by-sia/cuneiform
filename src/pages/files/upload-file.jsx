import Button from '@/components/button'
import Form from '@/components/form'
import FormBody from '@/components/form/form-body'
import FormField from '@/components/form/form-field'
import FormFooter from '@/components/form/form-footer'
import FormHeader from '@/components/form/form-header'
import { fileCreated } from '@/services/data-service'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function UploadNewFilePage() {
  const [value, setValue] = useState({ name: '', contents: '' })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createFile = useCallback(async () => {
    await dispatch(
      fileCreated(Object.assign({}, { id: '/' + value.name }, value))
    )
    navigate('/')
  }, [value, navigate, dispatch])

  return (
    <Form className="vertical">
      <FormHeader title="Upload New File" />
      <FormBody>
        <FormField
          label="Select a file:"
          dataType="file"
          value={value}
          onChange={setValue}
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
