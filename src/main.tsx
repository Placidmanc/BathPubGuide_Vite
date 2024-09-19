import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './components/App.tsx';

const client = new ApolloClient({
	uri: 'https://bathpubguide.co.uk/graphql',
	cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root');

// Ensure the root element exists before calling createRoot
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</StrictMode>,
	);
} else {
	console.error('Root element not found');
}
