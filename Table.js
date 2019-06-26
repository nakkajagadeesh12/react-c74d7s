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
    }
  }
  toggleChange1() {
    console.log(this.state.toggle1, "tog1")
    this.setState({
      toggle1: !this.state.toggle1
    })
  }

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
        {console.log(this.state.toggle1, "togggt1")}
        <div class="ui fitted toggle checkbox" >
          Toggle1:
          <input type="checkbox" class="hidden" readonly="" tabindex="0"
            checked={this.state.toggle1}
            onClick={this.toggleChange1.bind(this)}
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