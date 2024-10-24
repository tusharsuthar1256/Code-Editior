import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
     configs:{
          intialColorMode:"dark",
          useSystemColorMode:false
     }
})

export default theme;