import React from 'react';

class Todos extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="checkbox" />
          checkbox-1
        </div>
        <div>
          <input type="checkbox" />
          checkbox-2
        </div>
        <div>
          <input type="checkbox" />
          checkbox-3
        </div>
        <div>
          <input type="checkbox" />
          checkbox-4
        </div>
      </div>
    )
  }
}

export default Todos;