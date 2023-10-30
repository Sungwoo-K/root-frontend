// import { useState } from "react";

// export const UserEventButton = (props) => {
//   const value = ["남성", "여성"];
//   const [selctSex, isSelectSex] = useState();
//   const sex = "남성";
//   const clickButton = (e) => {
//     isSelectSex(() => {
//       console.log(selctSex);
//       return e.target.value;
//     });
//   };

//   return (
//     <>
//       {value.map((item, idx) => (
//         <button
//           value={idx}
//           className={"buttonevent" + (idx == selctSex ? idx + 1 : "")}
//           onClick={clickButton}
//         >
//           {props.value}
//           {item}
//         </button>
//       ))}
//     </>
//   );
// };

// export default UserEventButton;
