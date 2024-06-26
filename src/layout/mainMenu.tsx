import {List,ListItemText,ListItem, Divider } from "@mui/material";
import {Menu, MenuSection} from "./model";

// const MyListItem2 = ({sectionName, menuItems}:MenuSection) => {
//   const zzz = ['a','b','c'];
//   return (
//     <>
//     <Typography variant="h6">{sectionName}</Typography>
//     {zzz.map(g) => (
//       "Dsdsd"
//       )}

//     { zzz.map((item) => {
//       <Typography>{"item"}</Typography>
//     }) 
//     }
//     </>
//   )
// }

function MyListItem3({menuItems}:MenuSection) {


  return (
    <List>
      {menuItems.map((menuItem) => (
      <ListItem key={menuItem.Text}>
        <ListItemText primary={menuItem.Text}></ListItemText>
      </ListItem>
      ))}
    </List>
  );
}

const MainMenu = () => { 

  const exampleJson: Menu = {
    "Items": [
        {
            "sectionName": "section1",
            "menuItems": [
                {
                    "Text": "Inbox"
                },
                {
                    "Text": "Starred"
                },
                {
                    "Text": "Send email"
                },
                {
                    "Text": "Drafts"
                }
            ]
        },
        {
            "sectionName": "section2",
            "menuItems": [
                {
                    "Text": "All Mail"
                },
                {
                    "Text": "Trash"
                },
                {
                    "Text": "Spam"
                },
                {
                    "Text": "Subscriptions"
                }
            ]
        }
    ]
  };
return(
<>
  {
    exampleJson.Items.map((menuSection: MenuSection) => (<>
      <MyListItem3 sectionName={menuSection.sectionName} menuItems={menuSection.menuItems}></MyListItem3>
      <Divider />
    </>)
//    <MyListItem sectionName={section.sectionName} menuItems={section.menuItems} ></MyListItem>
      // <List>
      //   {/* <MyListItem sectionName={section.sectionName} menuItems={section.menuItems} ></MyListItem> */}
      //   <MyListItem sectionName={section.sectionName} menuItems={section.menuItems}></MyListItem>
      // </List>
    )
}
</>
    );
 }

 export default MainMenu