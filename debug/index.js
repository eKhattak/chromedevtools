var foo = "foo";

// Call Stack
function fnOne() {
  fnTwo();
}

function fnTwo() {
  console.error("Debug Your Code");
  fnThree();
}

function fnThree() {
  foo = "bar";
  console.log("End of Functions");
  console.warn("Something is Fishy");
  console.error("Debug Your Code");
  //   debugger;
}

fnOne();

// fetch Breakpoint
fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
