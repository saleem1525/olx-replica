import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="outlined" color="primary" {...bindTrigger(popupState)}>
            Login
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <Typography><div style={{margin:"15px"}}><Button variant="outlined">Continue with Phone</Button> </div>
              <div style={{margin:"15px"}}><Button variant="outlined">Continue with Email</Button> </div>
              <div style={{margin:"15px"}}><Button variant="outlined">Contiue with Facebook</Button></div>
              <div style={{margin:"15px"}}><Button variant="outlined">Continue with Google</Button></div></Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
