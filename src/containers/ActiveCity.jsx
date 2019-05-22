import React from "react";
import { connect } from "react-redux";

class ActiveCity extends React.Component {
  render() {
    const { activeCity } = this.props;
    return (
      <div className="active-city">
        <h3>{activeCity.name}</h3>
        <p>{activeCity.address}</p>
        <img
          style={{ width: "100%" }}
          src={`https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { activeCity: state.activeCity };
};

export default connect(
  mapStateToProps,
  null
)(ActiveCity);
