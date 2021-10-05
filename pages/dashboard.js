import { useEffect } from "react";
import useMenus from "../UI/organism/menus";

export default function Dashboard() {
  const menus = useMenus();

  useEffect(() => {
    console.log(menus);
  }, [menus]);

  return <div>{
              menus && 
              menus.menus.map((m) => 
                                    <div>{m.name}</div>)
              }
          </div>;
}
