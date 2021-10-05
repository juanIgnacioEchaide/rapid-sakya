import { useEffect } from "react";
import usePromos from "../UI/organism/promos";

export default function Dashboard() {
  const promos = usePromos();

  useEffect(() => {
    console.log(promos);
  }, [promos]);

  return <div>{
              promos && 
              promos.promos.map((p) => 
                                    <div>{p.name}</div>)}
          </div>;
}
