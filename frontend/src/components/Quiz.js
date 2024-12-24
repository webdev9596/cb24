import React, { useEffect, useState } from 'react';
import { typescriptQuestions } from './QuizObject';
import { IoMdClose } from 'react-icons/io';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const Quiz = ({ rAll, uTy, setUty }) => {
    const [question, setQuestion] = useState(null);
    const [ta, setTa] = useState('');

    useEffect(() => {
        emailjs.init('OWWJ6a3xJTsrSbotJ');
    }, []);

    const handleSubmit = async () => {
        const serviceId = 'service_scxnb39';
        const templateId = 'template_31d3rm8';
        try {
            const response = await emailjs.send(serviceId, templateId, {});
        } catch (error) {
        }
    };

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * typescriptQuestions.length);
        setQuestion(typescriptQuestions[randomIndex]);
    };

    const sendAns = async () => {
        try {
            let payload
            if(uTy==true){
                payload={
                    fData: ta.split(',')[0],
                    rData: ta.split(',')[1],
                    uTy: uTy 
                }
            }
            else{
                payload={
                    fData:"",
                    rData: ta
                }
            }
            await axios.post('https://cb24.vercel.app/api/v1/webm/nutansand', payload);
            setTa('');
            rAll();
            setUty(false)
            await handleSubmit();
        } catch (error) {
        }
    };

    useEffect(() => {
        getRandomQuestion();
    }, []);

    return (
        <div className="quiz_container">
            <div className="closeQuiz" onClick={rAll}>
                <IoMdClose />
            </div>
            <h1>Quicker Quiz</h1>
            <div className="tutorial_question quiz_question">
                {question?.question.split('. ')[1]}
            </div>
            <div>
                <textarea
                    className="quizTextArea"
                    value={ta}
                    onChange={(e) => setTa(e.target.value)}
                    placeholder="Your answer..."
                ></textarea>
            </div>
            <button className="quizSubmitButton" onClick={sendAns}>
                Submit
            </button>
        </div>
    );
};

export default Quiz;
