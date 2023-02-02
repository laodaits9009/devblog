import { BlogDetail } from "@/interface/blog";
import { GetServerSideProps } from "next";
import { AppContext } from "next/app";
import { getBlogDetail } from "server/blogs";
import parser from 'html-react-parser';

export default function BlogPage({ blogData }: { blogData: BlogDetail }) {

  console.log(blogData)
  const { author, title, bodyHTML, createdAt } = blogData;
  return (
    <>
      <div className="">
        <h1>

          Detail Blog {' '} {blogData.title}
        </h1>
        {parser(bodyHTML)}
      </div>

    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const route: string[] | string | undefined = context.query.id;
  console.log({ route })
  const post: BlogDetail = await getBlogDetail(parseInt(route, 0));

  return {
    props: {
      blogData: post
    }, // will be passed to the page component as props
  }
}
