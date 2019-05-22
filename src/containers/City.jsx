import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setActiveCity } from "../actions/index";

class City extends React.Component {
  render() {
    const { city, setActiveCity } = this.props;
    return <p onClick={() => setActiveCity(city)}>{city.name}</p>;
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setActiveCity: setActiveCity
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(City);
