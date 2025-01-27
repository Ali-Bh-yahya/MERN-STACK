const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
app.use(express.json());

// Function to create a random user
const createUser = () => {
  return {
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.number(),
  };
};


// Function to create a random company
const createCompany = () => {
  return {
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  };
};

// API route to generate a new user
app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

// API route to generate a new company
app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

// API route to generate a new user and company
app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  res.json({ user: newUser, company: newCompany });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
