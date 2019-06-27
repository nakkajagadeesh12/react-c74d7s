import React, { Component } from 'react';
import { connect } from 'react-redux';
import getStoreReducer from './selectors';
import { createStructuredSelector } from 'reselect';
import LoadingIndicator from './LoadingIndicator';
import './style.css';
import Table from './Table';
import NewComponent from './NewComponent';

let flag;
let temp = ["toggle1", "toggle2"]
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false
    };
  }
  getData1() {
    this.setState({
      click: true,
    })
    this.props.getTabData1();
    flag = true;
  }
  getData2() {
    this.setState({
      click: true,
    })
    this.props.getTabData2();
    flag = false;
  }

  render() {
    return (
      <div className="main-component">
        <button type="button" onClick={this.getData1.bind(this)}>Click to check the Table1</button>
        <button type="button" onClick={this.getData2.bind(this)}>Click to check the Table2</button>
        {
          this.state.click ?
            (this.props.loading ?
              <section><LoadingIndicator /> </section> :
              this.props.error ?
                <section>No response from api</section> :
                <section>
                  {
                    flag ?
                      <NewComponent tabledata2={this.props.data} />
                      :
                      <Table tabledata1={this.props.data} />
                  }
                </section>)
            : null
        }
      </div>
    );
  }
}

// <LoadingIndicator />

const mapDispatchToProps = (dispatch) => {
  return {
    getTabData1: () => dispatch({ type: 'GET_TABLE_DATA' }),
    getTabData2: () => dispatch({ type: 'GET_SECOND_TABLE' })
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  }
}

// const mapStateToProps = createStructuredSelector({
//   loading: getStoreReducer(),
//   data: state.data,
//   error: state.error
// })
const hoc = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
// export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
export default hoc;