const helloPlanet = (blocke) => {
  console.log("Getting Posts");
};

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("creating posts");
      resolve();
    }, 2000);
  });
};

helloWorld().then(helloPlanet);
