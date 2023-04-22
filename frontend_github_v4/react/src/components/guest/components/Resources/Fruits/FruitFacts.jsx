import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
} from "@material-tailwind/react";
import { Link,useLoaderData } from "react-router-dom";

import axiosClient from "../../../../../axios-client";


export const ShowFruitLoader = async({params}) =>{
    const {id} = params
    try {
       const {data} = await axiosClient.get('/guest/fruit/show/'+id)
       return data
    } catch (error) {
        console.log(error)
        return error
    }
}


export default function FruitFacts(){

    const fruit = useLoaderData()

    return(
        <div className="flex flex-row gap-5 items-start">
            <Card className="w-96 shrink-0 sticky top-0">
                <Link className="h-full flex flex-col justify-between">
                 <CardBody color="white" className="relative flex-none">
                    <img
                     src={fruit.image}
                    className="object-cove w-96"
                    />
                </CardBody>
                    <CardBody className="text-center flex-grow">
                        <Typography variant="h5">
                        {fruit.name.toUpperCase()}
                        </Typography>
                        <Typography>
                        {fruit.description}
                        </Typography>
                    </CardBody>
                </Link>
            </Card>
            <div className="flex flex-col gap-10">

                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="text-3xl my-1">Nutrition facts</div>
                        </div>
                        <ul className="list-disc flex flex-col items-start px-20">
                            {fruit.facts && fruit.facts.map((fact,index)=>(
                                <li key={index}><span className="font-bold">{fact.name}:</span> {fact.description}</li>
                            ))}
                        </ul>
                        <div>
                            <div className="text-3xl my-1">Benefits</div>
                        </div>
                        <ul className="list-disc flex flex-col items-start px-20">
                            {fruit.benefits && fruit.benefits.map((benefit,index)=>(
                                <li key={index}><span className="font-bold">{benefit.name}</span></li>
                           ))}

                        </ul>

                        {fruit.benefits && fruit.benefits.map((benefit,index)=>(
                        <div key={index}>
                        <div className="text-3xl my-3">{benefit.name}</div>
                        <h1 className="indent-10">
                        {benefit.details}
                        </h1>
                        </div>
                        ))}
                        <script type="text/javascript" async id="weight-loss-calculator" data-type="verywell-tool" data-vertical="verywellfit" src="https://www.verywellfit.com/static/5.7.0/components/tools/calculators/iframe-embed/embed.min.js?id=weight-loss-calculator"></script>

                      </div>
                </div>
             </div>
        </div>
    )
}
