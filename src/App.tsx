import React from "react";

import { useEffect, useState, useRef } from "react";

import "./App.css";

import { MyGlobalContext, useGlobalContext } from "./hooks/useGlobalContext";

import { initApp } from "./logic/app";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Button } from "./components/Button";

import { SharePanel } from "src/components/Share/SharePanel";

function App() {
  const firstRender = useRef(true);

  const [data, setDataJson] = useState(null);

  const [copy, setTitle] = useState<string>("Admin");
  const [hashAudiosHowl, setHashAudiosHowl] = useState<any>({});

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.log("First render");
    const fetchData = async () => {
      const data = await fetch(
        "https://raw.githubusercontent.com/Xatpy/thesoundstable/main/ElXokas/data.json"
      );
      // convert data to json
      const json = await data.json();
      return json;
    };
    // call the function
    fetchData()
      .then((e) => {
        console.log("vamos", e);
        setDataJson(e);
        setTitle(e.title);
      })
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <MyGlobalContext.Provider
      value={{
        title: copy,
        setTitle: setTitle,
        hashAudiosHowl,
        setHashAudiosHowl,
      }}
    >
      <Header title="The Sounds Table" />
      <SharePanel />
      <Main data={data} />
    </MyGlobalContext.Provider>

    /* <Button
        id="foo"
        text="text"
        urlSound="https://raw.githubusercontent.com/Xatpy/SoundsTable/master/ElXokas/callate.mp3"
      /> */
  );
}

export default App;
