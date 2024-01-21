// index.js
import { Redirect, useRouter } from "expo-router"; // Correct import

export default function Index() {
  const router = useRouter();

  // Example of redirecting to "/home"
  router.replace("/home");

  // Return null or any placeholder since you're using redirection
  return null;
}
