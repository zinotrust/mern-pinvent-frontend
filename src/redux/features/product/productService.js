import axios from "axios";

const SERVER_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${SERVER_URL}/api/products/`;

// Create new Product
const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData);

  return response.data;
};

// Get Products
const getProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Delete Product
const deleteProduct = async (id) => {
  // console.log(API_URL + id);
  const response = await axios.delete(API_URL + id);

  return response.data;
};

// Get Single Product
const getProduct = async (id) => {
  const response = await axios.get(API_URL + id);

  return response.data;
};

// Update Product
const updateProduct = async (id, formData) => {
  // console.log(id);
  // console.log(...formData);
  // console.log(`${API_URL}${id}`);

  const response = await axios.patch(`${API_URL}${id}`, formData);

  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;
