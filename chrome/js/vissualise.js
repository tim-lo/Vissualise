'use strict';

// Add Vissues button to github page
var repoNav = document.querySelector(".reponav.js-repo-nav.js-sidenav-container-pjax");
console.log(repoNav.childElementCount + " tabs");
var vTabContainer = document.createElement("span");
vTabContainer.setAttribute("itemscope", null);
vTabContainer.setAttribute("itemtype", "http://schema.org/ListItem");
vTabContainer.setAttribute("itemprop", "itemListElement");
var vTab = document.createElement("a");
vTab.setAttribute("href", "#vissues");
vTab.setAttribute("class", "reponav-item v-reponav-item");
vTab.setAttribute("itemprop", "url");
var vTabIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
vTabIcon.setAttribute("aria-hidden", "true");
vTabIcon.setAttribute("class", "octicon v-tab-icon");
vTabIcon.setAttribute("height", "16");
vTabIcon.setAttribute("viewBox", "0 0 80 80");
vTabIcon.setAttribute("width", "16");
vTabIcon.innerHTML = "<path fillrule='evenodd' d='M59.38,12.34A10,10,0,0,0,50.08,26L38.34,37.73a9.9,9.9,0,0,0-7.29,0L19.3,26a10,10,0,1,0-5.66,5.66L25.39,43.39a10,10,0,1,0,18.61,0L55.73,31.65A10,10,0,1,0,59.38,12.34Z'></path>";
var vTabName = document.createElement("span");
vTabName.setAttribute("itemprop", "name");
vTabName.innerHTML = "Vissues";
var vTabMeta = document.createElement("meta");
vTabMeta.setAttribute("itemprop", "position");
vTabMeta.setAttribute("position", "4");
vTab.appendChild(vTabIcon);
vTab.appendChild(vTabName);
vTab.appendChild(vTabMeta);
vTabContainer.appendChild(vTab);
repoNav.insertBefore(vTabContainer, repoNav.children[3]);

// Clear content container
var contentWrapper = document.querySelector(".container.new-discussion-timeline.experiment-repo-nav");
while (contentWrapper.childElementCount > 0) {
  contentWrapper.lastElementChild.remove();
}
var contentContainer = document.createElement("div");
contentContainer.setAttribute("class", "repository-content");
contentWrapper.append(contentContainer);
console.log("You should be able to see graphs on this page!");
var t1 = document.createElement("div");
t1.setAttribute("id", "myDiv");
var t2 = document.createElement("div");
t2.setAttribute("id", "hoverinfo");
t2.setAttribute("style", "margin-left:80px;");
contentContainer.append(t1);
contentContainer.append(t2);

// Graph time!
var myPlot = document.getElementById('myDiv');
var hoverInfo = document.getElementById('hoverinfo');
var d3 = Plotly.d3;
var N = 16;
var x = d3.range(N);
var y1 = d3.range(N).map( d3.random.normal() );
var y2 = d3.range(N).map( d3.random.normal() );
var data = [ { x:x, y:y1, type:'scatter', name:'Trial 1',
    mode:'markers', marker:{size:16} },
    { x:x, y:y2, type:'scatter', name:'Trial 2',
    mode:'markers', marker:{size:16} } ];
var layout = { 
    hovermode:'closest',
    title:'Hover on Points'
  };

Plotly.plot('myDiv', data, layout);

myPlot.on('plotly_hover', function(data){
    var infotext = data.points.map(function(d){
      return (d.data.name+': x= '+d.x+', y= '+d.y.toPrecision(3));
    });
  
    hoverInfo.innerHTML = infotext.join('<br/>');
})
.on('plotly_unhover', function(data){
    hoverInfo.innerHTML = '';
});