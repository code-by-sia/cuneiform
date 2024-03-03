import LinkButton from '@/components/button/link-button'
import Stack from '@/components/container/stack'
import React from 'react'

export default function FilesHomePageMenu() {
  return (
    <section className="menu">
      <header>Welcome!</header>
      <Stack>
        <LinkButton
          to="/files/create"
          label="Create New File"
          icon="DocumentText"
        />
        <LinkButton
          to="/files/upload"
          label="Upload File"
          icon="CloudArrowUp"
        />
      </Stack>
    </section>
  )
}
