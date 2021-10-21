import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import "@fontsource/nunito";
import "@fontsource/nunito-sans";

const fonts = { 
  heading: `'Nunito Sans', sans-serif`,
  body: `'Nunito', sans-serif`,
  mono: `'Menlo', monospace` }

const config : ThemeConfig = {
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  fonts
})

export default theme
