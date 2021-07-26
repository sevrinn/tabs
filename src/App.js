import React, {useState} from 'react';
import './App.css';



function App() {
  const [tab, setTab] = useState("");
  const [tabList, setTabList] = useState([
                              {label:"Tab 1", content:"{label} content is showing here"}, 
                              {label:"Tab 2", content:"{label} content is showing here"},
                              {label:"Tab 3", content:"{label} content is showing here"},]);
  
  return (
    <div className="App">
    <h1>Tabs</h1>
    <p>Click the tabs to see the corresponding content:)</p>
    {
      tabList.map((tab, index) => {
        
        return ( <button 
          key={index}
          
          >
          {tab.label}
          </button>
      );
      })
    }
      

    </div>
  );
}

export default App;
