import React from 'react';
import _ from 'lodash';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {
          _.map(this.props.data, tog => {
            return <button type="button">{tog}</button>
          })
        }
      </div>
    )
  }
}
export default Buttons;