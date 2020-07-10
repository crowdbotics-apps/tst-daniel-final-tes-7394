import axios from "axios"
import { DANIEL_TEST_USERNAME, DANIEL_TEST_PASSWORD } from "react-native-dotenv"
const danielTest = axios.create({
  baseURL: "https://danielsousa.io",
  auth: { username: DANIEL_TEST_USERNAME, password: DANIEL_TEST_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function get_pets_list() {
  return danielTest.get(`/pets`)
}
export const apiService = { get_pets_list }
