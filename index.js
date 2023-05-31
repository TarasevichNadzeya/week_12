const nameInput = document.getElementById('name');
const avatarInput = document.querySelector("#avatar");
const textarea = document.querySelector("#comment");
const button = document.getElementById('send');
const messages = document.querySelector(".messages");


// const checkName = () => {
//     const name = nameInput.value;
//     const userName = name.trim().split(" ");
//     const changedName = [];

//     userName.forEach((element) => {
//         let newName = element[0].toUpperCase() + element.slice(1).toLowerCase();
//         changedName.push(newName);
//     });

//     const nameFormatted = changedName.join(" ");
//     return nameFormatted;
// };

// nameInput.addEventListener("change", () => {
//     nameInput.value = checkName();
// });
// console.log(checkName)



function formatName(str) {
    let result = str.trim();
    if (result === "") {
        return "Аноним";
    }
    let name = result.spLit(" ");
    userName = userName.map(
        (element) => element[0].toUpperCase() + element.slice(1).toLowerCase()
    );
    return userName.join(" ");
}
nameInput.addEventListener("change", () => {
    nameInput.value = checkName();
});



function showImage(src) {
    let image = document.createElement("img");
    image.src = src;
    avatar.append(image);
}


const checkMessage = (spam) => {
    const str = spam.replace(/viagra|XXX/gi, '***');
    return str;
};

const createMessage = () => {
    const message = document.createElement("div");
    message.className = "message";
    messages.prepend(message);
}


const messageUserName = document.createElement("p");
messageUserName.className = "message_name";
if (nameInput.value !== "") {
    messageUserName.textContent = checkName();
} else {
    messageUserName.textContent = "Username";
}
message.append(messageUserName);


const messageText = document.createElement("p");
messageText.className = "message_text";
messageText.innerHTML = checkMessage(textarea.value);
message.append(messageText);
nameInput.value = "";
avatarInput.value = "";


sendBtn.addEventListener("click", () => {
    createMessage();
    textarea.value = "";
});


// Задание со *//
function deleteTags(str) {
    var regex = /(<([^>]+)>)/g,
        result = str.replace(regex, '');
    return result;
}
console.log(deleteTags(str));
document.writeln(deleteTags(str))
