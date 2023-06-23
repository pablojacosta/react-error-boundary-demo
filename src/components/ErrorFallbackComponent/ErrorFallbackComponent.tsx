interface IErrorFallbackComponent {
  error: Error;
  resetErrorBoundary: any;
}

const ErrorFallbackComponent = ({
  error,
  resetErrorBoundary,
}: IErrorFallbackComponent) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again (FIX FETCH)</button>
    </div>
  );
};

export default ErrorFallbackComponent;
