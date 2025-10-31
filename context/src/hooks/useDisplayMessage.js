import { useState } from "react";
export default function useDisplayMessage(initialMessage) {
    const[message, setMessage] = useState(initialMessage);
//   function displayMessage() {
//     //return "This is your message: " + message;
//   }
  return [message];
}
