import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

function NotificationsButton() {

    return (
        <Box>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
            >
                <Badge
                    badgeContent={17}
                    color="error"
                >
                    <NotificationsIcon fontSize="large"/>
                </Badge>
            </IconButton>
        </Box>
    )
}

export default NotificationsButton