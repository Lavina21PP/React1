import { useState } from "react";

function Chat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);
    let reader;

    const sendMessage = async (e) => {
        e.preventDefault();
        setMessages("");
        setIsStreaming(true);
        setInput("");

        const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        });

        reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullMessage = "";

        while (isStreaming) {
            const { value, done } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            try {
                const json = JSON.parse(chunk.trim());
                if (json.response) {
                    fullMessage += json.response;
                    setMessages(fullMessage);
                }
            } catch (err) {
                console.error("Error parsing chunk:", err);
            }
        }
    };

    const stopStreaming = () => {
        setIsStreaming(false);
        if (reader) reader.cancel();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg">
                <form onSubmit={sendMessage} className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="พิมพ์ข้อความ..."
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button 
                        type="submit" 
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                    >
                        ส่ง
                    </button>
                    <button
                        type="button"
                        onClick={stopStreaming}
                        disabled={!isStreaming}
                        className={`px-4 py-2 font-semibold rounded-lg transition ${
                            isStreaming
                                ? "bg-red-500 text-white hover:bg-red-600"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        หยุด
                    </button>
                </form>
                <div className="mt-4 p-4 bg-gray-200 rounded-lg min-h-[100px] text-gray-700">
                    {messages || "ข้อความจะแสดงที่นี่..."}
                </div>
            </div>
        </div>
    );
}

export default Chat;
