import { Avatar, Checkbox, Divider, IconButton, 
    List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, 
    Typography } from "@mui/material";
import { groceryItem, groceryList, groceryListSublist } from "../../layout/model";
import GrocerySublistTitle from "./components/grocerySublistTitle";
import GroceryItemRow from "./components/groceryItemRow";
function ShoppingPage() {
    const completedTaskStyle = {
        color: '#333',
        textDecoration: 'line-through'
    }
    const groList: groceryList = {
        "items": [
            {
                "aisle": "Nevera",
                "groceries": [
                    {
                        "name": "Leche",
                        "quantity": "1 carton",
                        "avatar": {
                            "type": "I",
                            "source": "https://images.com/miklCarton.jpg"
                        },
                        "status": "pending"
                    },
                    {
                        "name": "Mantequilla",
                        "quantity": "4 barras",
                        "avatar": {
                            "type": "E",
                            "code": "0x123456"
                        },
                        "status": "done"
                    }
                ]
            },
            {
                "aisle": "Panes",
                "groceries": [
                    {
                        "name": "Pan Tajado",
                        "quantity": "1 bolsa",
                        "avatar": {
                            "type": "I",
                            "source": "https://images.com/miklCarton.jpg"
                        },
                        "status": "pending"
                    },
                    {
                        "name": "Croissants",
                        "quantity": "1 caja",
                        "avatar": {
                            "type": "E",
                            "code": "0x123456"
                        },
                        "status": "done"
                    }
                ]
            },
            {
                "aisle": "Congelados",
                "groceries": [
                    {
                        "name": "verdura congelada",
                        "quantity": "1 bolsa",
                        "avatar": {
                            "type": "I",
                            "source": "https://images.com/miklCarton.jpg"
                        },
                        "status": "pending"
                    },
                    {
                        "name": "langostinos",
                        "quantity": "1 bolsa",
                        "avatar": {
                            "type": "E",
                            "code": "0x123456"
                        },
                        "status": "done",
                        "lastBought": "01/01/2024"
                    }
                ]
            }
        ]
    }  

    return(

        <List>
            { 
                groList.items.map((sublist: groceryListSublist) => (
                    <>
                        <GrocerySublistTitle 
                            name= {sublist.aisle}
                        />
                        {sublist.groceries.map((item:groceryItem) => (
                            <GroceryItemRow
                                groceryItem= {item}
                            />
                        ))}
                    </>
                  )
                )
             }
        <ListSubheader color={"primary"}><Typography variant="h4" >Nevera</Typography></ListSubheader>

        <ListItem
            secondaryAction={
                <Checkbox edge="end"
                />
            }>
        <ListItemButton>
            <ListItemAvatar>
                <Avatar
                    alt="Leche"
                    src="https://t4.ftcdn.net/jpg/00/71/99/59/360_F_71995983_LYUmVshsYR6EMvPCaC9iEemBIvYF1U4D.jpg"
                />
            </ListItemAvatar>
            <ListItemText primary="Leche"
            secondary="3 cartones"/>
        </ListItemButton>
        </ListItem>
        <Divider component="li" />
        <ListItem
            secondaryAction={
                <Checkbox edge="end"
                checked
                />
            }>
        <ListItemButton>
            <ListItemAvatar>
                <Avatar
                    alt="Leche"
                    sx={{bgcolor:"pink"}}
                >{String.fromCodePoint(0X1F95B)}</Avatar>
            </ListItemAvatar>
            <ListItemText 
                style={completedTaskStyle} 
                primary="Leche"
                secondary="3 cartones"/>
        </ListItemButton>
        </ListItem>
        <Divider component="li" />
        <ListItem
            secondaryAction={
                <Checkbox edge="end"
                />
            }>
        <ListItemButton>
            <ListItemAvatar>
                <Avatar
                    alt="Leche"
                    src="https://t4.ftcdn.net/jpg/00/71/99/59/360_F_71995983_LYUmVshsYR6EMvPCaC9iEemBIvYF1U4D.jpg"
                />
            </ListItemAvatar>
            <ListItemText primary="Leche"
            secondary="3 cartones"/>
        </ListItemButton>
        </ListItem>
        <Divider component="li" />
        <ListItem
            secondaryAction={
                <Checkbox edge="end"
                checked
                />
            }>
        <ListItemButton>
            <ListItemAvatar>
                <Avatar
                    alt="Leche"
                    sx={{bgcolor:"pink"}}
                >{String.fromCodePoint(0X1F95B)}</Avatar>
            </ListItemAvatar>
            <ListItemText 
                style={completedTaskStyle} 
                primary="Leche"
                secondary="3 cartones"/>
        </ListItemButton>
        </ListItem>
        <Divider component="li" />
        <ListItem
            secondaryAction={
                <Checkbox edge="end"
                />
            }>
        <ListItemButton>
            <ListItemAvatar>
                <Avatar
                    alt="Leche"
                    src="https://t4.ftcdn.net/jpg/00/71/99/59/360_F_71995983_LYUmVshsYR6EMvPCaC9iEemBIvYF1U4D.jpg"
                />
            </ListItemAvatar>
            <ListItemText primary="Leche"
            secondary="3 cartones"/>
        </ListItemButton>
        </ListItem>
        <Divider component="li" />
        <ListItem
            secondaryAction={
                <Checkbox edge="end"
                checked
                />
            }>
        <ListItemButton>
            <ListItemAvatar>
                <Avatar
                    alt="Leche"
                    sx={{bgcolor:"pink"}}
                >{String.fromCodePoint(0X1F95B)}</Avatar>
            </ListItemAvatar>
            <ListItemText 
                style={completedTaskStyle} 
                primary="Leche"
                secondary="3 cartones"/>
        </ListItemButton>
        </ListItem>
        <Divider component="li" />
        <ListSubheader color={"primary"}><Typography variant="h4">Panes</Typography></ListSubheader>
        <ListItem>
            <ListItemIcon>
                <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Leche"/>
        </ListItem>
        <Divider component="li" />
        <ListItem>
            <ListItemIcon>
                <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Leche"/>
        </ListItem>
        <Divider component="li" />
        <ListItem>
            <ListItemIcon>
                <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Leche"/>
        </ListItem>
        <Divider component="li" />
        <ListItem>
            <ListItemIcon>
                <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Leche"/>
        </ListItem>
        <Divider component="li" />
        <ListItem>
            <ListItemIcon>
                <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Leche"/>
        </ListItem>
        <Divider component="li" />
        <ListItem>
            <ListItemIcon>
                <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Leche"/>
        </ListItem>
        <Divider component="li" />
        <ListItem>
            <ListItemIcon>
                <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Pan" secondary="6 lonjas" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
            <ListItemIcon>
                <Checkbox checked/>
            </ListItemIcon>
            <ListItemText 
                        style={completedTaskStyle} 
                        primary={String.fromCodePoint(0X1F95A) + " " +  "Huevos"}
                        secondary="6 cajas de 12"
                            />
        </ListItem>
        <Divider component="li" />
        <ListItem>
            <ListItemIcon>
                <Checkbox  checked/>
            </ListItemIcon>
            <ListItemIcon
                >
                <span>{String.fromCodePoint(0X1F95A)}</span> 
            </ListItemIcon>
            <ListItemText 
                        style={completedTaskStyle} 
                        primary="Huevos"
                        secondary="6 cajas de 12"
                            />
        </ListItem>
        <Divider component="li" />
        <ListItem>
            <ListItemIcon>
                <Checkbox  checked/>
            </ListItemIcon>
            <ListItemText
                style={completedTaskStyle} >
                <span>{String.fromCodePoint(0X1F95A)}</span> 
            </ListItemText>
            <ListItemText 
                        style={completedTaskStyle} 
                        primary="Huevos"
                        secondary="6 cajas de 12"
                            />
        </ListItem>
        <Divider component="li" />
        <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="comments">
            <Typography>
            <span>{String.fromCodePoint(0X1F95A)}</span> 
            </Typography>
          </IconButton>

        }>
            <ListItemIcon>
                <Checkbox />
            </ListItemIcon>
            <ListItemText 
                       
                        primary="Huevos"
                        secondary="6 cajas de 12"
                            />
        </ListItem>
        <Divider component="li" />
        <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="comments">
            <Typography >
            <span>{String.fromCodePoint(0X1F95A)}</span> 
            </Typography>
          </IconButton>

        }>
            <ListItemIcon>
                <Checkbox checked />
            </ListItemIcon>
            <ListItemText 
                        style={completedTaskStyle} 
                        primary="Huevos"
                        secondary="6 cajas de 12"
                            />
        </ListItem>

    </List>
    );
}
export default ShoppingPage;