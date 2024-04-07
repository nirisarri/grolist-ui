import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import React from "react";
import MainMenu from "./mainMenu"
import LoginMenu from "./loginMenu";
const MainAppBar = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

return (
<>
<Box>
    <AppBar position="static">
      <Toolbar>
        <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Grocery List
        </Typography>
        <LoginMenu></LoginMenu>
      </Toolbar>
    </AppBar>
</Box>
<Drawer open={open} onClose={toggleDrawer(false)}>
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <MainMenu />
    </Box>
</Drawer>
</>
    )
}

export default MainAppBar;