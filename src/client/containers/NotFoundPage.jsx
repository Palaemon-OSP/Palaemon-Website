import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src="public/missing-boy-wonder.png" alt="" />
      <h1>Oops!</h1>
      <p>
        Sorry, Palaemon is away saving pods off-shore. Try searching in a
        different endpoint.
      </p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
}
