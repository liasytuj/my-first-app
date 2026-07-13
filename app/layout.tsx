import { UNDERSCORE_NOT_FOUND_ROUTE_ENTRY } from "next/dist/shared/lib/entry-constants";
import { Children } from "react";

export default function Layout({children}:{children: React.ReactNode}){
  return (
    <>
      <h1>我是Layout</h1>
      <h2>也可以叫我Narbar</h2>
      {children}
      <footer>版權所有</footer>

    </>
  )
}