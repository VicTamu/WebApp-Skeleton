import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8 text-center">Vite + React + shadcn/ui</h1>
      <div className="text-center mb-8 space-y-4">
        <Button 
          onClick={() => setCount((count) => count + 1)}
          size="lg"
          className="mb-4"
        >
          count is {count}
        </Button>
        <p className="text-muted-foreground">
          Edit <code className="bg-muted px-2 py-1 rounded text-sm">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-muted-foreground text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
