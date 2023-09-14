import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useEffect } from 'react'
import { View, Platform, useColorScheme } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import EStyleSheet from 'react-native-extended-stylesheet'
import { THEMES } from 'constants'
import { ThemeContext } from 'theme'
import lightTheme from 'theme/light'
import darkTheme from 'theme/dark'
import Navigation from './src/Navigation'
import { useSystemStore } from './src/store/system.store'

export default function App() {
  const colorScheme = useColorScheme()
  const setPlatformState = useSystemStore(state => state.setPlatform)
  const [themeLoading, setThemeLoading] = useSystemStore(state => [state.themeLoading, state.setThemeLoading])

  useEffect(() => setPlatform(), [])
  useEffect(() => loadDefaultTheme(), [colorScheme])

  const setPlatform = () => {
    const isDesktop = window.__TAURI__
    const isWeb = Platform.OS === 'web'

    if (isDesktop) setPlatformState('desktop')
    else if (isWeb) setPlatformState('web')
    else setPlatformState('mobile')
  }

  const loadDefaultTheme = () => { 
    (async () => {
      const savedTheme = await AsyncStorage.getItem('theme')
      let theme
  
      if (savedTheme) theme = savedTheme === THEMES.LIGHT
        ? lightTheme
        : darkTheme
  
      else theme = colorScheme === THEMES.LIGHT
        ? lightTheme
        : darkTheme
  
      EStyleSheet.build(theme)
      setThemeLoading(false)
    })()
  }

  const toggleTheme = async () => {
    setThemeLoading(true)
    
    const currentTheme = EStyleSheet.value('$theme')
    const newComputedTheme = currentTheme === THEMES.LIGHT ? darkTheme : lightTheme
    const newStoredTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT

    EStyleSheet.build(newComputedTheme)
    await AsyncStorage.setItem('theme', newStoredTheme)

    setThemeLoading(false)
  }

  if (themeLoading) return <View />

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeContext.Provider>
  )
}
