import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './helpers/navigation'
import { useSystemStore } from './store/system.store'
import { Home, HomeMobile, Login } from './layouts'

const Stack = createNativeStackNavigator()

const SCREEN_COMPONENTS = {
  login: {
    web: Login,
    mobile: Login,
    desktop: Login,
  },
  home: {
    web: Home,
    mobile: HomeMobile,
    desktop: Home,
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
