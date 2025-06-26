document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("fname").value.trim();
  const avatar =
    document.getElementById("favatar").value.trim() ||
    "https://i.pravatar.cc/150";
  const email = document.getElementById("femail").value.trim();
  const phone = document.getElementById("fphone").value.trim();
  const labels = Array.from(
    document.querySelectorAll(".form-check-input:checked")
  ).map((cb) => cb.value);
  const birthday = document.getElementById("fbday").value;
  const country = document.getElementById("fcountry").value.trim();
  const timezone = document.getElementById("ftimezone").value.trim();

  const newContact = {
    id: Date.now().toString(),
    fullName,
    avatar,
    email,
    phone,
    labels,
    birthday,
    job: "",
    location: "",
    specialist: "",
    linkedin: "#",
    instagram: "#",
    country,
    countryName: country,
    timezone,
  };

  const stored = JSON.parse(localStorage.getItem("contacts") || "[]");
  stored.push(newContact);
  localStorage.setItem("contacts", JSON.stringify(stored));
  location.href = "charm.html";
});
