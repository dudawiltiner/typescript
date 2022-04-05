import React from 'react'

type Props = {}

const TimeToType: React.FC = (props: Props) => {
  return (
    <form>
      <input name='hour' type='number'  min="0" max="24" placeholder="hour" required/> 
      <input name='minutes' type='number' min="0" max="59" placeholder="minutes" required/> 
      <input name='seconds' type='number' min="0" max="59" placeholder="seconds" required/> 
    </form>
  )
}

export default TimeToType;