const a = [1, 2, 3];
const b = [3, 2, 1];

function compareTriplets(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      console.log("Alice is awarded 1 point.");
    } else if (a[i] < b[i]) {
      console.log("Bob is awarded 1 point.");
    } else {
      console.log("neither person receives a point.");
    }
  }
}

compareTriplets(a, b);
