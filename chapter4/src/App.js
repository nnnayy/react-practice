import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  
  //시작할 때 한번만 실행
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);

  //keyword가 변할 때 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  
  //counter가 변할 때 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  //keyword와 counter가 변할 때 실행
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;