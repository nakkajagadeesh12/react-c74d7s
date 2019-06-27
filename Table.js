import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './style.scss';

//React Table
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle1: true,
      toggle2: true
    }
  }

  changeToggle1() {
    this.setState({
      toggle1: !this.state.toggle1
    })
  }
  changeToggle2() {
    this.setState({
      toggle2: !this.state.toggle2
    })
  }
  getData() {
    const data = this.props.tabledata1;
    return data;
  }

  getColumns() {
    const columns = [{
      Header: "Toggle1",
      headerClassName: "toggle1-style",
      columns: [
        {
          Header: "Id",
          accessor: "id",
          className: "column-style",
          headerClassName: "toggle1-style",
          Cell: props => {
            return <div>{props.value}</div>
          }
        },
        {
          Header: "Name",
          accessor: "name",
          className: "column-style",
          headerClassName: "toggle1-style",
          Cell: props => {
            return <div>{props.value}</div>
          }
        },
        {
          Header: "UserName",
          accessor: "username",
          className: "column-style",
          headerClassName: "toggle1-style",
          Cell: props => {
            return <div>{props.value}</div>
          }
        },
        {
          Header: "E-mail",
          accessor: "email",
          className: "column-style",
          headerClassName: "toggle1-style",
          Cell: props => {
            return <div>{props.value}</div>
          }
        },
      ]
    }]
    return columns;
  }

  render() {
    return (
      <div>
        <div class="ui fitted toggle checkbox">
          Toggle1:
          <input type="checkbox" readonly="" tabindex="0"
            checked={this.state.toggle1}
            onClick={this.changeToggle1.bind(this)}
          />
          <label></label>
        </div>
        <div class="ui fitted toggle checkbox">
          Toggle2:
          <input type="checkbox" readonly="" tabindex="0"
            checked={this.state.toggle2}
            onClick={this.changeToggle2.bind(this)}
          />
          <label></label>
        </div>
        <div>
          <ReactTable
            data={this.getData()}
            columns={this.getColumns()}
            showPaginationBottom={false}
            defaultPageSize={10}
          />
        </div>
      </div>
    )
  }
}

export default Table;