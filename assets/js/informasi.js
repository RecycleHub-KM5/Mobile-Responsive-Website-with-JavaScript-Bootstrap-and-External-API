function showForm() {
  document.getElementById("formulir").style.display = "block";
}
function hideForm() {
  document.getElementById("formulir").style.display = "none";
}

function peringatan() {
  alert("Belum jadi");
}

function submit(event) {
  event.preventDefault();
  var warningDiv = document.getElementById("warning");

  if (validateFormData(handleGetFormData())) {
    warningDiv.style.display = "none";
    warningDiv.innerText = "";
    hideForm();
    alert("Berhasil isi data");
  } else {
    warningDiv.style.display = "block";
    warningDiv.innerText = "Periksa form anda sekali lagi";
  }
}

function validateFormData(formData) {
  var zipCode = formData.zipCode;
  var status = formData.status;

  if (formData && isNumber(zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}

function handleGetFormData() {
  var nama = document.getElementById("name").value;
  var city = document.getElementById("city").value;
  var email = document.getElementById("email").value;
  var zipCode = document.getElementById("zip-code").value;
  var status = document.getElementById("status").checked;

  return {
    name: nama,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status,
  };
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  if (!handleGetFormData().status) {
    return false;
  }

  return true;
}

var formu = document.getElementById("formulir");
formu.addEventListener("submit", submit);
