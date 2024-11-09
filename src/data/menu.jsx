import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import StorageIcon from '@mui/icons-material/Storage';
import LogoutIcon from '@mui/icons-material/Logout';

export const menuDasboard = [
    {
        name : "Approval",
        icon : <DoneOutlineIcon />,
        link : "/dashboard/approval"
    },
    {
        name : "Categories",
        icon : <StorageIcon />,
        link : "/dashboard/categories"
    },
    {
        name : "Types",
        icon : <StorageIcon />,
        link : "/dashboard/types"
    },
    {
        name : "Logout",
        icon : <LogoutIcon />,
        link : ""
    },
]