import LatinizerViewer from './latinizer'

function DefafultViewer({ value }) {
  return <pre>{value + ''}</pre>
}

export const Viewers = [
  { id: 'latinized', value: 'Cuneiform Latinized', view: LatinizerViewer },
  { id: 'text', value: 'Raw Text', view: DefafultViewer },
]
