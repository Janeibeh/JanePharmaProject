import React, { useState } from 'react';

const Faq = () => {
    const faqItems = [
        {
            title: "What is your medical care?",
            content: "Our medical care services are dedicated to providing comprehensive and compassionate healthcare to our patients.",
        },
        {
            title: "What happens if I need to go to a hospital?",
            content: "In case you need to go to a hospital, we have established partnerships with reputable healthcare facilities to ensure you receive the necessary medical attention."
        },
        {
            title: "Can I visit your medical office?",
            content: "Yes, you are welcome to visit our medical office during our regular hours. Our team is here to assist you with any medical concerns or inquiries you may have.",
        },
        {
            title: "Do you provide urgent care?",
            content: "Yes, we offer urgent care services to address immediate medical needs. Our dedicated medical professionals are available to assist you in times of urgency.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="flex items-start justify-start gap-[9.5vw] h-[30vw]">
                <img src="./Media/maledoc copy.jpg" alt="" className="h-[30vw]" />
                <div className="flex flex-col items-center justify-center w-[38vw]">
                    <div className="font-bold py-[2vw] items-center justify-center text-[1.4vw]">Most frequently asked questions from our patients</div>
                    <div className="w-full flex flex-col gap-[2.5vw]">
                        {faqItems.map((item, index) => (
                            <div key={index} className="h-[2.5vw]">
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(index)}>
                                    <div className="font-bold  border text-[1vw] py-[0.5vw]">{item.title}</div>
                                    <div className="border ">{openIndex === index ? '−' : '+'}</div>
                                </div>
                                {openIndex === index && <div className="text-[0.9vw]">{item.content}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-14 bg-gradient-to-r from-red-50 to-teal-50"></div>
        </>
    );
};

export default Faq;
