import React, { useEffect } from "react";
import { LoadingContainer } from "./Loader.styles";

interface LoaderProps {
  loading: boolean;
  error?: string | null;
}

const Loader: React.FC<LoaderProps> = ({ loading, error }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("ldrs").then(({ trio }) => {
        trio.register();
      });
    }
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <l-trio size="50" speed="0.9" color="black"></l-trio>
      </LoadingContainer>
    );
  }

  if (error) {
    return <LoadingContainer>{error}</LoadingContainer>;
  }
};

export default Loader;
