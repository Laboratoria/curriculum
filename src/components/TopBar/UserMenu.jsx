import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const UserMenu = ({ lang, auth, history }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  if (!auth.user) {
    return (
      <Button onClick={() => history.push(`/${lang}/signin`)} color="primary" variant="contained">
        <FormattedMessage id="signin" />
      </Button>
    );
  }

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleMenu} size="large">
        <AccountCircleIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => auth.signOut().then(handleClose)}>
          <ListItemIcon><LockOpenIcon /></ListItemIcon>
          <FormattedMessage id="signout" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;