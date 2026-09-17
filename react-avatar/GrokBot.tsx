import React from 'react'
import { createAvatar } from '@bible-strong/avatar-react'
import '@bible-strong/avatar-react/styles.css'
import avatarJson from './avatar.avatar.json'

// Creates the typed GrokBot avatar component based on the Grok bot definition
export const GrokBotAvatar = createAvatar(avatarJson)

export interface GrokBotProps {
  size?: number | string
  defaultAnimation?: 'sleeping' | 'waking' | 'idle' | 'listening' | 'thinking' | 'searching' | 'working' | 'excited' | 'bored' | 'suspicious' | 'angry' | 'drowsy' | 'happy' | 'curious' | 'confused' | 'surprised' | 'proud' | 'shy' | 'sad' | 'laughing' | 'scared' | 'playful' | 'celebrate'
  animation?: 'sleeping' | 'waking' | 'idle' | 'listening' | 'thinking' | 'searching' | 'working' | 'excited' | 'bored' | 'suspicious' | 'angry' | 'drowsy' | 'happy' | 'curious' | 'confused' | 'surprised' | 'proud' | 'shy' | 'sad' | 'laughing' | 'scared' | 'playful' | 'celebrate'
  expression?: string
  defaultExpression?: string
  autoplay?: boolean
  className?: string
  style?: React.CSSProperties
  ariaLabel?: string
  onAnimationEnd?: (animation: string) => void
  onExpressionChange?: (expression: string) => void
  onError?: (error: any) => void
}

export function GrokBot({
  defaultAnimation = 'idle',
  size = 240,
  ...props
}: GrokBotProps) {
  return (
    <GrokBotAvatar
      size={size}
      defaultAnimation={defaultAnimation}
      {...props}
    />
  )
}
