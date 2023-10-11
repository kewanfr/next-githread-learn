import { getUser } from "@/src/query/user.query";
import React from "react";
import { WriteModal } from "./WriteModal";
import { createPost } from "../../write/write-post.action";

export default async function Page() {
  const user = await getUser();
  return <WriteModal path="write" user={user} createPost={createPost} />;
}
