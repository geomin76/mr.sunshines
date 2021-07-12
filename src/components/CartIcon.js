import { Badge, IconButton } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import React from "react"

export const CartIcon = ({ cart }) => {
    return (
        <IconButton aria-label="Show cart">
            { cart &&
                <Badge badgeContent={cart.total_items} color="secondary">
                    <ShoppingCart style={{ fill: 'white' }} />
                </Badge>
            }
            { !cart &&
                <Badge badgeContent={0} color="secondary">
                    <ShoppingCart style={{ fill: 'white' }} />
                </Badge>
            }
        </IconButton>
    )
}