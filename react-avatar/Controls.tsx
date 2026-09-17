import React, { useRef, useState } from 'react'
import { type AvatarController } from '@bible-strong/avatar-react'
import { GrokBotAvatar } from './GrokBot'

export function GrokBotControls() {
  const avatar = useRef<AvatarController>(null)
  const [avatarState, setAvatarState] = useState<any>(null)

  const handleReadState = () => {
    const state = avatar.current?.getState()
    setAvatarState(state)
    console.log('Avatar State:', state)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', padding: '2rem' }}>
      <GrokBotAvatar ref={avatar} defaultAnimation="idle" size={260} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', maxWidth: 600 }}>
        <button onClick={() => avatar.current?.play('idle')}>Idle</button>
        <button onClick={() => avatar.current?.play('thinking')}>Thinking</button>
        <button onClick={() => avatar.current?.play('excited')}>Excited</button>
        <button onClick={() => avatar.current?.play('working')}>Working</button>
        <button onClick={() => avatar.current?.play('sleeping')}>Sleeping</button>
        <button onClick={() => avatar.current?.play('celebrate')}>Celebrate</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', maxWidth: 600 }}>
        <button onClick={() => avatar.current?.setExpression('neutral')}>Neutral</button>
        <button onClick={() => avatar.current?.setExpression('curious-left')}>Curious</button>
        <button onClick={() => avatar.current?.setExpression('joyful-wide')}>Joyful</button>
        <button onClick={() => avatar.current?.setExpression('angry-brows')}>Angry</button>
        <button onClick={() => avatar.current?.setExpression('eyes-closed')}>Closed Eyes</button>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button onClick={() => avatar.current?.pause()}>Pause</button>
        <button onClick={() => avatar.current?.stop()}>Stop</button>
        <button onClick={handleReadState}>Read State</button>
      </div>

      {avatarState && (
        <pre style={{ background: '#18181B', color: '#00FFA3', padding: '0.75rem 1.25rem', borderRadius: 8, fontSize: '0.85rem' }}>
          {JSON.stringify(avatarState, null, 2)}
        </pre>
      )}
    </div>
  )
}
