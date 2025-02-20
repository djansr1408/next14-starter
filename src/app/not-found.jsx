const { default: Link } = require("next/link");

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p> Sorry, the page you are looking for not exist.</p>
      <Link href="/">Return to homepage</Link>
    </div>
  );
}

export default NotFound;