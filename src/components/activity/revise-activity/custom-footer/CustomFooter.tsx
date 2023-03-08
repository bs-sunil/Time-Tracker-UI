import { Box, Button, Stack } from "@mui/material";

export function CustomFooterStatusComponent() {
    const onClick = (e:any) => {
        // const currentRow = params.row;
        // return alert(JSON.stringify(currentRow, null, 4));
      };
    return (
      <Box sx={{ p: 1, display: 'flex' }}>
          <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="warning" size="small" onClick={onClick}>Revise</Button>
              <Button variant="outlined" color="primary" size="small" onClick={onClick}>Accept</Button>
            </Stack>
      </Box>
    );
  }