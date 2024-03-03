import React, { useMemo, useState } from 'react'
import classNames from 'classnames'
import Icon from '@/components/icon'
import List from '@/components/list'
import SearchInput from '@/components/input/search'
import DefaultSelectorTriggerView from '@/components/selector/default-trigger'
import DefaultSelectorItemView from '@/components/selector/default-item'
import { filterByValue, findByIdIn } from '@/services/list'
import useOutsideAlerter from '@/hooks/outside-alerter'
import './selector.scss'

export default function Selector({
  className,
  options: originalOptions,
  value,
  tabIndex = 0,
  onChange,
  showFilter = originalOptions?.length > 30,
  view: ItemView = DefaultSelectorItemView,
  trigger: Trigger = DefaultSelectorTriggerView,
}) {
  const [isOpen, toggle] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')
  const selected = useMemo(
    () => findByIdIn(originalOptions, value),
    [originalOptions, value]
  )
  const options = useMemo(
    () => filterByValue(originalOptions, searchTerm),
    [originalOptions, searchTerm]
  )

  const ref = useOutsideAlerter(toggle)

  return (
    <div className={classNames(className, 'selector')} role="select" ref={ref}>
      <Trigger
        {...selected}
        onClick={() => toggle((i) => !i)}
        tabIndex={tabIndex}
        role="button"
        className="selector-trigger"
      >
        <Icon name="ChevronUpDown" className="icon trigger-icon" />
      </Trigger>

      {isOpen && (
        <div className="selector-context" tabIndex={tabIndex + 1}>
          {showFilter && (
            <SearchInput value={searchTerm} onChange={setSearchTerm} />
          )}
          <List
            className="selector-options"
            items={options}
            view={ItemView}
            tabIndex={0}
            selectedId={value}
            onSelect={(it) => {
              onChange(it)
              toggle(false)
            }}
          />
        </div>
      )}
    </div>
  )
}
