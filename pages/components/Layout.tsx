import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Icon, IconButton, useTheme } from '@mui/material';
import { Box } from '@mui/system';

type TLayout = {
    children: React.ReactNode
}

const Layout: React.FC<TLayout> = ({ children }) => {

    const theme = useTheme();

    return (
        <div>
            <Box>
                <IconButton sx={{ position: "absolute", right: "10px", top: "10px" }}>
                    <DarkModeIcon fontSize='large' />
                </IconButton>
            </Box>
            {children}
        </div>
    )
}

export default Layout;