import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


class Table extends React.Component {

  getData() {
    const data = this.props.tabledata2;
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
      {
        Header: "Image",
        accessor: "thumbnailurl",
        Cell: props => {
          const img = <div>
            <img src="https://www.w3schools.com/html/img_girl.jpg" />
          </div>
          return <div>{img}</div>;
        }
      }
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