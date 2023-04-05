import "./App.css";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "kohta",
  image: "https://picsum.photos/200/200",
  email: "kohta0521.gmail.com",
  phone: "090-0000-0000",
  company: {
    name: "test com",
  },
  website: "https://google.com",
};

function App() {
  return (
    <div className="App">
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

export default App;
