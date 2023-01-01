import { Box, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';

const NavBar = () => {

    return (

        <Box sx={{ position: "absolute", right: "70px", top: "100px", padding: "10px", width: "200px", border: "1px solid black", fontSize: "large", color: "white", display: "flex", justifyContent: "space-around" }}>
            <Link href="/blog">Blog</Link>
            <Link href="/gallery">Gallery</Link>
        </Box>
    )
}

export default NavBar;