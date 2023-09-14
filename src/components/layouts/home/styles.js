import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$bg_color_default',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: '$text_color_default',
    userSelect: 'none'
  }
});
