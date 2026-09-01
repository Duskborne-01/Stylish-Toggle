document.onload = function () {
  let cb = document.getElementById("cb");
  cb.checked = true;
};

let onCbClicked = function (checked) {
  console.log("on click checked = ", checked);
};

let onCbClickChanged = function (checked) {
  console.log("check change = ", checked);
};