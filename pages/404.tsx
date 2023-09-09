import Link from "next/link";
import { poppinsFont } from "../fonts";

const Custom404 = () => {
  return (
    <div className="custom404">
        <h1>404</h1>
        <span />
        <p>This page could not be found.</p>
        <button className={poppinsFont.className}>
          <Link href="/">Go Back</Link>
        </button>
    </div>
  );
};

export default Custom404;
