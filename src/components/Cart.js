import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Title } from './styledComponents';
import { db } from "../utils/firebaseConfig";
import styled from "styled-components";
import { async } from '@firebase/util';

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
    const context = useContext(CartContext);
    const createOrder = async () => {
      let itemsForDB = context.cartList.map(item => ({
        id: item.idItem, 
        price: item.priceItem,
        title:  item.titleItem,
        quantity: item.qtyItem
      }))
      let order = {
        buyer: {
          name: "Serena Tsukino",
          email: "serena@tsukino.com",
          phone: "1112233444"
        },
        date: serverTimestamp(),
        items: itemsForDB,
        total: context.calcTotal()
      }
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order);
      alert('Your order has been created with ID '+ newOrderRef.id)
      context.removeList()
      itemsForDB.map(async(item) => {
        const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.quantity)
      });
      }
        
      )
    }
    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <Top>
                <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                {
                    (context.cartList.length > 0)
                    ? <TopButton type="filled" onClick={context.removeList}>DELETE ALL PRODUCTS</TopButton>
                    : <TopText>Your cart is empty</TopText>
                }
            </Top>
            <ContentCart>
                <Bottom>
                    <Info>
                        {
                            context.cartList.length > 0 ? 
                            context.cartList.map(item => 
                            <Product key={item.idItem}>
                            <ProductDetail>
                                <ImageCart src={item.imgItem} />
                                <Details>
                                <span>
                                    <b>Product:</b> {item.nameItem}
                                </span>
                                <TopButton type="filled" onClick={() => context.deleteItem(item.idItem)}>DELETE</TopButton>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>$ {item.priceItem} each</ProductPrice>
                                <ProductPrice>$ {context.calcTotalPerItem(item.idItem)} Total</ProductPrice>
                            </PriceDetail>
                            </Product>
                            )
                            : <TitleCart></TitleCart>
                        }
                </Info>
                {
                    context.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ {context.calcSubTotal()}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ {context.calcTotal()}</SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={createOrder}>CHECKOUT NOW</Button>
                        </Summary>
                }
            </Bottom>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;