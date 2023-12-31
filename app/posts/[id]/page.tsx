import { getPostsById } from "@/utils/posts";

const Home = async ({ params }: { params: { id: string } }) => {
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

export default Home;