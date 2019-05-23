import React, { PropTypes } from 'react'

export default function Pager({ page, prev, next }) {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={prev} type="button">&lt;</button>
      <span className="page">{page}</span>
      <button onClick={next} type="button">&gt;</button>
    </div>
  )
}

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired
}

