import styles from "../ProductPage/ProductCard.module.css";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { getData } from "../../Redux/AppReducer/action";
import ProdSidebar from "../ProductSidebar/ProdSidebar";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const ProductPage = () => {
    const { sofas, isLoading, isError } = useSelector((store) => {
        return {
            sofas: store.sofas,
            isLoading: store.isLoading,
            isError: store.isError
        }
    }, shallowEqual);
    const dispatch = useDispatch();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const order = searchParams.get("order");
        let paramObj = {
            params: {
                brand: searchParams.getAll("brand"),
                _sort: order && "lowprice",
                _order: order
            }
        }
        dispatch(getData(paramObj));

    }, [location.search]);
console.log(sofas)
    return (
        <div>
            <Navbar />
            <div>
                {isLoading ? <h3>Loading...</h3> : <div></div>}
                {isError ? <h3>something went wrong! please try again</h3> : <div></div>}
            </div>
            <ProductPageWrapper>
                <SidebarWrapper className={styles.product_sidebar_wrapper}>
                    <ProdSidebar />
                </SidebarWrapper>
                <ProductWrapper>
                    {sofas?.length > 0 && sofas.map((item) => {
                        return (
                        <ProductCard key={item.id} {...item} />
                        )
                    })}
                </ProductWrapper>
            </ProductPageWrapper>
            <Footer />
        </div>
    )
}

export default ProductPage


const ProductPageWrapper = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  border-top: 1px solid gray;
  margin: 50px 0px;
`

const SidebarWrapper = styled.div`
  width: 23%;
  border-right: 1px solid gray;
`

const ProductWrapper = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
`