import { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import { ThemeContext } from 'theme'
import { styles } from './styles'

export const O_Login = () => {
	const { toggleTheme } = useContext(ThemeContext)

	const handleToggleTheme = () => toggleTheme()

  return (
		<View style={styles.container}>
			<Pressable onPress={() => handleToggleTheme()}>
				<Text style={styles.text}>Login Component</Text>
			</Pressable>
		</View>
  )
}