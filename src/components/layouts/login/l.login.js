import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import EStyleSheet from 'react-native-extended-stylesheet'
import { THEMES } from 'constants'
import { O_Login } from '../../organisms'

export const L_Login = () => {
  const theme = EStyleSheet.value('$theme')

  const statusBarStyle = theme === THEMES.LIGHT
    ? THEMES.DARK
    : THEMES.LIGHT

  return (
    <>
      <StatusBar style={statusBarStyle} />
      <SafeAreaProvider>
        <O_Login />
      </SafeAreaProvider>
    </>
  )
}