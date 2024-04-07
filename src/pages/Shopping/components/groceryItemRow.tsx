import { Avatar, Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { groceryItem } from "../../../layout/model"
import React from "react";


export default function GroceryItemRow(prop: { groceryItem: groceryItem; }) {

    const standardStyle = {}
    const completedTaskStyle = {
        color: '#333',
        textDecoration: 'line-through'
    }
    const props = prop.groceryItem;
    const [checked, setChecked] = React.useState(prop.groceryItem.status === 1)
    
    const handleToggle = () => () =>{
        const newChecked = !checked;

        setChecked(newChecked);
    };

    return (
        <>
            <ListItem
            secondaryAction={
                <Checkbox 
                    edge="end"
                    onChange={handleToggle()}
                    checked = {checked}
                />
            }>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar
                            alt={props.name}
                            src="https://t4.ftcdn.net/jpg/00/71/99/59/360_F_71995983_LYUmVshsYR6EMvPCaC9iEemBIvYF1U4D.jpg"
                        />
                    </ListItemAvatar>
                    <ListItemText 
                        style={checked ? 
                            completedTaskStyle : 
                            standardStyle } 
                        primary={props.name}
                        secondary={props.quantity}/>
                </ListItemButton>
        </ListItem>
        </>
    )
}
