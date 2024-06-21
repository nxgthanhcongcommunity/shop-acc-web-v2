import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "../stores/hooks";
import { RootState } from "../stores";

interface IWebSocketProvider {
    children: ReactNode;
}

interface IWebSocketContext {
    ws: WebSocket | null;
}

const WebSocketContext = createContext<IWebSocketContext | undefined>(undefined);

export const useWebSocket = (): WebSocket | null => {

    const context = useContext(WebSocketContext);
    if (context == null) {
        throw new Error("useWebSocket must have a websocket Provider");
    }

    return context.ws;
}

const WebSocketProvider = (props: IWebSocketProvider) => {
    const { children } = props;
    const [ws, setWs] = useState<WebSocket | null>(null);
    const wsRef = useRef<WebSocket | null>(null);

    const user = useSelector((state: RootState) => state.user);


    useEffect(() => {
        if (user.entity == null) return;

        // if (("" + accountCode).length == 0) return;
        const connect = () => {
            const socket = new WebSocket("ws://localhost:4004/?accountCode=" + user.entity?.code); //+ accountCode USR-QDGVLE

            socket.onopen = () => {
                console.log("ws conected");
            }

            socket.onclose = () => {
                console.log('ws disconnected, retrying...');
                setTimeout(connect, 1000);  // Reconnect after 1 second
            }

            socket.onmessage = (event) => {
                console.log('ws message received:', event.data)
            }

            wsRef.current = socket;
            setWs(socket);
        }

        connect();

        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
        }

    }, [user.entity]) //accountCode

    return (
        <WebSocketContext.Provider value={{ ws }}>
            {children}
        </WebSocketContext.Provider>
    )

}

export default WebSocketProvider;