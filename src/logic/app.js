import { React } from "react";

import ReactDOM from "react-dom";

import { Button } from "src/components/Button";

import { verifySound } from "./utils";

export function initApp(dataInfo) {
  let dataURL =
    window.location.search && window.location.search.split("data=").length > 1
      ? window.location.search.split("data=")[1]
      : undefined;
  if (dataURL === undefined) {
    dataURL = dataInfo;
  }

  loadJSON(
    dataURL,
    function (data) {
      debugger;
      return data;
      parseData(data);
    },
    function (xhr) {
      console.error("Error: " + xhr);
    }
  );
}

function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) success(JSON.parse(xhr.responseText));
      } else {
        debugger;
        if (error) error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}
