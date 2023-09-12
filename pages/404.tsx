import Link from "next/link";
import { changeActiveItem } from "../store/slices/sideBarActiveItem";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Custom404 = () => {
  const dispatch = useDispatch();
  const { asPath } = useRouter();
  const currURLEndpoint = asPath;

  useEffect(() => {
    dispatch(changeActiveItem({ activeItem: currURLEndpoint }));
  }, [currURLEndpoint, dispatch, asPath]);

  return (
    <div className="custom404">
      <h1>404</h1>
      <span />
      <p>This page could not be found.</p>
      <Link href="/dashboard">Go Back</Link>
    </div>
  );
};

export default Custom404;
