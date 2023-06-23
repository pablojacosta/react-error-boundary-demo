import React, { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

interface ITestComponent {
  url: string;
  handleSetIsLoading: (bool: boolean) => void;
  isLoading: boolean;
}

const TestComponent = ({
  url,
  handleSetIsLoading,
  isLoading,
}: ITestComponent) => {
  const [data, setData] = useState(null);
  const { showBoundary } = useErrorBoundary();

  const fetchData = () => {
    handleSetIsLoading(true);
    fetch(url)
      .then(async (response) => {
        handleSetIsLoading(false);
        setData(await response.json());
      })
      .catch((error) => {
        handleSetIsLoading(false);
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
