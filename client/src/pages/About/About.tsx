import React from 'react'
import { useHistory } from 'react-router-dom'

export const About: React.FC = () => {
  const history = useHistory()

  return (
    <div className="row center">
      <div className="col xl2 push-xl5">
        <div className="card-panel grey lighten-3 ">
          <span className="black-text">
            Todo App <br /> version 1.0.0
          </span>
        </div>
        <button className="btn" onClick={() => history.push('/')}>
          К списку задач
        </button>
      </div>
    </div>
  )
}
