import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import logo from './logo.svg';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-center">
        <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen flex flex-col items-center justify-center text-white">
          <img 
            src={logo} 
            className="h-40 w-40 pointer-events-none animate-spin" 
            style={{ animationDuration: '20s' }}
            alt="logo" 
          />
          <h1 className="text-4xl font-bold mt-8 mb-4 text-blue-100">
            Welcome to Weather App
          </h1>
          <p className="text-xl mb-6 text-blue-200 max-w-md px-4">
            Edit <code className="font-mono bg-blue-800 px-3 py-1 rounded-lg text-blue-100">src/App.tsx</code> and save to reload.
          </p>
          <a
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
