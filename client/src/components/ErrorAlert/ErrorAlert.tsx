import React from 'react'

type Props = {
  msg: string
}

const ErrorAlert: React.FC<Props> = ({ msg }) => {
  return (
    <div className="card-panel teal">
      <span className="white-text">{msg}</span>
    </div>
  )
}

export default ErrorAlert
