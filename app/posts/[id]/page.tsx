import { getPostsById, getPostsIds } from "@/utils/posts";

export const generateStaticParams = async () => {
  const fileIds = await getPostsIds();
  return fileIds.map((id) => {
    id;
  });
};

export default async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const blogData: any = await getPostsById(id);
  return (
    <div className="prose dark:prose-invert m-auto">
      <div className="text-center p-10">
        <div>
          <h1>{blogData.title}</h1>
        </div>
        <div>Created on ({blogData.date})</div>
      </div>
      <article>
        <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
      </article>
    </div>
  );
};
