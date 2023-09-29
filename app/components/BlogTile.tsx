import { PostsMetadata } from "../../utils/posts";
import Link from "next/link";

export const BlogTile = ({ id, title, date, about }: PostsMetadata) => {
  return (
    <Link
      href={`/posts/${id}`}
      className="col-span-1 row-span-1 dark:bg-slate-600 bg-slate-300"
    >
      <div
        className="items-center h-full justify-center flex flex-col space-y-10 p-10 decoration-0"
      >
        <div className="flex flex-col items-start">
          <div className="font-bold text-lg">{title}</div>
          <div className="text-sm mt-3">Created: {date}</div>
        </div>
        <div className="font-semibold">{about}</div>
      </div>
    </Link>
  );
};
