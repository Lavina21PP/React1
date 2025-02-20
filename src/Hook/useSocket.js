import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useSocket = (serverUrl) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    // เชื่อมต่อกับ WebSocket server
    const newSocket = io(serverUrl);
    // ตั้งค่า socket ให้กับ state
    setSocket(newSocket);
    // ทำความสะอาดเมื่อ component ถูก unmount
    return () => newSocket.close();
  }, [serverUrl]);

  return socket;
};

export default useSocket;
