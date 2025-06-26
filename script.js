let contacts = [];
let labelColors = {};
let currentLabel = "All";

async function loadContacts() {
  const saved = localStorage.getItem("contacts");
  const savedLabels = localStorage.getItem("labelColors");
  if (saved && savedLabels) {
    contacts = JSON.parse(saved);
    labelColors = JSON.parse(savedLabels);
  } else {
    const res = await fetch("contacts.json");
    const data = await res.json();
    contacts = data.contacts;
    labelColors = data.labelColors;
    localStorage.setItem("contacts", JSON.stringify(contacts));
    localStorage.setItem("labelColors", JSON.stringify(labelColors));
  }
  renderTable();
}

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function renderTable() {
  const tbody = document.getElementById("contacts-body");
  const term = document.getElementById("search").value.toLowerCase();
  tbody.innerHTML = "";

  contacts
    .filter((c) => {
      const matchText =
        c.fullName.toLowerCase().includes(term) ||
        c.email.toLowerCase().includes(term) ||
        c.phone.toLowerCase().includes(term);
      const matchLabel =
        currentLabel === "All" || c.labels.includes(currentLabel);
      return matchText && matchLabel;
    })
    .forEach((c) => {
      const tr = document.createElement("tr");
      tr.dataset.id = c.id;
      tr.innerHTML = `
        <td><img src="${c.avatar}" alt="${c.fullName}"/></td>
        <td>${c.fullName}</td>
        <td><i class="bi bi-envelope me-1"></i>${c.email}</td>
        <td><i class="bi bi-telephone me-1"></i>${c.phone}</td>
        <td><span class="badge" style="background:${
          labelColors[c.labels[0]]
        }">${c.labels[0]}</span></td>
        <td class="text-end">
          <button class="btn btn-sm btn-outline-secondary btn-edit me-2">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger btn-delete">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });

  // Delete actions
  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.closest("tr").dataset.id;
      if (confirm("Delete this contact?")) {
        contacts = contacts.filter((c) => c.id !== id);
        saveContacts();
        renderTable();
      }
    });
  });

  // Edit actions
  document.querySelectorAll(".btn-edit").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.closest("tr").dataset.id;
      window.location.href = `addContact.html?id=${id}`;
    });
  });
}

function setupListeners() {
  document.getElementById("search").addEventListener("input", renderTable);

  document.querySelectorAll(".filter-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelectorAll(".filter-link")
        .forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      currentLabel = link.dataset.label;
      renderTable();
    });
  });

  document.getElementById("add").addEventListener("click", () => {
    window.location.href = "addContact.html";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadContacts();
  setupListeners();
});
