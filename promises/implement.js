// implementation using promises
function walkdog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`You walk the 🐕‍🦺🐕`);
    }, 1500);
  });
}

function clearKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`You clear the Kitchen 🔪`);
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(` You take out the trash 🚮`);
    }, 500);
  });
}

// now use method chaining

walkdog().then((value) => {
  console.log(value);
  return clearKitchen().then((value) => {
    console.log(value);
    return takeOutTrash().then((value) => {
      console.log(value);
      console.log(`You finished all the chores`);
    });
  });
});
