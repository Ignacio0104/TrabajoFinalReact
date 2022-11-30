import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Settings } from "@mui/icons-material"
import { useHistory } from "react-router-dom";

const getIcon = (icon)=>{
    switch(icon)
    {
        case "HOME":
            return (<Home/>);
        case "TASKS":
            return (<Home/>)
        case "SETTINGS":
            return (<Settings/>)
        default:
            break;
    }
}

const MenuListItems = ({list})=>{
    const history = useHistory();
    const navigateTo= (path) =>{
        history.push(path);
    }

    return (
        <List>
            {list.map(({texto,path,icon},index) => (
                <ListItem key={index} button onClick={()=>navigateTo(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText
                    primary = {texto}
                    />
                </ListItem>
    
            ))}
        </List>
    )
}

export default MenuListItems;