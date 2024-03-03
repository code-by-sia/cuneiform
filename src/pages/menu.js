import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export default function useMainMenu() {
  const taxonomy = useSelector((state) => state.data.taxonomy, [])
  const filesMenu = useMemo(
    () =>
      taxonomy.map(({ id, name }) => ({
        id: 'files' + id,
        value: name,
        icon: 'DocumentText',
        aliases: ['/files/' + name],
      })),
    [taxonomy]
  )

  return [
    {
      id: '/',
      value: 'Home',
      icon: 'Home',
      aliases: ['/new-file', '/upload-file'],
    },
    {
      id: '/files',
      value: 'Files',
      icon: 'Folder',
      openIcon: 'FolderOpen',

      items: [
        { id: '/files/create', value: 'Create file', icon: 'DocumentText' },
        { id: '/files/upload', value: 'Upload file', icon: 'ArrowUpTray' },
        { id: '---' },
        ...filesMenu,
      ],
    },
    { id: '/calendar', value: 'Calendar', icon: 'CalendarDays' },
  ]
}
