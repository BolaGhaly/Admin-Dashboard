import { useState, useRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import styles from "./topBar.module.scss";
import { Paper } from "@mui/material";
import Icon from "../../utils/topBarUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { online, offline, away } from "../../store/userStatus";

const UserStatus = () => {
  const anchorRef = useRef(null);
  const [userStatusOpen, setUserStatusOpen] = useState(false);
  const userStatus = useSelector((state: RootState) => state.userStatus.value);
  const dispatch = useDispatch();

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
        {userStatus === "online" ? (
          <>
            <span className={styles.userStatusOnline} />
            <p>Online</p>
          </>
        ) : userStatus === "away" ? (
          <>
            <span className={styles.userStatusAway} />
            <p>Away</p>
          </>
        ) : userStatus === "offline" ? (
          <>
            <span className={styles.userStatusOffline} />
            <p>Offline</p>
          </>
        ) : (
          ""
        )}
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
              <ClickAwayListener onClickAway={() => handleClose()}>
                <MenuList
                  autoFocusItem={userStatusOpen}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  <MenuItem
                    onClick={() => {
                      dispatch(online());
                      handleClose();
                    }}
                  >
                    <span className={styles.userStatusOnline} />
                    <p>Online</p>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(away());
                      handleClose();
                    }}
                  >
                    <span className={styles.userStatusAway} />
                    <p>Away</p>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(offline());
                      handleClose();
                    }}
                  >
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
