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
  const [display, setDisplay] = useState("Tab content will display here.");

  
  // - - - - - - D I S P L A Y  C O N T E N T - - - - - - //
  //once a tab is clicked, handleDisplayContent is called, taking in the event as an arg
  //1.we map throught tablist, and if the tabs label equals the innerText the of
  //target clicked,
      //2. setDisplay state to equal the tab.content
  const handleDisplayContent = (e) => {
  
   tabList.map((tab, idx) => {
     if((tab.label) === (e.target.innerText)) {
      console.log(tab.content);
      setDisplay(tab.content);

     }
     
   })
  }
   

  // - - - - - - A p p  R E T U R N S - - - - - - //
  //1. prints h1 tand p to page
  //2. maps through tabList inside of {}, returning tab labels wrapped in button tags so
        //they print to the page automatically. These are the "Tabs"
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
      //once a tab is clicked, the content will display here
      <div className="contentDisplayArea">{display}</div>
    }
      

    </div>
  );
}

export default App;
