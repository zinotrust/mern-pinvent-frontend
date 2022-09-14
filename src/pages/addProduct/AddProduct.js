import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import {
  createProduct,
  getProducts,
  selectIsLoading,
} from "../../redux/features/product/productSlice";
import "./AddProduct.scss";
import ProductForm from "./ProductForm";

const initialState = {
  name: "",
  category: "",
  quantity: "",
  price: "",
};

const AddProduct = () => {
  useRedirectLoggedOutUser("/login");
  const isLoading = useSelector(selectIsLoading);
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const { name, category, quantity, price } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const generateSKU = (category) => {
    const letter = category.slice(0, 3).toUpperCase();
    const number = Date.now();
    const sku = letter + "-" + number;
    // console.log(sku);
    return sku;
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("sku", generateSKU(category));
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", productImage);

    await dispatch(createProduct(formData));
    await dispatch(getProducts());
    navigate("/dashboard");
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Add New Product</h3>
      <ProductForm
        product={product}
        productImage={productImage}
        imagePreview={imagePreview}
        description={description}
        setDescription={setDescription}
        handleImageChange={handleImageChange}
        handleInputChange={handleInputChange}
        saveProduct={saveProduct}
      />
    </div>
  );
};

export default AddProduct;
