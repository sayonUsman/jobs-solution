import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="ms-2 md:ms-0 mt-5">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-5 md:mb-9">
          FAQ
        </h1>

        <h1 className="text-lg md:text-xl font-semibold">
          Question: When should you use context api?
        </h1>
        <p>
          <span className="text-lg md:tet-xl font-semibold">Answer: </span>When
          need to share data through the component without props.
        </p>

        <h1 className="text-lg md:text-xl font-semibold mt-5">
          Question: What is a custom hook?
        </h1>
        <p>
          <span className="text-lg md:tet-xl font-semibold mt-5">Answer: </span>
          Custom hooks are reusable functions whose name starts with ‘use’ in
          react js.
        </p>

        <h1 className="text-lg md:text-xl font-semibold mt-5">
          Question: What is a useRef?
        </h1>
        <p>
          <span className="text-lg md:tet-xl font-semibold">Answer: </span>
          useRef is a built-in React hook that accepts one argument as the
          initial value and returns a reference which has special property
          current. This hook allows updating the value without re-rendering.
        </p>

        <h1 className="text-lg md:text-xl font-semibold mt-5">
          Question: What is a useMemo?
        </h1>
        <p>
          <span className="text-lg md:tet-xl font-semibold">Answer: </span>
          useMemo is a React hook that returns a memoized value and skips
          unnecessary renderings.
        </p>
      </div>
    </div>
  );
};

export default Blog;
