import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit cards, debit cards, PayPal, and other secure payment gateways.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website.",
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return any unused product within 30 days of purchase for a full refund. Please refer to our Return Policy page for more details.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Please check our Shipping Policy for more information.",
    },
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking on the 'Sign Up' button on our homepage and filling out the registration form.",
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        "If you forget your password, click on the 'Forgot Password?' link on the login page and follow the instructions to reset it.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "You can change or cancel your order within 1 hour of placing it. Please contact our customer service for assistance.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team via email at support@flavourfullfushion.com or by using the contact form on our website.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-5 md:p-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Frequently Asked Questions
      </h1>
      <div className="bg-gradient-to-r from-orange-100 to-orange-200 py-6 px-10 rounded-lg shadow-md">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-b-0">
            <div
              className="flex justify-between items-center py-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h2>
              {openIndex === index ? (
                <FaMinus className="text-orange-600" />
              ) : (
                <FaPlus className="text-orange-600" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-gray-600 pb-4 pl-6 transition-opacity duration-300 ease-in-out">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
