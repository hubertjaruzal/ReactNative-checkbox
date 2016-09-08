# ReactNative-checkbox
Checkbox and Checkbox List Components for React Native which uses https://github.com/oblador/react-native-vector-icons

# Installation
```bash
npm i ReactNative-checkbox --save
```

### iOS

- Browse to `node_modules/react-native-vector-icons` and drag the folder Fonts (or just the ones you want) to your project in Xcode.

- Edit Info.plist and add:

`
<key>UIAppFonts</key>
<array>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
`

#Props:

### Checkbox

- `checked` : Boolean
- `iconUnchecked` : Name for unchecked icon from MaterialIcons (https://design.google.com/icons/) _ex. "radio-button-unchecked"._
- `iconChecked` : Name for checked icon from MaterialIcons (https://design.google.com/icons/) _ex. "radio-button-checked"._
- `iconColor` : String _ex. "#305dc1"._
- `iconSize` : Number
- `text` : Text that will be displayed along the checkbox.
- `textSize` : Number - _fontSize_ value.
- `onChange` : Function that will be executed after click on checkbox.
- `checkboxStyles` : StyleSheet abstraction _ex. { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}_
- `iconStyles` : StyleSheet abstraction _ex. { marginRight: 5 }_

### CheckboxList

- `checked` : String - Name of the object property which stands for checked (boolean).
- `name` : String - Name of the object property which stands for name. It will be displayed along the checkbox.
- `data` : Array of objects _ex. [{name: 'Female', checked: true}, {name: 'Male', checked: false}]_
- `iconUnchecked` : Name for unchecked icon from MaterialIcons (https://design.google.com/icons/) _ex. "radio-button-unchecked"._
- `iconChecked` : Name for checked icon from MaterialIcons (https://design.google.com/icons/) _ex. "radio-button-checked"._
- `iconColor` : String _ex. "#305dc1"._
- `iconSize` : Number
- `textSize` : Number - _fontSize_ value.
- `onChange` : Function that will be executed after click on checkbox.
- `checkboxStyles` : StyleSheet abstraction _ex. { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}_
- `iconStyles` : StyleSheet abstraction _ex. { marginRight: 5 }_
- `checkboxListStyles` : StyleSheet abstraction _ex. { flex: 1 }_
