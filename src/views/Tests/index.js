import React, { useEffect } from "react";
import { connect } from "react-redux";

// actions
import { onTest, onGetTodos } from "../../redux/actions/serviceApi";

const Tests = (props) => {
  useEffect(() => {
    props.onGetTodos();

    return () => {}; // unmount
  }, []); // [] = rong thi la didmount

  return (
    <div>
      this is test
      <button onClick={() => props.onTest()}>on test thunk</button>
      {props.dataTest.loading && <p>Loading....</p>}
      {props.dataTest.data && (
        <div>
          <p>
            <span>id:</span>
            {props.dataTest.data.id}
          </p>
          <p>
            <span>title:</span>
            {props.dataTest.data.title}
          </p>
        </div>
      )}
      <div>
        {props.dataTodos.loading && <p>Loading...</p>}
        {props.dataTodos.data && (
          <div>
            {props.dataTodos.data.map((res, index) => {
              return (
                <div key={index}>
                  <p>
                    <span>id:</span>
                    {res.id}
                  </p>
                  <p>
                    <span>title:</span>
                    {res.title}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataTest: state.serviceApi.dataTest,
    dataTodos: state.serviceApi.dataTodos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTest: () => dispatch(onTest()),
    onGetTodos: () => dispatch(onGetTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tests);
