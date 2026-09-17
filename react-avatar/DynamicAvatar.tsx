import React from 'react'
import { Avatar } from '@bible-strong/avatar-react'
import type { AvatarDefinition, ExpressionKey } from '@bible-strong/avatar-core'
import '@bible-strong/avatar-react/styles.css'

export interface DynamicAvatarProps {
  definition: AvatarDefinition
  expression?: ExpressionKey
  animation?: string
  size?: number | string
  onError?: (error: any) => void
}

export function DynamicAvatar({
  definition,
  expression,
  animation,
  size = 240,
  onError = (err) => console.error(err),
}: DynamicAvatarProps) {
  return (
    <Avatar
      definition={definition}
      expression={expression}
      animation={animation as any}
      size={size}
      onError={onError}
    />
  )
}
