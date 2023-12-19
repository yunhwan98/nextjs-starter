import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
