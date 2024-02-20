import React from 'react'

export default function Alerts(props) {
  return (
    <div>
     props.alert && <div className={"alert alert-success alert-dismissible fade show"} role="alert">
  <strong>{props.alert.type}!</strong> {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
