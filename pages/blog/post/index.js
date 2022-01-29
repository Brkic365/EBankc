import React, { useEffect } from "react";
import { useRouter } from "next/router";

function PostIndex() {
  const router = useRouter();

  useEffect(() => {
    router.push("/blog");
  }, []);

  return <div></div>;
}

export default PostIndex;
