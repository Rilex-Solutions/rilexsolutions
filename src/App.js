import React from 'react';
import { ErrorBoundary } from './components';
import RilexWebsite from './RilexWebsite';

function App() {
  return (
    <ErrorBoundary>
      <RilexWebsite />
    </ErrorBoundary>
  );
}

export default App;