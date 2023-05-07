import React from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { closeSideBar } from "../../store/slices/sideBar";
import Icon from "../../utils/sideBarUtils";
import { lobsterFont } from "../../fonts";
import Link from "next/link";

const CompanyLogo = () => {
  const openSideBar = useSelector(
    (state: RootState) => state.openSideBar.value
  );
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(closeSideBar())} title="FinFiesta">
      <Link href="/">
        {darkMode ? (
          <Icon name="companyLogoDark" />
        ) : (
          <Icon name="companyLogoLight" />
        )}
      </Link>
      {openSideBar ? (
        <Link href="/" style={lobsterFont.style}>
          FinFiesta
        </Link>
      ) : null}
    </div>
  );
};

export default CompanyLogo;
