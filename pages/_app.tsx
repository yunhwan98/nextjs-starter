import type { AppProps } from 'next/app'
import { darkTheme, lightTheme } from '../styles/theme'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}
