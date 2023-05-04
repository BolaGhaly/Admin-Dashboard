import React from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Icon from "../../utils/sideBarUtils";
import { lobsterFont } from "../../fonts";
import Link from "next/link";

const CompanyLogo = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );

  return (
    <>
      {openSideBar ? (
        <div>
          <Link href="/">
            <Icon name="company" />
            <p style={lobsterFont.style}>FinFiesta</p>
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/">
            <Icon name="company" />
          </Link>
        </div>
      )}
    </>
  );
};

export default CompanyLogo;
