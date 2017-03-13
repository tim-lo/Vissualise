'use strict';

// Add Vissues button to github page
var repoNav = document.querySelector(".reponav.js-repo-nav.js-sidenav-container-pjax");
// console.log("Repository navgation: " + repoNav.childElementCount);
var vTabContainer = document.createElement("span");
vTabContainer.setAttribute("itemscope", null);
vTabContainer.setAttribute("itemtype", "http://schema.org/ListItem");
vTabContainer.setAttribute("itemprop", "itemListElement");
var vTab = document.createElement("a");
vTab.setAttribute("href", "#vissues");
vTab.setAttribute("class", "reponav-item");
vTab.setAttribute("itemprop", "url");
var vTabName = document.createElement("span");
vTabName.setAttribute("itemprop", "name");
vTabName.innerHTML = "Vissues";
vTab.append(vTabName);
vTabContainer.append(vTab);
repoNav.insertBefore(vTabContainer, repoNav.children[3]);

// Clear content container & add graph
var contentWrapper = document.querySelector(".container.new-discussion-timeline.experiment-repo-nav");
while (contentWrapper.hasChildNodes) {
  contentWrapper.removeChild(contentWrapper.lastChild);
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