
/**
 * Title: Chat Interface
 * Description: Provides conversational interaction with the platform using advanced AI.
 * Status: Finalized
 * Author: Reece Dixon
 * Date Created: 2024-08-05
 * Path: /src/components/ChatInterface.tsx
 * Proprietary: YES - **NOT FOR PUBLIC ACCESS**
 */

import React, { useState } from 'react';
import { Input, Button, List, Avatar, message } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<{ text: string, sender: string }[]>([]);
    const [inputValue, setInputValue] = useState('');

    const sendMessage = async () => {
        if (!inputValue) return;

        const newMessage = { text: inputValue, sender: 'user' };
        setMessages([...messages, newMessage]);

        try {
            const response = await axios.post('/api/chat/message', { message: inputValue });
            const botReply = { text: response.data.reply, sender: 'bot' };
            setMessages([...messages, newMessage, botReply]);
        } catch (error) {
            message.error('Failed to send message');
        }

        setInputValue('');
    };

    return (
        <div className="chat-interface">
            <List
                itemLayout="horizontal"
                dataSource={messages}
                renderItem={(msg) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar>{msg.sender === 'user' ? 'U' : 'B'}</Avatar>}
                            title={msg.sender}
                            description={msg.text}
                        />
                    </List.Item>
                )}
            />
            <TextArea
                rows={4}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message"
            />
            <Button type="primary" onClick={sendMessage}>
                Send
            </Button>
        </div>
    );
};

export default ChatInterface;
                    