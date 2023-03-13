import TestWithMockData from "./components/TestWithMockData";

export const mockData = [
  {
      "id": 1,
      "first_name": "Fletcher",
      "last_name": "McVanamy",
      "email": "mmcvanamy0@e-recht24.de",
      "age": 30
    }, {
      "id": 2,
      "first_name": "Clarice",
      "last_name": "Harrild",
      "email": "charrild1@dion.ne.jp",
      "age": 35
    }, 
]

function App() {
  return <div>
    <h1>Writing unit test cases with React using Jest and React Testing Library</h1>
    <TestWithMockData data={mockData} />
  </div>;
}

export default App;
