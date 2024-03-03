import Stack from '@/components/container/stack'
import Selector from '@/components/selector'
import Spacer from '@/components/spacer'
import { useMemo, useState } from 'react'
import { OldPersianLetters, SummerianLetters } from '../cueniform-letters'
import './latinizer.scss'

function convertToLatin(text, set) {
  const list = Object.keys(set)
  let t = text
  for (var i of list) {
    t = t.replaceAll(i, set[i])
  }

  return t
}

const Sets = [
  {
    id: 'SUMR',
    value: 'Sumerian',
    letters: SummerianLetters,
  },
  {
    id: 'OLDP',
    value: 'Old Persian',
    letters: OldPersianLetters,
  },
]

export default function LatinizerViewer({ value }) {
  const [id, change] = useState(Sets[0].id)
  const letters = useMemo(
    () => Sets.find((it) => it.id === id).letters,
    [id, Sets]
  )
  const converted = useMemo(
    () => convertToLatin(value, letters),
    [value, letters]
  )
  return (
    <Stack className="latinizer v">
      <Stack className="h options">
        <Selector options={Sets} value={id} onChange={change} />
        <Spacer />
      </Stack>
      <pre>{converted}</pre>
    </Stack>
  )
}
