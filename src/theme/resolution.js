import EStyleSheet from 'react-native-extended-stylesheet'

export const resolution = EStyleSheet.create({
  $isMobile: true,
  $isLandscape: false,

  '@media (min-width: 480)': {
    $isMobile: false,
  },

  '@media (orientation: landscape)': {
    $isLandscape: true,
  },
})
