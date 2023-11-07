'use client'

import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React from 'react'

const DeleteIssueButton = ({ issueId }: { issueId: number}) => {
  return (
    <AlertDialog.Root>
        <AlertDialog.Trigger>
        <Button color='red'>Delete Issue</Button>
        </AlertDialog.Trigger>
       <AlertDialog.Content>
        <AlertDialog.Title>Confirm deletion</AlertDialog.Title>
            <AlertDialog.Description>Are you sure that you want to delete this issue?
            </AlertDialog.Description>
            <Flex mt="4" gap="3">
            <AlertDialog.Cancel>
                <Button variant='soft' color='gray'>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
                <Button color='red'>
                    Delete Issue
                </Button>
            </AlertDialog.Action>
            </Flex>
       </AlertDialog.Content>
    </AlertDialog.Root>
  )
}

export default DeleteIssueButton