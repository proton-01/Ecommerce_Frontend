import {React , useState} from "react";
import "../style/shop.css";
import styled from "styled-components";

import Header from "../components/Header";
import Announcement from "../components/Announcment";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { products } from "../Data";
import ShopItem from "../components/ShopItem";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  border: 0.5px solid grey;
  padding: 0px 30px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 0px;
  border: 0px;
`;

const Option = styled.option``;


function Shop() {

  const [initialProducts, setInitialProducts] = useState(products);
  const [filterText,setFilterText] = useState("");

const getFilter =(e)=>{
  setFilterText(e.target.value);
}

const filterProducts = (filterText) => {
  const filteredItems = products.filter((eachItem) => {
       if(eachItem.title === filterText){
        return eachItem;
       }
       
  });
  setInitialProducts(filteredItems);
}; 

const sortProducts = (value)=>{
  if (value == "PRICE LOW TO HIGH"){
    products.sort((a,b)=>(a.p2 > b.p2) ? 1:-1);

    setInitialProducts(products);
    console.log(initialProducts);
  }
  if (value == "PRICE HIGH TO LOW"){
    products.sort((a,b)=>(a.p2 < b.p2) ? 1:-1);
    setInitialProducts(products);
  }
 }

  return (
    <div className="shop">
      <Announcement />
      <Header />

      <div className="shop_desc">
        <p>
          There are <strong>{initialProducts?.length}</strong> products available
        </p>

        <FilterContainer>
          <Filter>
            <FilterText>Filter Products</FilterText>
            
            <Select name="color" onClick={(e)=>{getFilter(e);filterProducts(e.target.value);}}>
              <Option value="NIXON">NIXON</Option>
              <Option value="TIMEX">TIMEX</Option>
              <Option value="COCOMI">COCOMI</Option>
              <Option value="OLIVIA BURTON">OLIVIA BURTON</Option>
              <Option value="TIMBERLAND">TIMBERLAND</Option>
              <Option value="OLIVIA BURTON, TIMEX">OLIVIA BURTON, TIMEX</Option>
            </Select>
            
          </Filter>

          <Filter>
            <FilterText>Sort Products</FilterText>
            <Select onClick={(e)=> sortProducts(e.target.value)}>
              <Option value="newest">NEWEST</Option>
              <Option value="PRICE LOW TO HIGH">PRICE LOW TO HIGH</Option>
              <Option value="PRICE HIGH TO LOW">PRICE HIGH TO LOW</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </div>

      <div className="products_cont">
        {initialProducts.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
export default Shop;
