import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SimpleSidebar = () =>{
  return (
    <Card className='h-[92vh] bg-blue-100 rounded-none w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
      <div className='mb-2 p-4'>
        <Typography variant='h5' color='blue-gray'>
          Chat Bot
        </Typography>
      </div>
      <List>
        <ListItem>
          <Link to={"/bin"}>Fraud detection</Link>
        </ListItem>
      </List>
    </Card>
  );
}

export default SimpleSidebar;