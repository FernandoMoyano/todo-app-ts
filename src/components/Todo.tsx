import React from 'react'
import { type Todo as TodoType } from '../types'

type Props = TodoType

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type="chekbox"
        onChange={() => {}}
      />
      <label>{title}</label>

    </div>
  )
}
