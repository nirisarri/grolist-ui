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
    const [checked, setChecked] = React.useState([1])
    
    const handleToggle = (value:number) => () =>{
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const value = 1;
    return (
        <>
            <ListItem
            secondaryAction={
                <Checkbox 
                    edge="end"
                    onChange={handleToggle(value)}
                    checked = {checked.indexOf(value) !== -1}
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
                        style={props.status === 'done' ? 
                            completedTaskStyle : 
                            standardStyle } 
                        primary={props.name}
                        secondary={props.quantity}/>
                </ListItemButton>
        </ListItem>
        </>
    )
}
