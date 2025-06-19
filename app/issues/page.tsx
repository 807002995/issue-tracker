import React from 'react'
import { Button } from 'antd'
import Link from 'next/link'
export default function IssuesPage() {
  return (
    <Button type='primary' ><Link href="/issues/new">New Issues</Link></Button>
  )
}
