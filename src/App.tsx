import { Button } from "./components/ui/button/button"
import { getUsers } from "./services/user.service"
import { User } from "./models/user.model"
import { useQuery } from "@tanstack/react-query"

function App() {
  const getUsersQuery = useQuery({ queryKey: ["getUsers"], queryFn: getUsers })

  return (
    <div className="flex flex-col justify-center items-center space-y-4 h-screen">
      <h1 className="text-5xl">Hello React</h1>
      <Button
        variant={"default"}
        size={"lg"}
        onClick={() => getUsersQuery.refetch()}
      >
        Click Me to refetch data
      </Button>
      <ul>
        {getUsersQuery.isSuccess &&
          getUsersQuery.data.map((user: User) => {
            return <li key={user.id}>{user.name}</li>
          })}
      </ul>
    </div>
  )
}

export default App
