import { MultiLineTextInput } from '@/components/input'
import './text-editor.scss'

export default function TextEditor(props) {
  return <MultiLineTextInput className="raw-editor" {...props} />
}
