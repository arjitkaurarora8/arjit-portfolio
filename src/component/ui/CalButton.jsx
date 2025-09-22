// "use client";

// import React, { useRef, useEffect } from "react";
// import { getCalApi } from "@calcom/embed-react";
// import Button from "./Button";

// export default function CalButton({ text = "Book a call", size = "md" }) {
//   const btnRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       const cal = await getCalApi({ namespace: "introductioncall" });
//       if (btnRef.current) {
//         // Attach popup to the actual DOM button
//         btnRef.current.addEventListener("click", () => {
//           cal("popup", {
//             link: "arjit-kaur-arora-nk3ufj/introductioncall",
//           });
//         });
//       }
//     })();
//   }, []);

//   return <Button ref={btnRef} text={text} size={size} />;
// }
