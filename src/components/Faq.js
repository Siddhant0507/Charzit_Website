import React,{useState} from 'react'
import "./faq.css"

function Faq() {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
      if (selected === i) {
        return setSelected(null);
      }
      setSelected(i);
    };
    const data = [
      {
        question: "What is CharzIt ?",
        answer:
          "CharzIt is charging station platform for electric cars from various well-know and trusted brands. The Price is cheap, it doesn't drain the pocket too, we are environmentally friendly, easy to find anywhere, our products are good, our service has been proven to be the best",
      },
      {
        question: " How CharzIt Work ?",
        answer:
          "You can use the app to find the nearest charging station and book the charging slot before even going to there. the app has easy ui to use and useful info to provide dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.",
      },
      {
        question: "is it CharzIt free ?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vo",
      },
    ];
  return (
    <>
     <h3 className="faq">FAQ</h3>
        <h1 className="faq-heading">Do You Have Any Questions ?</h1>

        <div className="wrapper">
          <div className="accordian">
            {data.map((item, i) => (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>{" "}
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default Faq