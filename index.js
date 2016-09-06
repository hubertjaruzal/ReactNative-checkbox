import React, { Component, PropTypes } from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
  }

  onChange = () => {
    if(this.props.onChange) {
      this.props.onChange();
    }
    else {
      this.setState({
        checked: !this.state.checked,
      });
    }
  }

  render() {
    const icon = () => this.state.checked ? this.props.iconChecked : this.props.iconUnchecked;
    return (
      <TouchableOpacity style={styles.checkbox} onPress={() => this.onChange()}>
        <Icon
          name={icon()}
          size={this.props.iconSize}
          color={this.props.iconColor}
          style={styles.icon} />
        <Text
          style={{
            fontSize: this.props.textSize
          }}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginRight: 5
  }
});

Checkbox.defaultProps = {
  checked: false,
  iconUnchecked: "radio-button-unchecked",
  iconChecked: "radio-button-checked",
  iconColor: "#000000",
  iconSize: 20,
  text: "Checkbox",
  textSize: 15
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  iconUnchecked: PropTypes.string.isRequired,
  iconChecked: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  textSize: PropTypes.number.isRequired,
  onChange: PropTypes.func,
}

export default Checkbox;
