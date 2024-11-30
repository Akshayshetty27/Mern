import React, { PureComponent } from 'react'

export class PureComponet extends PureComponent {
  render(props) {
    return (
      <div>
        I am the pure components{props.name}
      </div>
    )
  }
}

export default PureComponet