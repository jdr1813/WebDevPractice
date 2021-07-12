const userList = [];

let userInput = "";

while (userInput !== "quit" && userInput !== "q") {
  userInput = prompt("What would you like to do?");
  if (userInput === "quit") {
    console.log("You quit the app");
    break;
  } else if (userInput === "new") {
    let newItem = prompt("What would you like to add to the list?");
    userList.push(newItem);
    console.log(`${newItem} added to the list!`);
  } else if (userInput === "delete") {
    let deleteItem = parseInt(
      prompt("What index item would you like to delete?")
    );
    userList.splice(deleteItem, 1);
  } else if (userInput === "list") {
    console.log(`*********`);
    for (let index = 0; index < userList.length; index++) {
      console.log(index, userList[index]);
    }
  }
}

console.log("OK, YOU QUIT THE APP");
