import { Button, Flex } from '@radix-ui/themes'
import { Beth_Ellen } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import IssueStatusFilter from './IssueStatusFilter'

const IssueAction = () => {
  return (
    <Flex justify='between'>
      <IssueStatusFilter />
    <Button><Link href="/issues/new">New Issue</Link></Button>
      </Flex>
  )
}

export default IssueAction