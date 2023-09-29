import path from "path";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostsMetadata {
  id: string;
  date?: string;
  title?: string;
  about?: string;
}

export const getPostsIds = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = await readdir(postsDirectory);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
};

export const getSortedPostsData = async (): Promise<PostsMetadata[]> => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = await readdir(postsDirectory);

  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await readFile(fullPath, "utf-8");

      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    })
  );

  return allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getPostsById = async (id: string) => {
  const fullPath = path.join(process.cwd(), "posts", `${id}.md`);
  const fileContents = await readFile(fullPath);

  const matterResult = matter(fileContents);

  const processedContents = await remark()
    .use(html)
    .process(matterResult.content)
  
  const contentHtml = processedContents.toString();
  
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
};
