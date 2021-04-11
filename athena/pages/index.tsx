import { withUrqlClient } from "next-urql";
import Link from "next/link";

import { urqlClient } from "../config/urqlClient";
import { useLoginMutation, useMeQuery } from "../src/generated/graphql";

const IndexPage = () => {
  const [{ data }] = useMeQuery();
  console.log(data);
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

export default withUrqlClient(urqlClient)(IndexPage);
