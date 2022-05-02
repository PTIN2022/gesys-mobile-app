import React from 'react'
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper'
import Select from "react-native-select-dropdown"
export default function SelectInput(props) {
  return (
    <Select
        data={props.data}
        onSelect={(selectedItem) => {
            props.onSelectValue(selectedItem)
        }}
        defaultButtonText={props.btnText}
        buttonTextAfterSelection={(selectedItem) => {
        return selectedItem;
        }}
        rowTextForSelection={(item) => {
        return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
        return <IconButton icon={isOpened ? 'chevron-up' : 'chevron-down'} color="#777" size={25} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
    />
  )
}

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        flex: 1,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#777',
      },
      dropdown1BtnTxtStyle: {
        color: 'black',
        fontSize: 15,
        textAlign: 'left'
      },
      dropdown1DropdownStyle: {
        backgroundColor: '#fff',
        borderRadius: 5
      },
      dropdown1RowStyle: {
        backgroundColor: '#fff', 
        borderBottomColor: '#C5C5C5'
      },
      dropdown1RowTxtStyle: {
        color: '#444',
        textAlign: 'left'
      },
})