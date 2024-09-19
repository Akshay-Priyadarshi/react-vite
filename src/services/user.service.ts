import { User } from "@/models/user.model"
import axios from "axios"

export const getUsers = async (): Promise<User[]> => {
  const getUsersResponse = await axios.get<User[]>("/users")
  return getUsersResponse.data
}
