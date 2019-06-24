import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

//React Table
class Table extends React.Component {

  getData() {
    const data = this.props.tabledata;
    return data;
  }
  getColumns() {
    const columns = [
      {
        Header: "Id",
        accessor: "id",
        className: "react-style",
        Cell: props => {
          return <div>{props.value}</div>
        }
      },
      {
        Header: "Title",
        accessor: "title",
        className: "react-style",
        Cell: props => {
          return <div>{props.value}</div>
        }
      },

    ]
    return columns;
  }

  render() {
    return (
      <div>
        <ReactTable
          data={this.getData()}
          columns={this.getColumns()}
          filterable
        />
      </div>
    )
  }
}

export default Table;