import { ListSubheader, Typography } from "@mui/material";

type IGrocerySublistTitleProps = {
    name: string;
}

function GrocerySublistTitle(props:IGrocerySublistTitleProps) {
    return (
        <ListSubheader color={"primary"}><Typography variant="h4" >{props.name}</Typography></ListSubheader>
    )
}

export default GrocerySublistTitle;