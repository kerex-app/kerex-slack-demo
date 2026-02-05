import './Pages.css'

export default function FAQ() {
  const faqs = [
    {
      question: "What is Kerex?",
      answer: "Kerex is a modern web application demonstrating best practices in React development with a responsive navigation menu and beautiful UI design."
    },
    {
      question: "How do I navigate the app?",
      answer: "Use the menu bar at the top of the page. The active page is highlighted with a blue underline and shadow effect."
    },
    {
      question: "Is this a single-page or multi-page app?",
      answer: "This is built with React Router, providing a multi-page experience while maintaining the performance benefits of a single-page application."
    },
    {
      question: "Can I customize the theme?",
      answer: "The app features a modern dark theme with cyan accents. The styling can be customized by modifying the CSS files in the components directory."
    }
  ]

  return (
    <div className="page-content">
      <div className="page-wrapper">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
