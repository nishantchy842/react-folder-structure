import { memo, useContext, useEffect, useState } from "react";
import { MessageContext } from "../../context/messageContext";

export const SnackBar = memo(() => {
  const { message, setMessage } = useContext(MessageContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message.message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setMessage({
            message: "",
            success: null,
          });
        }, 500); // Match this delay with the CSS transition duration
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  return (
    <div
      className={`absolute top-2 left-[50%] translate-x-[-50%] transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {message.message && (
        <p
          className={`text-center w-fit px-[20px] py-[10px] rounded-[20px] ${
            message.success ? "bg-black text-white" : "bg-red-500 text-white"
          }`}
        >
          {message.message}
        </p>
      )}
    </div>
  );
});
