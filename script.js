function downloadMovie1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Movie 1 downloaded"), 1000);
  });
}

function downloadMovie2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Movie 2 downloaded"), 2000);
  });
}

function downloadMovie3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Movie 3 downloaded"), 3000);
  });
}

// Part A 
async function downloadSequential() {
  console.log("Starting sequential downloads");
  const movie1 = await downloadMovie1();
  console.log(movie1);

  const movie2 = await downloadMovie2();
  console.log(movie2);

  const movie3 = await downloadMovie3();
  console.log(movie3);

  console.log("All movies downloaded sequentially!");
}

// Part B 
async function downloadParallel() {
  console.log("Starting parallel downloads");
  const results = await Promise.all([
    downloadMovie1(),
    downloadMovie2(),
    downloadMovie3()
  ]);
  console.log("All movies downloaded in parallel:", results);
}

// Part C 
async function downloadFastest() {
  console.log("Starting race ");
  const fastest = await Promise.race([
    downloadMovie1(),
    downloadMovie2(),
    downloadMovie3()
  ]);
  console.log("Fastest movie - ", fastest);
}

// Run them to test:
downloadSequential()
  .then(() => downloadParallel())
  .then(() => downloadFastest());

