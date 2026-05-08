const supportForm = document.getElementById("supportForm");
const message = document.getElementById("message");

if (supportForm) {
    supportForm.addEventListener("submit", function(event) {
        event.preventDefault();

        message.innerHTML = "Your support request has been submitted successfully.";

        supportForm.reset();
    });
}


// Dropdown search bar - redirect to selected page
document.getElementById('goBtn').addEventListener('click', function() {
  const selectedPage = document.getElementById('pageSelect').value;
  if (selectedPage) {
    window.location.href = selectedPage;
  }
}); // <-- you were missing this closing });

document.getElementById('pageSelect').addEventListener('change', function() {
  if (this.value) {
    window.location.href = this.value;
  }
});