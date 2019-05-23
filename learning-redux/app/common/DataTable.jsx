import { List } from 'immutable'
import FontAwesome from 'react-fontawesome'
import React, { PropTypes } from 'react'

export default function DataTable({ headers, results, isLoading }) {
  if (isLoading) {
    return (
      <center>
        <FontAwesome
          name="spinner"
          spin
          size="5x"
        />
      </center>
    )
  }

  const headings = headers.map((h, i) => (
    <th key={i}>{h.text}</th>
  ))

  const getColumns = (row => headers.map((h, i) => (
    <td key={i}>{row.get(h.field)}</td>
  )))

  const rows = results.map(r => (
    <tr key={r.get('id')}>
      {getColumns(r)}
    </tr>
  ))

  return (
    <table className="border">
      <thead>
        <tr>
          {headings}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

const Header = PropTypes.shape({
  text: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired
})

DataTable.propTypes = {
  headers: PropTypes.arrayOf(Header).isRequired,
  results: PropTypes.instanceOf(List).isRequired,
  isLoading: PropTypes.bool
}
