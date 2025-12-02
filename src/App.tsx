import React from 'react';
import { Button } from './components/Button';
import { ContentCard } from './components/ContentCard';

function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <ContentCard title="Welcome to Your React App!" variant="elevated">
        <p className="mb-4 text-gray-700">This is a simple example of a React application using custom components.</p>
        <Button onClick={() => alert('You clicked the button!')}>
          Click Me!
        </Button>
      </ContentCard>
    </div>
  );
}

export default App;
