export default function UsersList({ posts }) {
  console.log(posts);
  return (
    <div>
      <div>Posts</div>
      {posts.map((post) => {
        return <p key={post._id}>{post._id}</p>;
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://mearn-app-stack-memories.herokuapp.com/posts"
  );
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
