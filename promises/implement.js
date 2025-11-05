// implementation using promises
function walkdog() {
  const dogWalked = true;
  if (dogWalked) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`You walk the 🐕‍🦺🐕`);
      }, 1500);
    });
  } else {
    reject("You did not walk the dog");
  }
}

function clearKitchen() {
  const kitchenCleared = true;
  if (!kitchenCleared) {
    reject("You did not clear the kitchen");
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`You clear the Kitchen 🔪`);
      }, 2500);
    });
  }
}

// function takeOutTrash() {
//   const trashEmpty = true;
//   if (trashEmpty){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(` You take out the trash 🚮`);
//     }, 500);
//   });
//   }else{
//     reject('You did not clear the trash');
//   }

// }

function takeOutTrash() {
  const trashEmpty = true;
  return (
    trashEmpty &&
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("You take out the trash 🚮");
      }, 500) || Promise.reject("You did not clear the trash");
    })
  );
}

// now use method chaining

walkdog()
  .then((value) => {
    console.log(value);
    return clearKitchen().then((value) => {
      console.log(value);
      return takeOutTrash().then((value) => {
        console.log(value);
        console.log(`You finished all the chores`);
      });
    });
  })
  .catch((error) => console.error(error));

// learn:Use Ternary Operator
