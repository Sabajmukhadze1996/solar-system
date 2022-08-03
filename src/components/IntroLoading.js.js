import React from 'react'

export const IntroLoading = () => {
  return (
    <div className="loading-text-div">
  <div className="d-flex justify-content-center flex-column align-items-center gap-4 spinner-container">
    <h2>მიმდინარეობს ჩატვირთვა...</h2>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">ჩატვირთვა...</span>
    </div>
  </div>
    </div>
  )
}
