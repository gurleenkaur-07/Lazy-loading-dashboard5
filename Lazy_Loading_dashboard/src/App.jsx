import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {lazy, Suspense} from 'react'
const Dash = lazy(() => import('./components/dashboard'))

function App() {


  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Dash />
    </Suspense>);
};

export default App;
