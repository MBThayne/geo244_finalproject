'use strict';
const mymap = L.map("map").setView([45.512794, -122.635], 11.26);

// Add Mapbox vector layer
// Replace with your token
const token =
    "pk.eyJ1IjoibXRoYXluZSIsImEiOiJjazVwcWxrankxeXBwM29ud3VkeWlxNzV0In0.xlcnTnNqRXklZW_iq9CoqA";
const style = "mapbox://styles/mthayne/ck7dlk8qz13f41iqihrlkxbuq";
// you can now have access to the gl object
const gl = L.mapboxGL({
    accessToken: token,
    style: style
}).addTo(mymap);

// add marker
// const marker = L.marker([45.5493005, -122.6518219]).addTo(mymap);

// add styled circle
const albina = L.circle([45.5493005, -122.6518219], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const belmont = L.circle([45.515187, -122.622673], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const capitol = L.circle([45.448013, -122.725411], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const central = L.circle([45.519100, -122.683225], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const fairview = L.circle([45.532279, -122.439290], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const gregory = L.circle([45.551640, -122.581353], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const gresham = L.circle([45.500204, -122.432944], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const hillsdale = L.circle([45.479836, -122.694036], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const holgate = L.circle([45.490473, -122.582277], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const hollywood = L.circle([45.537674, -122.621080], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const kenton = L.circle([45.582812, -122.686446], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const midland = L.circle([45.516660, -122.538496], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const northpdx = L.circle([45.562395, -122.671534], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const nw = L.circle([45.535329, -122.699111], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const rockwood = L.circle([45.519505, -122.479051], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const sellwood = L.circle([45.467684, -122.652763], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const stjohns = L.circle([45.590045, -122.751028], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const troutdale = L.circle([45.529666, -122.409550], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);

const woodstock = L.circle([45.478938, -122.612070], {
    color: "#df837d",
    fillColor: "#df837d",
    fillOpacity: 0.5,
    radius: 150
}).addTo(mymap);



let popupAlbina = `
<div class="popup">
<h1>Albina Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Albina,+3605+NE+15th+Ave,+Portland,+OR+97212/@45.549304,-122.6535485,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a73ad8d252db:0x1561712005970dfe!2m2!1d-122.6513598!2d45.549304">Directions</a>
<img src="https://multcolib.org/sites/default/files/styles/library_locations/public/albina_exterior_4.jpg?itok=trkLafha">
</div>
`;
albina.bindPopup(popupAlbina).bindTooltip("<p>Albina Library</p>");

let popupBelmont = `
<div class="popup">
<h1>Belmont Library</h1>
<p>Mon, Fri-Sat 10AM-6PM<br />Tues 10AM-8PM<br />Thurs 12PM-8PM<br />Sun 10AM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Belmont,+1038+SE+Cesar+Estrada+Chavez+Blvd,+Portland,+OR+97214/@45.5152804,-122.6248467,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a0ed2e48fe49:0xfd18fb27e250116a!2m2!1d-122.622658!2d45.5152804">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Belmont_Library_in_Portland.jpg/800px-Belmont_Library_in_Portland.jpg">
</div>
`;
belmont.bindPopup(popupBelmont).bindTooltip("<p>Belmont Library</p>");

let popupCapitol = `
<div class="popup">
<h1>Capitol Hill Library</h1>
<p>Mon-Tues 12PM-8PM<br ?>Wed 10AM-6PM<br />Thurs-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Capitol+Hill,+10723+SW+Capitol+Hwy,+Portland,+OR+97219/@45.448051,-122.7276207,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54950ca1e9986fcd:0x292014bfc363cc5a!2m2!1d-122.725432!2d45.448051">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Capitol_Hill_branch_library.jpg">
</div>
`;
capitol.bindPopup(popupCapitol).bindTooltip("<p>Capitol Hill Library</p>");

let popupCentral = `
<div class="popup">
<h1>Central Library</h1>
<p>Mon 10AM-8PM<br />Tues-Wed 12PM-8PM<br />Thurs-Sat 10AM-6PM<br />Sun 10AM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Central+Library,+801+SW+10th+Ave,+Portland,+OR+97205/@45.5191307,-122.6854151,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54950a1b354fc205:0xf7f0003ef2b65ad6!2m2!1d-122.6832264!2d45.5191307">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Central_Library_%28Portland%2C_Oregon%29.jpg/250px-Central_Library_%28Portland%2C_Oregon%29.jpg">
</div>
`;
central.bindPopup(popupCentral).bindTooltip("<p>Central Library</p>");

let popupFairview = `
<div class="popup">
<h1>Fairview-Columbia Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Fairview+Columbia,+1520+NE+Village+St,+Fairview,+OR+97024/@45.5322825,-122.4415246,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a290e0c32235:0x21a5a4cb89b6815e!2m2!1d-122.4393359!2d45.5322825">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Fairview-Columbia_Library.jpg">
</div>
`;
fairview.bindPopup(popupFairview).bindTooltip("<p>Fairview-Columbia Library</p>");

let popupGregory = `
<div class="popup">
<h1>Gregory Heights Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Gregory+Heights,+7921+NE+Sandy+Blvd,+Portland,+OR+97213/@45.551657,-122.5835697,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a14e3e2623e1:0x155aa3516602701a!2m2!1d-122.581381!2d45.551657">Directions</a>
<img src="https://multcolib.org/sites/default/files/gregoryheights_exterior_4.jpg">
</div>
`;
gregory.bindPopup(popupGregory).bindTooltip("<p>Gregory Heights Library</p>");

let popupGresham = `
<div class="popup">
<h1>Gresham Library</h1>
<p>Mon, Fri-Sat 10AM-6PM<br />Tues 10AM-8PM<br />Thurs 12PM-8PM<br />Sun 10AM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Gresham,+385+NW+Miller+Ave,+Gresham,+OR+97030/@45.5002338,-122.4351339,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x549598f3522f03cf:0x5c737a96cc5aa2b6!2m2!1d-122.4329452!2d45.5002338">Directions</a>
<img src="https://multcolib.org/sites/default/files/styles/library_locations/public/gresham_exterior_5.jpg?itok=PWXHzo24">
</div>
`;
gresham.bindPopup(popupGresham).bindTooltip("<p>Gresham Library</p>");

let popupHillsdale = `
<div class="popup">
<h1>Hillsdale Library</h1>
<p>Mon, Fri-Sat 10AM-6PM<br />Tues-Wed 10AM-8PM<br />Thurs 12PM-8PM<br />Sun 10AM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Hillsdale,+1525+SW+Sunset+Blvd,+Portland,+OR+97239/@45.479854,-122.6962867,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54950b00a705b4c9:0x9ac5fc32c5ee2976!2m2!1d-122.694098!2d45.479854">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Hillsdale_Library_-_Portland%2C_Oregon.JPG">
</div>
`;
hillsdale.bindPopup(popupHillsdale).bindTooltip("<p>Hillsdale Library</p>");

let popupHolgate = `
<div class="popup">
<h1>Holgate Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Holgate,+7905+SE+Holgate+Blvd,+Portland,+OR+97206/@45.49051,-122.5844337,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a039493ccbbf:0xa623316539bec5e4!2m2!1d-122.582245!2d45.49051">Directions</a>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSs_UOeo2dnumZxQDJjyUmyOCakTxxkIO7i1jwdLwOmVpu6afKG">
</div>
`;
holgate.bindPopup(popupHolgate).bindTooltip("<p>Holgate Library</p>");

let popupHollywood = `
<div class="popup">
<h1>Hollywood Library</h1>
<p>Mon, Fri-Sat 10AM-6PM<br />Tues 10AM-8PM<br />Wed-Thurs 12PM-8PM<br />Sun 10AM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Hollywood,+4040+NE+Tillamook+St,+Portland,+OR+97212/@45.5376813,-122.6232771,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a0d71806a515:0x4a1f7ba85e5d8a36!2m2!1d-122.6210884!2d45.5376813">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hollywood_Library_in_Portland.jpg/240px-Hollywood_Library_in_Portland.jpg">
</div>
`;
hollywood.bindPopup(popupHollywood).bindTooltip("<p>Hollywood Library</p>");

let popupKenton = `
<div class="popup">
<h1>Kenton Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Kenton,+8226+N+Denver+Ave,+Portland,+OR+97217/@45.582824,-122.6886407,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a7b6d14796c7:0xa4f67fb5cda4ef52!2m2!1d-122.686452!2d45.582824">Directions</a>
<img src="https://multcolib.org/sites/default/files/styles/library_locations/public/Kenton_1_0.jpg?itok=NIPX6r7f">
</div>
`;
kenton.bindPopup(popupKenton).bindTooltip("<p>Kenton Library</p>");

let popupMidland = `
<div class="popup">
<h1>Midland Library</h1>
<p>Closed for upgrades and improvements</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Midland,+805+SE+122nd+Ave,+Portland,+OR+97233/@45.5166834,-122.5406772,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a191b3b746ff:0x518df9e9e6ed4c27!2m2!1d-122.5384885!2d45.5166834">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Midland_Library_in_Portland.jpg/240px-Midland_Library_in_Portland.jpg">
</div>
`;
midland.bindPopup(popupMidland).bindTooltip("<p>Midland Library</p>");

let popupNorthpdx = `
<div class="popup">
<h1>North Portland Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+North+Portland,+512+N+Killingsworth+St,+Portland,+OR+97217/@45.562454,-122.6736957,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a70e46295397:0x3037dd0f0612f195!2m2!1d-122.671507!2d45.562454">Directions</a>
<img src="https://multcolib.org/sites/default/files/styles/library_locations/public/northportland_exterior_4.jpg?itok=wzoIgmI3">
</div>
`;
northpdx.bindPopup(popupNorthpdx).bindTooltip("<p>North Portland Library</p>");

let popupNw = `
<div class="popup">
<h1>Northwest Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Northwest,+2300+NW+Thurman+St,+Portland,+OR+97210/@45.5353341,-122.7013074,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x549509e4339d1621:0xaae359b160017b9d!2m2!1d-122.6991187!2d45.5353341">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Northwest_Library_-_Portland%2C_Oregon.JPG/240px-Northwest_Library_-_Portland%2C_Oregon.JPG">
</div>
`;
nw.bindPopup(popupNw).bindTooltip("<p>Northwest Library</p>");

let popupRockwood = `
<div class="popup">
<h1>Rockwood Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Rockwood,+17917+SE+Stark+St,+Portland,+OR+97233/@45.51952,-122.4812287,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a26dac68c2db:0xf7c5d8c00f095c1a!2m2!1d-122.47904!2d45.51952">Directions</a>
<img src="https://multcolib.org/sites/default/files/styles/library_locations/public/rockwood_exterior.jpg?itok=iwa5HiAD">
</div>
`;
rockwood.bindPopup(popupRockwood).bindTooltip("<p>Rockwood Library</p>");

let popupSellwood = `
<div class="popup">
<h1>Sellwood Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Sellwood-Moreland,+7860+SE+13th+Ave,+Portland,+OR+97202/@45.4676914,-122.6549533,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54950ac34d7322cb:0x2b1978840d983cf8!2m2!1d-122.6527646!2d45.4676914">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sellwood-Moreland_Library_in_Portland.jpg/240px-Sellwood-Moreland_Library_in_Portland.jpg">
</div>
`;
sellwood.bindPopup(popupSellwood).bindTooltip("<p>Sellwood Library</p>");

let popupStjohns = `
<div class="popup">
<h1>St. Johns Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+St.+Johns,+7510+N+Charleston+Ave,+Portland,+OR+97203/@45.590054,-122.7532207,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a800f7c00b7f:0xbf6f2fb332a3c7c4!2m2!1d-122.751032!2d45.590054">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/St._Johns_Library_in_Portland.jpg/300px-St._Johns_Library_in_Portland.jpg">
</div>
`;
stjohns.bindPopup(popupStjohns).bindTooltip("<p>St. Johns Library</p>");

let popupTroutdale = `
<div class="popup">
<h1>Troutdale Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Troutdale,+2451+SW+Cherry+Park+Rd,+Troutdale,+OR+97060/@45.529595,-122.4118507,17z/data=!3m1!5s0x5495a2a778ebf23f:0xb825fcecfc3f9410!4m8!4m7!1m0!1m5!1m1!1s0x54959809fe451391:0x871cf78d967a131a!2m2!1d-122.409662!2d45.529595">Directions</a>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Troutdale_Library.jpg/240px-Troutdale_Library.jpg">
</div>
`;
troutdale.bindPopup(popupTroutdale).bindTooltip("<p>Troutdale Library</p>");

let popupWoodstock = `
<div class="popup">
<h1>Woodstock Library</h1>
<p>Mon-Tues 12PM-8PM<br />Wed-Sat 10AM-6PM<br />Sun 12PM-5PM</p>
<a href="https://www.google.com/maps/dir//Multnomah+County+Library+-+Woodstock,+6008+SE+49th+Ave,+Portland,+OR+97206/@45.478946,-122.6142797,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a009e7c5ed5f:0x3ecd510ea1ccb189!2m2!1d-122.612091!2d45.478946">Directions</a>
<img src="https://multcolib.org/sites/default/files/styles/library_locations/public/woodstock_exterior_4.jpg?itok=HTA-yKxO">
</div>
`;
woodstock.bindPopup(popupWoodstock).bindTooltip("<p>Woodstock Library</p>");

