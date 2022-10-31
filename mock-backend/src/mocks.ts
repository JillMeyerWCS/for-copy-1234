import { faker } from "@faker-js/faker";

const mockId = () => faker.datatype.uuid();
const mockTopLevelDomain = () => faker.internet.domainSuffix();

const mockList = <T>(dataFactory: () => T, maxLength = 10): T[] => {
  const size = faker.datatype.number({
    min: 1,
    max: maxLength,
  });
  return Array(size).fill(0, 0, size).map(dataFactory);
};

const mockDateTime = () => faker.date.recent(10).toISOString();
const mockBranding = () =>
  faker.helpers.arrayElement(["AWGK", "EDOOLI", "FEGA"]);

const mockCompany = () => {
  let companyname = faker.company.name();
  return {
    uuid: mockId(),
    name: companyname,
    address: faker.address.streetAddress(),
    email: "management@" + companyname + "." + mockTopLevelDomain(),
    registration: "",
    branding: mockBranding(),
    projects: mockList(mockProject),
  };
};

const mockUser = () => {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let companyname = faker.internet.domainName();
  return {
    uuid: mockId(),
    firstName,
    lastName,
    email: `${firstName}.${lastName}@${companyname}.${mockTopLevelDomain()}`,
  };
};

const mockProject = () => {
  return {
    uuid: mockId(),
    title: faker.commerce.product(),
    projectNumber: faker.lorem.word(),
    budget: faker.commerce.price(),
    customer: faker.commerce.department(),
    address: faker.address.streetAddress(),
    owner: mockUser(),
    employees: mockList(mockUser),
  };
};

export const mocks = {
  Branding: mockBranding,
  Company: mockCompany,
  DateTime: mockDateTime,
  User: mockUser,
  Project: mockProject,
  Query: {
    companies: () => mockList(mockCompany),
    projects: () => mockList(mockProject),
  },
};
