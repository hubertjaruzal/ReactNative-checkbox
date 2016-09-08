import React, { Component, PropTypes } from 'react';
import { Text, View, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Checkbox from './Checkbox.js';

class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  renderRow = (rowData) => (
    <View style={{flex: 1}}>
      <Checkbox
        checked={rowData[this.props.checked]}
        iconUnchecked={this.props.iconUnchecked}
        iconChecked={this.props.iconChecked}
        iconColor={this.props.iconColor}
        iconSize={this.props.iconSize}
        text={rowData[this.props.name]}
        textSize={this.props.textSize}
        onChange={this.props.onChange}
        checkboxStyles={this.props.checkboxStyles}
        iconStyles={this.props.iconStyles}
      />
    </View>
  );

  render() {
    const icon = () => this.state.checked ? this.props.iconChecked : this.props.iconUnchecked;
    return (
      <ListView
        style={[this.props.checkboxListStyles]}
        dataSource={this.dataSource.cloneWithRows(this.props.data)}
        renderRow={this.renderRow}
        enableEmptySections={true}
      />
    );
  }
}

CheckboxList.defaultProps = {
  checked: 'checked',
  name: 'name',
  data: [{name: 'Female', checked: true}, {name: 'Male', checked: false}],
  iconUnchecked: 'radio-button-unchecked',
  iconChecked: 'radio-button-checked',
  iconColor: '#000000',
  iconSize: 20,
  textSize: 15,
  checkboxStyles: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  iconStyles: {
    marginRight: 5
  },
  checkboxListStyles: {
    flex: 1,
    marginTop: 50
  }
};

CheckboxList.propTypes = {
  checked: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  iconUnchecked: PropTypes.string.isRequired,
  iconChecked: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  textSize: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  checkboxStyles: PropTypes.object,
  iconStyles: PropTypes.object,
  checkboxListStyles: PropTypes.object,
}

export default CheckboxList;
