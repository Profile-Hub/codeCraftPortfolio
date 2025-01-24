import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

import img from '../../assets/website/Vector.svg';
import { Link } from 'react-router-dom';


const SupportModal = ({ showModal, handleCloseModal }) => {
    const [conversationState, setConversationState] = useState({
        stage: 'initial',
        messages: [],
        selectedService: null
    });

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        country: 'India'
    });

    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const conversationFlow = {
        initial: {
            message: 'How may I help you today?',
            options: [
               
                { id: 'services', text: 'Our Services' },
                { id: 'contact', text: 'Contact Details' }
            ]
        },
        contact: {
            message: 'How would you like to contact us?',
            options: [
                { id: 'phone', text: 'Phone Number' },
                { id: 'email', text: 'Email' },
                { id: 'whatsapp', text: 'WhatsApp' }
            ]
        },
        services: {
            message: 'Which service are you interested in?',
            options: [
                { id: 'webDev', text: 'Web Development' },
                { id: 'mobileDev', text: 'Mobile Development' },
                { id: 'cloudInfra', text: 'Cloud Infrastructure' },
                { id: 'programManagement', text: 'Program Management' },
                { id: 'securityVAPT', text: 'Security & VAPT' },
                { id: 'uiUxDesign', text: 'UI/UX Design' },
                { id: 'isoCertifications', text: 'ISO Certifications' },
                { id: 'qaAutomation', text: 'QA & Automation' }
            ]
        },
        phone: {
            message: 'Our contact number is +91 96545 96949',
            satisfaction: true
        },
        email: {
            message: 'You can reach us at support@codecraftconsulting.in',
            satisfaction: true
        },
        whatsapp: {
            message: 'WhatsApp us at +91 96545 96949',
            satisfaction: true
        },
        webDev: {
            message: 'Web Development Services:',
            options: [
                { id: 'mvp', text: 'MVP Development' },
                { id: 'scalability', text: 'Performance and Scalability' }
            ]
        },
        mobileDev: {
            message: 'Mobile Development Services:',
            options: [
                { id: 'mvp', text: 'MVP Development' },
                { id: 'scalability', text: 'Performance and Scalability' }
            ]
        },
        cloudInfra: {
            message: 'Cloud Infrastructure Services:',
            options: [
                { id: 'setup', text: 'Cloud Setup' },
                { id: 'optimization', text: 'Cost Optimization' }
            ]
        },
        programManagement: {
            message: 'Program Management Services:',
            options: [
                { id: 'planning', text: 'Project Planning and Execution' },
                { id: 'delivery', text: 'Timely Delivery Assurance' }
            ]
        },
        securityVAPT: {
            message: 'Security & VAPT Services:',
            options: [
                { id: 'assessment', text: 'Vulnerability Assessment' },
                { id: 'testing', text: 'Penetration Testing' }
            ]
        },
        uiUxDesign: {
            message: 'UI/UX Design Services:',
            options: [
                { id: 'prototyping', text: 'Wireframing and Prototyping' },
                { id: 'design', text: 'Custom UI/UX Design' }
            ]
        },
        isoCertifications: {
            message: 'ISO Certification Services:',
            options: [
                { id: 'iso9001', text: 'ISO 9001 Certification' },
                { id: 'iso27001', text: 'ISO 27001 Certification' }
            ]
        },
        qaAutomation: {
            message: 'QA & Automation Services:',
            options: [
                { id: 'manualTesting', text: 'Manual Testing' },
                { id: 'testAutomation', text: 'Automated Testing' }
            ]
        },
        mvp: {
            message: 'We help you build a minimum viable product to validate your business idea quickly and efficiently.',
            satisfaction: true
        },
        scalability: {
            message: 'We optimize your application for high performance and seamless scalability.',
            satisfaction: true
        },
        setup: {
            message: 'We provide comprehensive cloud infrastructure setup tailored to your business needs.',
            satisfaction: true
        },
        optimization: {
            message: 'Our cloud cost optimization strategies help reduce your infrastructure expenses.',
            satisfaction: true
        },
        planning: {
            message: 'We offer comprehensive project planning and execution to achieve your business objectives.',
            satisfaction: true
        },
        delivery: {
            message: 'Our proven methodologies ensure timely delivery of your projects with exceptional quality.',
            satisfaction: true
        },
        assessment: {
            message: 'We identify vulnerabilities in your IT infrastructure to mitigate potential risks.',
            satisfaction: true
        },
        testing: {
            message: 'Our penetration testing services simulate real-world attacks to strengthen your security.',
            satisfaction: true
        },
        prototyping: {
            message: 'We create wireframes and prototypes to visualize your product before development.',
            satisfaction: true
        },
        design: {
            message: 'Our team delivers custom UI/UX designs that prioritize user satisfaction and brand identity.',
            satisfaction: true
        },
        iso9001: {
            message: 'We assist your organization in obtaining ISO 9001 certification for quality management systems.',
            satisfaction: true
        },
        iso27001: {
            message: 'Our experts guide you through the process of ISO 27001 certification for information security.',
            satisfaction: true
        },
        manualTesting: {
            message: 'We perform detailed manual testing to ensure your application meets quality standards.',
            satisfaction: true
        },
        testAutomation: {
            message: 'Our automated testing services enhance efficiency and accelerate the development process.',
            satisfaction: true
        }
        
        
    };

    const styles = {
        container: {
            position: 'fixed',
            right: '20px',
            bottom: '20px',
            width: '350px',
            height: '80vh',
            border: '1px solid #ccc',
            zIndex: 1000 ,
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderBottom: '1px solid #eee',
            backgroundColor: '#f8f8f8'
        },
        body: {
            flexGrow: 1,
            overflowY: 'auto',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column'
        },
        footer: {
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            borderTop: '1px solid #eee'
        },
        message: {
            margin: '5px 0',
            padding: '8px',
            borderRadius: '5px',
            maxWidth: '80%'
        },
        userMessage: {
            alignSelf: 'flex-end',
            backgroundColor: '#e6f2ff',
            color: '#333'
        },
        aiMessage: {
            alignSelf: 'flex-start',
            backgroundColor: '#f0f0f0',
            color: '#333'
        },
        optionsContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        },
        optionBtn: {
            padding: '10px',
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        },
        input: {
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc'
        }
    };

    const handleOptionSelect = (optionId) => {
        const currentStage = conversationState.stage;
        const selectedOption = conversationFlow[currentStage].options?.find(opt => opt.id === optionId);

        const newMessages = [
            ...conversationState.messages,
            { user: 'You', text: selectedOption?.text || optionId },
            { 
                user: 'AI', 
                text: conversationFlow[optionId].message 
            }
        ];

        const updatedState = {
            stage: optionId,
            messages: newMessages,
            selectedService: optionId
        };

        if (conversationFlow[optionId].satisfaction) {
            updatedState.stage = 'satisfaction';
        }

        setConversationState(updatedState);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreed) {
            alert('You must agree to the privacy policy to submit the form.');
            return;
        }
        setIsSubmitting(true);

        const serviceId = 'service_v3yq3ai';
        const templateId = 'template_w5g53zn';
        const publicKey = 'XH2-az7ls-9LE6sc_';

        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phoneNumber,
            message: `Interested Service: ${conversationState.selectedService}\n${formData.message}`,
            to_email: 'support@codecraftconsulting.in, sanjit@codecraftconsulting.in',
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Thank you for contacting us! Your message has been sent.');
                setIsSubmitting(false);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                    country: 'India',
                });
                setAgreed(false);
                handleCloseModal();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Error sending email. Please try again.');
                setIsSubmitting(false);
            });
    };

    useEffect(() => {
        if (conversationState.messages.length === 0) {
            setConversationState(prev => ({
                ...prev,
                messages: [
                    { 
                        user: 'AI', 
                        text: conversationFlow.initial.message 
                    }
                ]
            }));
        }
    }, []);

    const renderFooterContent = () => {
        // Satisfaction stage
        if (conversationState.stage === 'satisfaction') {
            return (
                <div style={styles.optionsContainer}>
                    <button 
                        style={styles.optionBtn} 
                        onClick={() => setConversationState(prev => ({ ...prev, stage: 'contact_form' }))}
                    >
                        Yes, I want more information
                    </button>
                    <button 
                        style={styles.optionBtn} 
                        onClick={handleCloseModal}
                    >
                        No, thank you
                    </button>
                </div>
            );
        }

        // Contact Form stage
        if (conversationState.stage === 'contact_form') {
            return (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        style={styles.input}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        style={styles.input}
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        style={styles.input}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        style={styles.input}
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        style={styles.input}
                        name="message"
                        placeholder="Additional Message"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                    <div>
                        <input
                            type="checkbox"
                            id="privacyPolicy"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                            required
                        />
                        <label htmlFor="privacyPolicy">
                            I agree to the  <Link to="/Privacy-Policy" className="font-semibold text-indigo-600">
                                                privacy policy
                                              </Link>
                        </label>
                    </div>
                    <button 
                        type="submit" 
                        style={styles.optionBtn}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            );
        }

        // Default options rendering
        return (
            <div style={styles.optionsContainer}>
                {conversationFlow[conversationState.stage].options?.map((option) => (
                    <button 
                        key={option.id} 
                        onClick={() => handleOptionSelect(option.id)}
                        style={styles.optionBtn}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        );
    };

    return (
        showModal && (
            <div style={styles.container}>
                <div style={styles.header}>
                    <div>
                    <img src={img} alt="Vector Icon" width="50" height="50"/>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                        <strong>CodeCraft Assistant</strong>
                        <p style={{margin: 0, fontSize: '12px', color: 'green'}}>Online</p>
                    </div>
                    <button 
                        style={{marginLeft: 'auto', background: 'none', border: 'none', fontSize: '32px', cursor: 'pointer'}}
                        onClick={handleCloseModal}
                    >
                        ×
                    </button>
                </div>

                <div style={styles.body}>
                    {conversationState.messages.map((msg, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.message,
                                ...(msg.user === 'You' ? styles.userMessage : styles.aiMessage)
                            }}
                        >
                            <strong>{msg.user}: </strong>{msg.text}
                        </div>
                    ))}
                </div>

                <div style={styles.footer}>
                    {renderFooterContent()}
                </div>
            </div>
        )
    );
};

export default SupportModal;