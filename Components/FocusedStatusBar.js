import { Text, View } from 'react-native'
import {StatusBar} from 'expo-status-bar'
import { useIsFocused } from '@react-navigation/native'

import React from 'react'

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused()
  return isFocused?<StatusBar animated={true} {...props}/>:null;
}

export default FocusedStatusBar