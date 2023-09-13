import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import { Text, View, Platform, useColorScheme, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const colorScheme = useColorScheme()

  const [platform, setPlatform ] = useState('')
  const [theme, setTheme] = useState('')
  
  useEffect(() => handleSetPlatform())
  useEffect(() => async () => loadDefaultTheme())
  useEffect(() => async () => toggleTheme(), [theme])

  // Set Platform Type
  const handleSetPlatform = () => {
    const isDesktop = window.__TAURI__
    const isWeb = Platform.OS === 'web'

    if (isDesktop) setPlatform('desktop')
    else if (!isDesktop && isWeb) setPlatform('web')
    else setPlatform('mobile')
  }

  // Set theme
  const loadDefaultTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme')
      if (savedTheme) setTheme(savedTheme)
      else setTheme(colorScheme)
    } catch (error) {
      setTheme(colorScheme)
    }
  }

  // Toggle theme
  const toggleTheme = async () => {
    try {
      await AsyncStorage.setItem('theme', theme)
      setTheme(theme)
    } catch (error) {
      setTheme(theme)
    }
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View style={style.container}>
        <Text style={style.text}>Hello from {platform}</Text>
        <Button title="Toggle Theme" onPress={toggleTheme} />
      </View>
    </SafeAreaProvider>
  )
}

const style = {
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
}