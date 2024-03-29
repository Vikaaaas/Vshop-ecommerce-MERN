import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { useParams } from "react-router-dom";
import Paginate from "../Components/Paginate";

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();
  // const [key, changeKey] = useState(keyword);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  let { loading, error, products, page, pages } = productList;
  //loading = 1;
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={pages} page={page} keyword={keyword} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
