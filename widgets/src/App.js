import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from './components/Header';

const App = () => {
  const items = [
    { title: "What is React", content: "React is a framework" },
    { title: "Why use React", content: "React is a js" },
    { title: "How to use React", content: "just use" },
  ];

  const options = [
    {
      label: "The color red",
      value: "red",
    },
    {
      label: "The color green",
      value: "green",
    },
    {
      label: "The color blue",
      value: "blue",
    },
  ];

  const [selected, setSelected] = useState(options[0]);
  // const [showDrop, setShowDrop] = useState(true);
  const showAccordion = () => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
  };

  // show...是每個分頁的作法
//   const showTranslate = () => {
//     if (window.location.pathname === "/translate") {
//       return <Translate />;
//     }
//   };
//   const showdropDown = () => {
//     if (window.location.pathname === "/dropdown") {
//       return (
//         <Dropdown
//           options={options}
//           selected={selected}
//           onSelectedChange={setSelected}
//         />
//       );
//     }
//   };
//   const showSearch = () => {
//     if (window.location.pathname === "/search") {
//       return <Search />;
//     }
//   };

  return (
    <div>
        <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

      {/* 顯示在每個分頁 */}
      {/* {showAccordion()}
        {showdropDown()}
        {showTranslate()}
        {showSearch()} */}

      {/* <Translate /> */}
      {/* <button onClick={()=> {setShowDrop(!showDrop)}}>toggle dropdown</button> */}
      {/* {showDrop ? 
                    <Dropdown 
                    options={options} 
                    selected={selected}
                    onSelectedChange={setSelected}
                    />
                    :
                    null
                } */}
      {/* <Search /> */}
      {/* <Accordion items={items}/> */}
    </div>
  );
};

export default App;
