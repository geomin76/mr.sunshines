import React, { useEffect, useState } from "react"
import { Button, Box } from "@material-ui/core";
import { commerce } from "../lib/commerce";

export const Increment = ({ qty, onUpdateCartQty, id, productId }) => {

  const [quantity, setQuantity] = useState(qty);

  const [count, setCount] = useState(null);

  useEffect(() => {
    commerce.products.retrieve(productId).then((product) => {
        setCount(product.inventory.available)
    });
}, [productId]);

  return (
    <>
    <Box style={{ display: 'flex'}}>
      { quantity <= 1 && <Button m={1} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}} variant="outlined" disabled>-</Button>} 
      { quantity > 1 && <Button m={1} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}} variant="outlined" onClick={() => {
        onUpdateCartQty(id, quantity - 1);
        setQuantity(quantity - 1);
      }}>-</Button>}
      <Box m={1} marginLeft={2} marginRight={2}>{quantity}</Box>
      { count && quantity < count && 
      <Button m={1} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}} variant="outlined" onClick={() => {
        onUpdateCartQty(id, quantity + 1);
        setQuantity(quantity + 1);
      }}>+</Button>}
      
    </Box>
    </>
  )
}