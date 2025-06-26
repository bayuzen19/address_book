const contacts = [
  {
    id: 1,
    fullName: "Bayuzen Ahmad",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    email: "bayuzenahmad1@mail.com",
    phoneNumber: "+6281234000001",
    labels: ["Friend"],
    birthday: new Date("1990-01-15"),
    job: {
      title: "Software Engineer",
      specialist: "AI",
    },
    company: {
      name: "Tech Solutions",
      department: "Development",
      location: "Remote",
    },
    linkedinUrl: "https://linkedin.com/in/bayuzenahmad",
    instagramUrl: "https://instagram.com/bayuzenahmad",
    address: {
      city: "Tangerang",
      countryCode: "ID",
      countryName: "Indonesia",
    },
    timezone: "Asia/Jakarta",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    email: "janesmith2@mail.com",
    phoneNumber: "+6281234000002",
    labels: ["Work"],
    birthday: new Date("1985-02-20"),
    job: {
      title: "Manager",
      specialist: "Marketing",
    },
    company: {
      name: "Acme Corp",
      department: "Management",
      location: "London, UK",
    },
    linkedinUrl: "https://linkedin.com/in/janesmith2",
    instagramUrl: "https://instagram.com/janesmith2",
    address: {
      city: "London",
      countryCode: "GB",
      countryName: "United Kingdom",
    },
    timezone: "Europe/London",
  },
  {
    id: 3,
    fullName: "Michael Johnson",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    email: "mjohnson3@mail.com",
    phoneNumber: "+6281234000003",
    labels: ["Customer"],
    birthday: new Date("1978-03-10"),
    job: {
      title: "Consultant",
      specialist: "Finance",
    },
    company: {
      name: "FinAdvisors",
      department: "Consulting",
      location: "Berlin, Germany",
    },
    linkedinUrl: "https://linkedin.com/in/mjohnson3",
    instagramUrl: "https://instagram.com/mjohnson3",
    address: {
      city: "Berlin",
      countryCode: "DE",
      countryName: "Germany",
    },
    timezone: "Europe/Berlin",
  },
  {
    id: 4,
    fullName: "Muh. Fullan",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    email: "fullan4@mail.com",
    phoneNumber: "+6281234000100",
    labels: ["Family"],
    birthday: new Date("1999-12-31"),
    job: {
      title: "Student",
      specialist: "WebDev",
    },
    company: {
      name: "Universitas Indonesia",
      department: "Computer Science",
      location: "Jakarta, Indonesia",
    },
    linkedinUrl: "https://linkedin.com/in/fullan4",
    instagramUrl: "https://instagram.com/fullan4",
    address: {
      city: "Jakarta",
      countryCode: "ID",
      countryName: "Indonesia",
    },
    timezone: "Asia/Jakarta",
  },
];

function displayContacts() {
  contacts.forEach((contact) => {
    console.log(`
ID: ${contact.id}
Name: ${contact.fullName}
Email: ${contact.email}
Phone: ${contact.phoneNumber}
Labels: ${contact.labels.join(", ")}
Birthday: ${contact.birthday.toLocaleDateString()}
Job: ${contact.job.title} (${contact.job.specialist})
Company: ${contact.company.name} (${contact.company.department})
Location: ${contact.company.location}
LinkedIn: ${contact.linkedinUrl}
Instagram: ${contact.instagramUrl}
Address: ${contact.address.city}, ${contact.address.countryName}
Timezone: ${contact.timezone}
    `);
  });
}

displayContacts();
