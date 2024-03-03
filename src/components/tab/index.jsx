import React, { createContext, useMemo } from 'react'
import classNames from 'classnames'

import './tab.scss'

const TabContext = createContext('')

export function TabHeaderItem({ title, active, onClick }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected="true"
      className={classNames({ active })}
      tabIndex="0"
      data-orientation="horizontal"
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export function TabHeader({ title, tabs = [], onSelect }) {
  return (
    <header className="tab-header">
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="tablist"
        tabIndex="0"
      >
        {tabs.map((it) => (
          <TabHeaderItem
            key={it.tabId}
            active={it.active}
            title={it.title}
            onClick={() => onSelect(it.tabId)}
          />
        ))}
      </div>
    </header>
  )
}

export function TabItem({ tabId, className, children }) {
  return (
    <TabContext.Consumer>
      {(activeTab) =>
        activeTab === tabId ? (
          <div className={classNames('tab-item', className)}>{children}</div>
        ) : (
          <></>
        )
      }
    </TabContext.Consumer>
  )
}

export default function Tab({ value, onChange, title, className, children }) {
  const tabs = useMemo(
    () =>
      children
        .filter(React.isValidElement)
        .map(({ props }) => props)
        .filter((it) => it.tabId)
        .map(({ tabId, title }) => ({
          tabId,
          title,
          active: value === tabId,
        })),
    [children, value]
  )

  return (
    <div className={classNames('tab', value, className)}>
      <TabContext.Provider value={value}>
        <TabHeader title={title} tabs={tabs} onSelect={onChange} />
        {children}
      </TabContext.Provider>
    </div>
  )
}
