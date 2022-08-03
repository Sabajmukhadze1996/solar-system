import React from 'react'

export const Loading = () => {
  return (
<div className="d-flex gap-4 align-items-end text-success">
   <strong style={{fontSize: "1.1rem"}}>ჩატვირთვა...</strong>
  <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
  )
}