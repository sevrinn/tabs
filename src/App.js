import React, {useState} from 'react';
import './App.css';





function App() {
  const [tab, setTab] = useState("");
  const [tabList, setTabList] = useState([
                              {label:"Tab 1", content: "Tab 1 content is showing here."},
                              {label:"Tab 2", content: "Tab 2 content is showing here."},
                              {label:"Tab 3", content: "Tab 3 content is showing here."},
                              {label:"Tab 4", content: "Tab 4 content is showing here."}
                              ,]);
  const [display, setDisplay] = useState("displaying shit");

  
  // - - - - - - D I S P L A Y  C O N T E N T - - - - - - //
  const handleDisplayContent = (e) => {
  //  console.log("Hi there, babe. I'm correctly connected");
  //  console.log(e);
   tabList.map((tab, idx) => {
     if((tab.label) === (e.target.innerText)) {
      console.log(tab.content);
      setDisplay(tab.content);
     }
     
   })
  }
   

  
  return (
    <div className="App">
    <h1>Tabs</h1>
    <p>Click the tabs to see the corresponding content:)</p>
    {
      tabList.map((tab, index) => {
        
        return ( <button 
          key={index}
          onClick={(e) => handleDisplayContent(e)}
          >
          {tab.label}
          </button>
      );
      })
    }
    {
      <div className="contentDisplayArea">{display}</div>
    }
      

    </div>
  );
}

export default App;
