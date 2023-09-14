import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import EStyleSheet from 'react-native-extended-stylesheet'
import { THEMES } from 'constants'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const L_Home = () => {
  const theme = EStyleSheet.value('$theme')

  const statusBarStyle = theme === THEMES.LIGHT
    ? THEMES.DARK
    : THEMES.LIGHT

  return (
    <>
      <StatusBar style={statusBarStyle} />
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text style={styles.text}>Home Layout</Text>
        </View>
      </SafeAreaProvider>
    </>
  )
}