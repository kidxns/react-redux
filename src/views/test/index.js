import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addName } from '../../redux/actions/name';

function Test(props) {
  // console.log(props);
  const [text, setText] = useState(null);

  // setText bang this.setState
  // text bang this.state = { text: null }
  const onChangeHanlde = (event) => {
    setText(event.target.value);
  }

  const handleSend = () => {
    props.addName(text);
  }

    return (
        <div>
            <input onChange={onChangeHanlde} /> 
            <button onClick={handleSend}>send</button>
            <p>{props.name}</p>
        </div>
    )
}



function mapStateToProps(state) {
    return {
      number: state.count.number,
      name: state.name.name
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    //   add: num => dispatch(add(num)), 
    addName: text =>dispatch(addName(text))
    }
  }
  
  // const con = (mapStateToProps, mapDispatchToProp) => 
  //   return (App) => {
  //     <App mapStateToProps mapDispatchToProp/>
  //   }
  // }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Test);
  