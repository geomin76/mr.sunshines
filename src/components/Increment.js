import React, { useState } from "react"
import { Button, Box } from "@material-ui/core";

export const Increment = ({ qty, onUpdateCartQty, id }) => {

  const [quantity, setQuantity] = useState(qty);

  return (
    <>
    <Box style={{ display: 'flex'}}>
      <Button m={1} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}} variant="outlined" onClick={() => {
        onUpdateCartQty(id, quantity - 1);
        setQuantity(quantity - 1);
      }}>-</Button>
      <Box m={1} marginLeft={2} marginRight={2}>{quantity}</Box>
      <Button m={1} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}} variant="outlined" onClick={() => {
        onUpdateCartQty(id, quantity + 1);
        setQuantity(quantity + 1);
      }}>+</Button>
    </Box>
    </>
  )
}