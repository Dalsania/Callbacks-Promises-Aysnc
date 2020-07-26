const helloPosts = (blocke) => {
  console.log("Getting Posts");
};

console.log("hello showing github to sahil");

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("creating posts");
      resolve();
    }, 2000);
  });
};

helloWorld().then(helloPosts);

async function getJson() {
  await fetch("https://jsonplaceholder.typicode.com/todos/101")
    .then((respone) => respone.json())
    .then((json) => {
      console.log(json);
      let h1 = document.getElementById("h1");
      h1.innerHTML = json.title;
    });
}

function apiRequest() {
  console.log("API Request");
  getJson().then(() => console.log("done"));
}

apiRequest();
