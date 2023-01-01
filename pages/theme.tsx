import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
            light: "#e3f2fd",
            dark: "#42a5f5",
            contrastText: "rgba(0,0,0,0.87)"
        },
    },
    breakpoints: {
        keys: [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        values: {
            xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536
        }
    },
    typography: {
        fontFamily: '"Rovoto","Helvetica","Arial","sans-serif"',
        fontSize: 12,
    }
})