import fs from "fs";
import matter from "gray-matter";

const getPost = () => {
  const fileContents = fs.readFileSync("README.md", "utf8");
  const { content } = matter(fileContents);

  return content;
};

export default getPost;
