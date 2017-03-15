'use strict';

chrome.runtime.onConnect.addListener((port) => {
  console.assert(port.name == "thetunnel");
  port.onMessage.addListener((msg) => {
    if (msg.body == "Hello backend!")
      port.postMessage({body: "Hello frontend!"});
    console.log("Frontend successfully connected!");
  })
});

