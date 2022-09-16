import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/features/product/productSlice";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import "./ProductDetail.scss";
import Card from "../../card/Card";
import { SERVER_URL } from "../../../App";
import DOMPurify from "dompurify";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { SpinnerImg } from "../../Loader/Loader";

const ProductDetail = () => {
  useRedirectLoggedOutUser("/login");
  const { id } = useParams();
  //   console.log(id);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stockStatus = (quantity) => {
    if (quantity > 0) {
      return <span className="--color-success">In Stock</span>;
    }
    return <span className="--color-danger">Out Of Stock</span>;
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!isLoggedIn) {
      navigate("/login");
    }

    dispatch(getProduct(id));
  }, [id, isLoggedIn, navigate, isError, message, dispatch]);
  return (
    <div className="product-detail">
      <h3 className="--mt">Product Detail</h3>
      <Card cardClass="card">
        {/* Loading Spinner */}
        {isLoading && <SpinnerImg />}
        {product && (
          <div className="detail">
            <Card cardClass={"group"}>
              {product?.image ? (
                <img
                  src={`${product.image.filePath}`}
                  height="250"
                  width={"100%"}
                  alt={`${product.image.fileName}`}
                />
              ) : (
                <p>No image set for this product</p>
              )}
            </Card>
            <h4>Product Availablity: {stockStatus(product.quantity)}</h4>

            <hr />
            <h4>
              <span className="badge">Name : </span> &nbsp;{product.name}
            </h4>
            <p>
              <b>&rarr; SKU : </b> {product.sku}
            </p>
            <p>
              <b>&rarr; Category : </b> {product.category}
            </p>
            <p>
              <b>&rarr; Price : </b> {"$"}
              {product.price}
            </p>
            <p>
              <b>&rarr; Quantity in stock : </b> {product.quantity}
            </p>
            <p>
              <b>&rarr;Total Value in stock : </b>
              {"$"}
              {product.price * product.quantity}
            </p>
            <hr />
            <p>
              <b>&rarr; Description:</b>
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description),
              }}
            ></div>
            <hr />
            <code className="--color-dark">
              Created on: {product.createdAt.toLocaleString("en-US")}
            </code>
            <br />
            <code className="--color-dark">
              Last updated: {product.updatedAt.toLocaleString("en-US")}
            </code>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProductDetail;
