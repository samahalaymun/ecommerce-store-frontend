import './App.css'
import { Button } from '@/components/ui/button';

function App() {

  return (
    <>
      <div className="p-5">
        <h1 className="bg-red-300 text-lg">Vite + React</h1>
        <Button variant="secondary" size="sm">
          check out
        </Button>
      </div>
    </>
  );
}

export default App
