import { useState, useRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import styles from "../styles/modules/topBar.module.scss";
import { Paper } from "@mui/material";
import Icon from "../utils/topBarUtils";

const UserStatus = () => {
  const anchorRef = useRef(null);
  const [userStatusOpen, setUserStatusOpen] = useState(false);

  const handleToggle = () => {
    setUserStatusOpen(!userStatusOpen);
  };

  const handleClose = () => {
    setUserStatusOpen(false);
  };

  return (
    <div className={styles.userStatus}>
      <button
        ref={anchorRef}
        id="composition-button"
        aria-controls={userStatusOpen ? "composition-menu" : undefined}
        aria-expanded={userStatusOpen ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <span className={styles.userStatusOnline} />
        <p>Online</p>
        <Icon
          name="arrowDown"
          className={`${styles.userStatusArrow} ${
            userStatusOpen ? `${styles.active}` : ""
          }`}
        />
      </button>
      <Popper
        open={userStatusOpen}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "left top",
            }}
          >
            <Paper className={styles.userStatusMenu}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={userStatusOpen}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  <MenuItem onClick={handleClose}>
                    <span className={styles.userStatusOnline} />
                    <p>Online</p>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span className={styles.userStatusAway} />
                    <p>Away</p>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <span className={styles.userStatusOffline} />
                    <p>Offline</p>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default UserStatus;
