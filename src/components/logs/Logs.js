import React, { useEffect } from "react";
// propType to check if we're receiving the correct data type
import PropTypes from "prop-types";
// Connect is what allows us to connect to redux in react
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
// Action: these are sent from our component to our reducer to our store and returned to us
import { getLogs } from "./../../actions/logActions";

// We're destructuring our props from our actions and our maptostate;
// Our actions are actually props from either need to destructure or
// write props.getLogs()
function Logs({ log: { logs, loading }, getLogs }) {
  // The method we'd use without redux.
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/logs");
  //   const data = await res.json();

  //   setLogs(data);
  //   setLoading(false);
  // };

  useEffect(() => {
    //before we were calling this from within the component but
    // now we're bringing it in from our actions
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {loading && logs.length === 0 ? (
        <p className="center">No Logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

// This maps our states to our props.
const mapStateToProps = (state) => ({
  // state.'name'; the name is the same as the state we're
  // retreiving from our rootreducer. If the name is 'log',
  // then we would write: state.'log'.
  log: state.log,
});

//this 'connect()(component)' is what connect our redux to our
// component. It takes in a 'mapStateToProps()' and our actions
export default connect(mapStateToProps, { getLogs })(Logs);
