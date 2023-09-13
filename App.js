import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { Text, View, Platform } from 'react-native';

export default function App() {
  const [platform, setPlatform ] = useState('')
  
  useEffect(() => {
    const isTauri = window.__TAURI__
    const isWeb = Platform.OS === 'web'

    if (isTauri) setPlatform('desktop')
    else if (!isTauri && isWeb) setPlatform('web')
    else setPlatform('mobile')
  }, [])

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hello from {platform}!</Text>
      </View>
    </SafeAreaProvider>
  );
}
