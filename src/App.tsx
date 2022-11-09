import { useEffect, useState, VFC } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

interface UserData {
  name: string;
  id: number;
}

interface UsersData extends Array<UserData> {}

const fetchData = async (url: string): Promise<UsersData> => {
  const response = await fetch(url, { method: "get" });
  return response.json();
};

const App: VFC = () => {
  const [data, setData] = useState<UsersData>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, []);

  console.log("data:", data);

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {data.map((li) => (
          <li key={li.id}>{li.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
