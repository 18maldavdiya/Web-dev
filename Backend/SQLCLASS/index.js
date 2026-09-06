const { faker } = require("@faker-js/faker");

function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}

let user = createRandomUser();

console.log(user);