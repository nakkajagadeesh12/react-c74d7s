import React, { Component } from 'react';
import { connect } from 'react-redux';
import getStoreReducer from './selectors';
import { createStructuredSelector } from 'reselect';
import LoadingIndicator from './LoadingIndicator';
import './style.css';
import Table from './Table';

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      click: false
    };
  }
  getData1() {
    this.setState({
      click: true,
    })
    this.props.getData();
  }
  render() {
    return (
      <div className="main-component">
        <button type="button" onClick={this.getData1.bind(this)}>Click to check the Data</button>
        {
          this.state.click ?
            (this.props.loading ?
              <section><LoadingIndicator /> </section> :
              this.props.error ?
                <section>No response from api</section> :
                <section>
                  <Table tabledata={this.props.data} />
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
    getData: () => dispatch({ type: 'GET_TABLE_DATA' })
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