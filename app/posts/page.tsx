import { getSortedPostsData } from "@/utils/posts";
import { BlogTile } from "../components/BlogTile";

export default async () => {
  // const allPostsData = await getSortedPostsData();
  return (
    <div className="h-full flex flex-col space-y-20">
      <div className="text-center text-5xl">All Blogs</div>
      <div className="grid grid-flow-row gap-5 decoration-0 grid-cols-4 h-full grid-rows-3">
        {/* {allPostsData.map(({ id, date, title, about }) => (
          <BlogTile key={id} id={id} title={title} date={date} about={about} />
        ))} */}
      </div>
    </div>
  );
};
