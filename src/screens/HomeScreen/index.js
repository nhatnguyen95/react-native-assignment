import React from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import styles from './styles'
import { selectHomeData } from '../../core/home/selectors';
import { getDataAction } from '../../core/home/actions';

class HomeScreen extends React.Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }
  
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          {JSON.stringify(data)}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: selectHomeData(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getDataAction()),
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
