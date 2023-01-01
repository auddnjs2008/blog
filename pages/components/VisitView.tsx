import { Box, Button, Typography } from '@mui/material'

const VisitView = () => {

    return (
        <Box sx={{ position: "absolute", bottom: "50px", right: "80px", display: "flex", border: "1px solid black", width: "200px", justifyContent: "space-between" }}>
            <Box sx={{ color: "main" }}>
                <Typography>Today</Typography>
                <Typography>2000</Typography>
            </Box>
            <Box>
                <Typography>Total</Typography>
                <Typography>1000000</Typography>
            </Box>

        </Box>
    )
}

export default VisitView