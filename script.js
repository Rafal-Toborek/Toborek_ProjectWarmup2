const choicesContainer = document.getElementById("choices-container");
const imageElement = document.getElementById("image");
const textElement = document.getElementById("text");


function describeRoom(room) {
    if (room === "living room") {
        console.log("A place to relax and watch TV.");
    }
    else if (room === "kitchen") {
        console.log("A place to cook and eat meals.");
    }
    else if (room === "bedroom") {
        console.log("A place to sleep and rest.");
    }
    else {
        console.log("Unknown room.");
    }
}





const outside = {
    image: "./images/outside.jpg",
    description: "A place that used to be a beautiful garden now looks abandoned. There are clues pointing to the previous owners but they have since left. For now this place stays as a quiet memory of the past.",
    choises: "go to hallway"
}

const hallway = {
    image: "./images/hallway.jpg",
    description: "A place that used to be a busy hallway now looks empty and quiet. There are clues pointing to the previous owners but they have since left. For now this place stays as a quiet memory of the past.",
    choises: ["go to kitchen", "go to livingroom"]
}

const livingroom = {
    image: "./images/livingroom.jpg",
    description: "A place that used to be a cozy living room now looks abandoned. There are clues pointing to the previous owners but they have since left. For now this place stays as a quiet memory of the past.",
    choises: "go to hallway"
}

const kitchen = {
    image: "./images/kitchen.jpg",
    description: "A place that used to be used to cook meals now looks burned and abandoned. There are clues pointing to the previous owners but they have since left. For now this place stays as a quiet memory of the past.",
    choises: "go to livingroom"
}



const storyNodes = [outside, hallway, livingroom, kitchen];

function displayNode(index) {
    storyNodes[index]
    imageElement.src = storyNodes[index].image;
    textElement.textContent = storyNodes[index].description;   
}

displayNode(3);