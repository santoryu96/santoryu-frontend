import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect} from 'react'
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    console.log(process.env.IS_PROD ? "PROD": "Not Prod");
    console.log(process.env.IS_DEV ? "DEV": "Not Dev");
  }, [])

  const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
      </QueryClientProvider>
  )
}

export default MyApp
