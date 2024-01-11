import Aside from "./Aside";

export default function SearchAside() {
  return (
    <Aside id="search-aside" heading="SEARCH">
      <div>
        <br />
        <h3>Testing</h3>
        {/* <PredictiveSearchForm>
          {({ fetchResults, inputRef }) => (
            <div className="bg-gradient-to-r from-lime-500 via lime-600 to lime-700">
              <input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
                className="rounded"
              />
              &nbsp;
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Search
              </button>
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults /> */}
      </div>
    </Aside>
  );
}
