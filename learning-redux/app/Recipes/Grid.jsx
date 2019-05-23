import { Map } from 'immutable'
import React, { PropTypes } from 'react'
import { paginate } from 'violet-paginator'
import DataTable from '../common/DataTable'
import Pager from '../PagerApp/Pager'

export function Grid(props) {
  const { paginator, actions, ...rest } = props

  const headers = [{
    field: 'name',
    text: 'Name'
  }, {
    field: 'abv',
    text: 'ABV'
  }, {
    field: 'fermentation_temp',
    text: 'Fermentation Temp'
  }, {
    field: 'ibu',
    text: 'IBU'
  }]

  return (
    <div style={{ width: '50%' }}>
      <Pager {...actions} page={paginator.get('page')} />
      <DataTable {...rest} headers={headers} />
    </div>
  )
}

Grid.propTypes = {
  paginator: PropTypes.instanceOf(Map),
  actions: PropTypes.shape({
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
  }).isRequired
}

export default paginate(Grid)
