import { Button } from "./components/ui/button/button"

function App() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 h-screen">
      <h1 className="text-5xl">Hello React</h1>
      <Button variant={"default"} size={"lg"}>
        Click Me!
      </Button>
    </div>
  )
}

export default App
