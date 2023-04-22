import {
    Typography,
    Tooltip
  } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

  export default function FruitIndex() {

    const fruits = useLoaderData()
    return (
        <>
        <div className="text-2xl text-green-900 font-bold"><h1>LIST OF FRUITS</h1></div>
        <div className="flex flex-wrap gap-5">
            {fruits && fruits.map((fruit,index)=>(
             <Link key={index} to={fruit.name+'/'+fruit.id}>
                <Tooltip  content={fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1)}>
                    <div className="rounded-md h-full shadow-lg cursor-pointer flex flex-col justify-between hover:scale-105 transition-all">
                        <img
                        src={fruit.image}
                        alt="ui/ux review check"
                        className="w-64"
                    />
                    <Typography className="text-lg text-center uppercase font-bold pb-3 text-green-900">
                    {fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1)}
                    </Typography>
                    </div>
                </Tooltip>
                </Link>
            ))}
        </div>
        </>
    );
  }
