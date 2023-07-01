import { useState } from "react";
import axios from "axios";
function usePost() {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const clearErr = () => {
    setMessage("");
  };
  const submitData = async (url, formData) => {
    clearErr();
    try {
      setIsSending(true);
      const response = await axios.post(url, formData);
      setMessage(response.data.message);
      console.log(response.data);
    } catch (error) {
      setMessage(error.message);
    }
    setIsSending(false);
  };

  return { message, isSending, clearErr, submitData };
}

export default usePost;
