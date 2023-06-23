import React, { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

interface ITestComponent {
  url: string;
}

const TestComponent = ({ url }: ITestComponent) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { showBoundary } = useErrorBoundary();

  const fetchData = () => {
    setIsLoading(true);
    fetch(url)
      .then(async (response) => {
        setIsLoading(false);
        setData(await response.json());
      })
      .catch((error) => {
        setIsLoading(false);
        showBoundary(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <>
      {isLoading && <h2>Fetching...</h2>}
      {!isLoading && data && <div>{data["body"]}</div>}
    </>
  );
};

export default TestComponent;
