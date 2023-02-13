import React, { useState } from "react";

function Tweet() {
  const [active, setActive] = useState("");
  const [list, setList] = useState([]);

  function addTweet() {
    setList((item) => {
      const updatedList = [...item, active];
      console.log(updatedList);
      setActive("");
      return updatedList;
    });
  }

  function removeTweet(index){
     const updatedItem = list.filter((elem,id)=>{
return index != id;
     });
     setList(updatedItem)
  }
  return (
    <>
      <div>
        <div>Tweets</div>
        <input
          type="text"
          placeholder="Add a Tweet"
          value={active}
          onChange={(e) => setActive(e.target.value)}
        />
        <br />
        <br />
        <button onClick={addTweet}>Add Tweet</button>
        <p>Tweet Box</p>
        {list.map((data, index) => {
          return (
            <>
              <p key={index}>
                <div> {data} </div>
                <button onClick={()=> removeTweet(index) }>Delete tweet</button>
              </p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Tweet;
