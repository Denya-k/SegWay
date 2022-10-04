import React, { useState }  from 'react'



// export  function CurrentFunc() {
//     const [state, setState] = useState(5);

  
//   return (
//     <div>
//         <h1>{state}</h1>
//         <button onClick={() => setState(state - 1)}>Decrement</button>
//         <button onClick={() => setState(state + 1)}>Increment</button>
//     </div>
//   )
// }


export default  class Current extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 5,
    }
  }

DecreaseItem = () => {
  this.setState( {
      quantity: this.state.quantity - 1
  }
  );
}

IncrementItem = () => {
  this.setState({
      quantity: this.state.quantity + 1
  })
}
  render() {
    return (
      <div style={{marginLeft: "250px"}}>
        <button onClick = {this.DecreaseItem}>-</button>
        <button onClick = {this.IncrementItem}>+</button>
        <h1>{this.state.quantity}</h1>
      </div>
    )
  }
}

// export default { Current, CurrentFunc }



