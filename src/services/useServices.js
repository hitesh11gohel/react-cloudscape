import { faker } from "@faker-js/faker";
import Axios from "axios";

// Custom hook
const useServices = () => {
  const generateProducts = () => {
    let result = [];
    for (let index = 0; index < 10; index++) {
      const obj = {
        product: faker.commerce.product(),
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
        productDescription: faker.commerce.productDescription(),
        productMaterial: faker.commerce.productMaterial(),
        productAdjective: faker.commerce.productAdjective(),
      };
      result.push(obj);
    }
    return result;
  };

  const generateUser = () => {
    let result = [];
    for (let index = 0; index < 10; index++) {
      const obj = {
        name: faker.person.fullName(),
        bio: faker.person.bio(),
        gender: faker.person.gender(),
        jobTitle: faker.person.jobTitle(),
        jobArea: faker.person.jobArea(),
        jobDescription: faker.person.jobDescriptor(),
      };
      result.push(obj);
    }
    return result;
  };

  const generateVehicles = () => {
    let result = [];
    for (let index = 0; index < 10; index++) {
      const obj = {
        name: faker.vehicle.vehicle(),
        color: faker.vehicle.color(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        manufacturer: faker.vehicle.manufacturer(),
      };
      result.push(obj);
    }
    return result;  
  };

  const generateComments = async () => {
    const response = await Axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/comments",
    });
    return response.data;
  };

  return {
    generateProducts,
    generateUser,
    generateVehicles,
    generateComments,
  };
};

export default useServices;
