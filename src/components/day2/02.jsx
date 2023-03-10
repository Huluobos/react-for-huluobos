import React from "react";

// 调用子元素回调 numTimes 次，来重复生成组件
function Repeat(props) {
  // console.log('props: ', props);
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  // console.log(items);
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

export default ListOfTenThings