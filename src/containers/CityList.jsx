import React from "react";
import City from "./City";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setCities } from "../actions/index";

class CityList extends React.Component {
  componentDidMount() {
    this.props.setCities();
  }
  render() {
    const { cities } = this.props;
    return (
      <ul className="cities">
        {cities.map((city, key) => {
          return (
            <li className="list-group-item">
              <City city={city} key={key} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setCities: setCities
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
  debugger;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList);
