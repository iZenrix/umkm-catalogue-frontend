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
        name : "Database",
        icon : <StorageIcon />,
        link : "/dashboard/database"
    },
    {
        name : "Logout",
        icon : <LogoutIcon />,
        link : ""
    },
]