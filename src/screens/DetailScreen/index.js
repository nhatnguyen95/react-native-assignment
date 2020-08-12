import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { selectTrips } from "core/home/selectors";
import styles from "./styles";

class DetailScreen extends React.Component {
  state = {
    tripIndex: -1,
  };

  componentDidMount() {
    const { route } = this.props;
    const tripIndex = route?.params?.tripIndex;
    this.setState({ tripIndex });
  }

  render() {
    const { tripIndex } = this.state;
    const { trips } = this.props;
    return (
      <View style={styles.container}>
        {
          tripIndex === -1 ? null : (
            <View>
              <Text>{JSON.stringify(trips[tripIndex])}</Text>
            </View>
          )
        }
  
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trips: selectTrips(state),
  };
};


DetailScreen.propTypes = {
  trips: PropTypes.array,
};

DetailScreen.defaultProps = {
  trips: [],
};

export default connect(mapStateToProps, null)(DetailScreen);
