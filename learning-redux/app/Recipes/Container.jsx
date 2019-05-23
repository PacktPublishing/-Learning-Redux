import React, { PropTypes } from 'react'
import { VioletPaginator, VioletDataTable } from 'violet-paginator'
import { connect } from 'react-redux'
import * as actions from './actions'

const headers = [{
  field: 'name',
  text: 'Name'
}, {
  field: 'abv',
  text: 'ABV',
  sortable: false
}, {
  field: 'fermentation_temp',
  text: 'Fermentation Temp',
  sortable: false
}, {
  field: 'ibu',
  text: 'IBU',
  sortable: false
}]

export function Container({ fetch }) {
  return (
    <div style={{ width: '50%' }}>
      <VioletPaginator fetch={fetch} listId="recipes" />
      <VioletDataTable fetch={fetch} headers={headers} listId="recipes" />
    </div>
  )
}

Container.propTypes = {
  fetch: PropTypes.func.isRequired
}

export default connect(
  undefined,
  actions
)(Container)
