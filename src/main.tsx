import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react'

import App from './App.tsx'
import './index.css'
import { AppProvider } from './context/appContext.tsx';
import theme from './assets/styles/theme.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<AppProvider>
						<App />
					</AppProvider>
				</ChakraProvider>
			</QueryClientProvider>
		</BrowserRouter>

	</React.StrictMode>,
)
