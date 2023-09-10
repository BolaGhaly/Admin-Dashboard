import Link from "next/link";
import { changeActiveItem } from "../store/slices/sideBarMenuActive";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Custom404 = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const currURLEndpoint = router.asPath.slice(1);

  useEffect(() => {
    dispatch(changeActiveItem({ activeItem: currURLEndpoint }));
  }, [currURLEndpoint, dispatch, router]);

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
