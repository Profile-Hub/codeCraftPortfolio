import React, { useState } from 'react';
import './SupportChat.css';
import img from '../../assets/website/Vector.svg';

const SupportModal = ({ showModal, handleCloseModal }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const aiResponses = {
        initial: 'How can I help you today? Choose from the following options: \n1. Web Development \n2. Mobile Development \n3. QA and Automation \n4. Cloud Infra \n5. IoT \n6. Security and ISO Vertical',
        'web development': 'What are you looking to achieve in Web Development? \n1. Make an MVP \n2. Feature Delivery \n3. Performance and Scalability',
        'mobile development': 'What are you looking to achieve in Mobile Development? \n1. Make an MVP \n2. Feature Delivery \n3. Performance and Scalability',
        'qa and automation': 'What QA and Automation services do you need? \n1. Web Automation \n2. Mobile Automation \n3. Performance Testing \n4. Load Testing \n5. Continuous Integration and Deployment',
        'cloud infra': 'What Cloud Infrastructure services do you need? \n1. Setup Cloud Infrastructure \n2. Cost Optimization',
        iot: 'What IoT services do you need? \n1. Make an MVP \n2. Feature Delivery \n3. Performance and Scalability',
        'security and iso': 'What Security and ISO services do you need? \n1. ISO Certifications \n2. VAPT and Pen Testing \n3. Best Security Practices \n4. GDPR Compliance',
    };

    const getAiResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase();
        return (
            aiResponses[lowerMessage] || 'Sorry, I didn’t understand that. Can you rephrase?'
        );
    };

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = input.trim();
            const aiMessage = getAiResponse(userMessage);
            setMessages([
                ...messages,
                { user: 'You', text: userMessage },
                { user: 'AI', text: aiMessage },
            ]);
            setInput('');
        }
    };

    return (
        showModal && (
            <div className="support-modal-side">
                <div className="support-chat">
                    <div className="chat-header">
                        <div className="avatar">
                            <img src={img} alt="AI Assistant Avatar" />
                        </div>
                        <div className='Ai-heading'>Code Craft Assistant AI: Your AI Virtual Assistant
                            <p className='online'>online</p></div>

                        <button className="close-btn" onClick={handleCloseModal}>
                            ×
                        </button>
                    </div>
                    <div className="chat-body">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.user === 'You' ? 'user-message' : 'ai-message'
                                    }`}
                            >
                                <strong>{msg.user}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                        />
                        <button onClick={handleSend}><span class="material-symbols-outlined">
                            send
                        </span></button>
                    </div>
                </div>
            </div>
        )
    );
};

export default SupportModal;
