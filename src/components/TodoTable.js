import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class TodoTable extends Component {
  
  render() {

    const columns= [{
      Header: 'Date',
      accessor: 'date',
      maxWidth: 150,
      className: 'table-cell',
    }, {
      Header: 'Description',
      accessor: 'description',
      className: 'table-cell',
    }, {
    maxWidth: 150,
      className: 'table-cell',
      Cell: (row) => {
        return <div>
            <button
              type="button" className="btn btn-danger smaller-text"
              onClick={() => this.props.delete(row.index)}>
              Del
            </button>
          </div>;
      }
    }]

    return (
      <div>
        <ReactTable
          data={this.props.data}
          columns={columns}
          sortable={true}
          defaultSorted={[{
            id: 'date'
          }]}
          defaultPageSize={10} />
      </div>
    );
  }
}

export default TodoTable;