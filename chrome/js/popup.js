'use strict';

window.onload = init();

function init() {
  var gh_signin_btn = document.querySelector("#gh-signin-btn");
  var gh_auth_url = "https://github.com/login/oauth/authorize?scope=user:email repo&client_id=da3d5188a6954fdd74f6&redirect_uri=https://vissualise.herokuapp.com/auth";
  gh_signin_btn.addEventListener("click", function(e) {
    chrome.tabs.create({ url: gh_auth_url });
    console.log("Current tab URL: " + chrome.tabs.Tab.url);
  });
}