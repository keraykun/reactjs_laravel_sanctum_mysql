import {
    Typography,
    Tooltip
  } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

  export default function MeatsIndex() {

    const vabetables = useLoaderData()
    return (
        <>
        <div className="text-2xl text-green-900 font-bold"><h1>LIST OF MEATS</h1></div>
        <div className="flex flex-wrap gap-5">
            {vabetables && vabetables.map((vagetable,index)=>(
             <Link key={index} to={vagetable.name+'/'+vagetable.id}>
                <Tooltip  content={vagetable.name.charAt(0).toUpperCase() + vagetable.name.slice(1)}>
                    <div className="rounded-md h-full shadow-lg cursor-pointer flex flex-col justify-between hover:scale-105 transition-all">
                        <img
                        src={vagetable.image}
                        alt="ui/ux review check"
                        className="w-64"
                    />
                    <Typography className="text-lg text-center uppercase font-bold pb-3 text-green-900">
                    {vagetable.name.charAt(0).toUpperCase() + vagetable.name.slice(1)}
                    </Typography>
                    </div>
                </Tooltip>
                </Link>
            ))}
        </div>
        </>
    );
  }
