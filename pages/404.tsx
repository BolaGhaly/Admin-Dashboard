import Link from "next/link";
import {
  changeActiveItem,
  initialState,
} from "../store/slices/sideBarMenuActive";
import { useDispatch } from "react-redux";

const Custom404 = () => {
  const dispatch = useDispatch();

  return (
    <div className="custom404">
      <h1>404</h1>
      <span />
      <p>This page could not be found.</p>
      <Link
        href="/"
        onClick={() =>
          dispatch(changeActiveItem({ activeItem: initialState.activeItem }))
        }
      >
        Go Back
      </Link>
    </div>
  );
};

export default Custom404;
