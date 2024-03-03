import Button from '@/components/button'
import Action from '@/components/button/action'
import Stack from '@/components/container/stack'
import { Dynamic } from '@/components/dynamic'
import Header from '@/components/header'
import Line from '@/components/line'
import Selector from '@/components/selector'
import ToggleSidebarButton from '@/components/side-bar/toggle-sidebar'
import Spacer from '@/components/spacer'
import { fileDeleted, fileUpdated } from '@/services/data-service'
import listOf from '@/services/list'
import useQuery from '@/services/query'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import './editor.scss'
import { Editors } from './editors'
import { Viewers } from './viewers'

export default function FiledEditor() {
  const [text, setText] = useState('')
  const [editor, changeEditor] = useState(Editors[0].id)
  const [viewer, changeViewer] = useState(Viewers[0].id)

  const { id } = useParams()
  const file = useQuery('Taxonomy', '/' + id)
  const dispatch = useDispatch()

  useEffect(() => {
    setText(file?.contents || '')
  }, [id, file])

  const saveFile = useCallback(
    async () =>
      await dispatch(
        fileUpdated({
          id: file.id,
          name: file.name,
          contents: text,
        })
      ),
    [file, text, dispatch, fileUpdated]
  )

  const deleteFile = useCallback(
    async () => await dispatch(fileDeleted(file.id)),
    [file, dispatch, fileDeleted]
  )

  const Editor = useMemo(() => listOf(Editors).find(editor).input, [editor])
  const Viewer = useMemo(() => listOf(Viewers).find(viewer).view, [viewer])

  return (
    <div className="editor-page">
      <Header>
        <ToggleSidebarButton />
        {id}
        <Spacer />

        <Action
          label="Delete"
          icon="Trash"
          className="destructive"
          onClick={deleteFile}
        />
        <Action
          label="Save"
          icon="Cloud"
          className="secondary"
          onClick={saveFile}
        />
      </Header>
      <Stack className="toolbar h spaced " tabIndex={0}>
        <Selector options={Editors} value={editor} onChange={changeEditor} />

        <Spacer />
        <Button label="Search" icon="MagnifyingGlass" tabIndex={1} />
        <Line className="v dot" />
        <Button label="Bookmark" icon="Bookmark" tabIndex={1} />
        <Line className="v dot" />
        <Button label="Compare" icon="Scale" tabIndex={1} />

        <Spacer />
        <Selector options={Viewers} value={viewer} onChange={changeViewer} />
      </Stack>
      <section>
        <Dynamic component={Editor} value={text} onChange={setText} />
        <Dynamic component={Viewer} value={text} />
      </section>
    </div>
  )
}
