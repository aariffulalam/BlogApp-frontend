import {Button, Stack} from "@mui/material";

function MuiButton(){
    return (
        <Stack spacing={4}>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={10}>
                <Button variant="text" href="https://google.com">Text</Button>
                <Button variant="contained">Text</Button>
                <Button variant="outlined">Text</Button>
            </Stack>
            <Stack spacing={5} direction="row">
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Eecondary</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success">Success</Button>
            </Stack>
            <Stack display="block" spacing={2} direction="row">
                <Button variant="contained" size="small" color="primary">Small</Button>
                <Button variant="contained" size="medium" color="primary">Medium</Button>
                <Button variant="contained" size="large" color="primary">Large</Button>
            </Stack>
        </Stack>
    )
}

export default MuiButton;