

import { Button, Card, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
        const username = localStorage.getItem('username');
                    const password = localStorage.getItem('password');
                    const basicAuth = 'Basic ' + atob(username + ':' + password);
                    const headers = {
                'Authorization': basicAuth,
                'Content-Type': 'application/json',
              };
    fetch("http://localhost:8888/api/v1/product/get-all", {
        method:'GET',
        headers,
    })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error));
    };
    fetchProduct()
  }, []);
  useEffect(() => {
    setProducts();
  }, []);

  const goToDetail = (productId) => {
    navigate(`/product/${productId}`);
  };

  // const handleSearch = (value) => {
  //   setSearchTerm(value);
  // };

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div>
      <>
      <h1>
        sdsdd
      </h1>
      </>
      {/* <Input
        placeholder="Search by name"
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      {filteredProducts.map((product) => (
        <Card key={product.id}  title={product.id}>
          
          <h1>{product.productname}</h1>
          <h1>{product.status}</h1>
          <h1>
          <Button type="primary" onClick={() => goToDetail(product.id)  }>
            Go detail
          </Button></h1>
        </Card>
      ))} */}
    </div>
  );
};

export default Product;
