import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useQuery from '@/services/query'
import { SideBarListPage } from '@/components/container/side-bar'
import Icon from '@/components/icon'

import './feeds.scss'

export default function FeedsPage() {
  const { feedId } = useParams()

  const feed = useQuery('rss', parseInt(feedId))
  const title = useMemo(() => feed?.value || 'Feeds', [feedId, feed])

  return (
    <SideBarListPage>
      <div className="title">
        <strong>{title}</strong>
        <small>{6} Rezepte</small>
      </div>
      <Icon name="MagnifyingGlass" />
      <Icon name="ArrowPath" />
      <Icon name="SquaresPlus" />
    </SideBarListPage>
  )
}
