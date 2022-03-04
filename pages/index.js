import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div>
      Home Page
      <ul>
        <li>
          <Link href="/product">
            <a>Navigate to Product Page Using Link</a>
          </Link>
        </li>
        <li>
          <button type="button" onClick={handleClick}>
            Programmatically Navigate
          </button>
        </li>
      </ul>
    </div>
  );
}
