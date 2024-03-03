import React, { useCallback } from 'react'
import Button from '@/components/button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { downloadJSON, readJSONFile } from '@/services/file-service'
import { dataImported } from '@/services/data-service'
import moment from 'moment'

import './configuration.scss'

export default function ConfigurationPage() {
  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const exportData = useCallback(
    () =>
      downloadJSON(
        { taxonomy: data.taxonomy },
        moment(new Date()).format('YYYY MM-DD_HHmm') + '.cuneiform'
      ),
    [data]
  )

  const importData = useCallback(async () => {
    const data = await readJSONFile('.cuneiform')

    dispatch(dataImported(data))
    navigate('/')
  }, [dispatch, dataImported, navigate])

  return (
    <div className="configuration-page">
      <section>
        <h1>
          <Link to="/">
            <Button className="icon" icon="ArrowLeft" />
          </Link>
          Data Synchronization
        </h1>
        <footer>
          <Button
            icon="CloudArrowDown"
            label="Import data"
            onClick={importData}
          />
          <Button
            icon="CloudArrowUp"
            label="Export data"
            onClick={exportData}
          />
          <Button icon="Cloud" label="Could Sync" disabled={true} />
        </footer>
      </section>
    </div>
  )
}
