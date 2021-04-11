import { withUrqlClient } from "next-urql";
import Link from "next/link";

import { urqlClient } from "../config/urqlClient";
import { useMeQuery } from "../src/generated/graphql";

const IndexPage = () => {
  const [{ data }] = useMeQuery();
  console.log("data", data);
  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(IndexPage);
