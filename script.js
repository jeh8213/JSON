var contentGridElement = document.getElementById('contentSection');

let jsonDatabase = [
  {
    "title" : "CONTROLLER",
    "image_url" : "https://static.wikia.nocookie.net/valorant/images/0/06/Omen_artwork.png/revision/latest?cb=20200602020233",
    "bg_color" : "#1b2140",
    "role" : "Controllers are experts at controlling the battlefield by the use of smoke screens. Their abilities aim to disrupt their opponents’ sightlines whilst providing cover for teammates as they take control of an area.",
    "agents" : ["Omen", "Brimstone", "Viper", "Astra"]
  },

  {
    "title" : "SENTINEL",
    "image_url" : "https://static.wikia.nocookie.net/valorant/images/1/1e/Sage_artwork.png/revision/latest?cb=20200602020306",
    "bg_color" : "#ff4545",
    "role" : "Sentinels are defensive experts that have abilities that manipulate the battlefield, lock-down areas of contention and provide utility such as healing.",
    "agents" : ["Sage", "Killjoy", "Cypher"]
  },

  {
    "title" : "INITIATOR",
    "image_url" : "https://static.wikia.nocookie.net/valorant/images/6/61/Sova_artwork.png/revision/latest?cb=20200602020314",
    "bg_color" : "#1b2140",
    "role" : "Initiators excel at gathering information and controlling the movements of opponents through the use of their abilities.",
    "agents" : ["Sova", "Skye", "Breach"]
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementJson(jsonDatabase[i]);
}


function createElementJson(incomingJson) {
  let contentElement = document.createElement("DIV");
  contentElement.style.backgroundColor = incomingJson['bg_color'];
  contentElement.classList.add('contentItem');

  let titleElement = document.createElement("H2");
  titleElement.classList.add('contentTitle');
  titleElement.innerHTML = incomingJson['title'];
  contentElement.appendChild(titleElement);

  let imageElement = document.createElement("IMG");
  imageElement.classList.add('contentImage');
  imageElement.src = incomingJson['image_url'];
  contentElement.appendChild(imageElement);

  let listHeaderElement = document.createElement("H3");
  listHeaderElement.innerHTML = "Agents: ";
  contentElement.appendChild(listHeaderElement);

  let agentListElement = document.createElement("UL");
  contentElement.appendChild(agentListElement);

  let descriptionHeaderElement = document.createElement("H3");
  descriptionHeaderElement.innerHTML = "Description of Role: ";
  contentElement.appendChild(descriptionHeaderElement);

  let descriptionElement = document.createElement("DIV");
  descriptionElement.innerHTML = incomingJson['role'];
  descriptionElement.classList.add('roleDesc');
  contentElement.appendChild(descriptionElement);

  for(var i = 0; i < incomingJson['agents'].length; i++){
    let agentItem = document.createElement("LI");
    agentItem.innerHTML = incomingJson['agents'][i];
    agentListElement.appendChild(agentItem);
  }
  contentGridElement.appendChild(contentElement);
}
