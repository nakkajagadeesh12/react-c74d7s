import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

//React Table
class Table extends React.Component {

  getData() {
    const data = this.props.tabledata1;
    return data;
  }
  getColumns() {
    const columns = [
      {
        Header: "Id",
        accessor: "id",
        Cell: props => {
          return <div>{props.value}</div>
        }
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: props => {
          return <div>{props.value}</div>
        }
      },
      {
        Header: "UserName",
        accessor: "username",
        Cell: props => {
          return <div>{props.value}</div>
        }
      },
      {
        Header: "E-mail",
        accessor: "email",
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
        />
      </div>
    )
  }
}

export default Table;