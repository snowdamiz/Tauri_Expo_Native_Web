import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './helpers/navigation'
import { useSystemStore } from './store/system.store'
import { L_Home, L_HomeMobile, L_Login } from './components/layouts'

const Stack = createNativeStackNavigator()

const SCREEN_COMPONENTS = {
  login: {
    web: L_Login,
    mobile: L_Login,
    desktop: L_Login,
  },
  home: {
    web: L_Home,
    mobile: L_HomeMobile,
    desktop: L_Home,
  },
}

const getComponentForPlatform = (platform, screenName) => {
  const componentsForScreen = SCREEN_COMPONENTS[screenName]
  return componentsForScreen[platform]
}

export default () => {
  const platform = useSystemStore((state) => state.platform)

  const headerOptions = {
    headerShown: false,
    animation: 'none',
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'login'} screenOptions={headerOptions}>
        <Stack.Screen name={'login'}>
          { props => {
            const LoginComponent = getComponentForPlatform(platform, 'login')
            return <LoginComponent {...props} />
          }}
        </Stack.Screen>
        <Stack.Screen name={'home'}>
          { props => {
            const HomeComponent = getComponentForPlatform(platform, 'home')
            return <HomeComponent {...props} />
          }}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
