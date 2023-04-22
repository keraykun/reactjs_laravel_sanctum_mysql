import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import RatingProduct from "../../custom/RatingProduct";

export default function FoodsFacts(){
    const [value, setValue] = useState(1);

    return(
        <div className="flex flex-row gap-5">
            <Card className="w-96 shrink-0">
                <Link className="h-full flex flex-col justify-between">
                 <CardBody color="white" className="relative flex-none">
                    <img
                     src="../../src/images/foods/a.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                    <CardBody className="text-center flex-grow">
                        <Typography variant="h5">
                        Black Bean Burger
                        </Typography>
                        <Typography>
                        Whether you sometimes try a meat-free meal or stick to a full-time vegetarian diet, you can get plenty of protein (and lots of other nutrients, including fiber) from plants. Try pinto, kidney, white, or black beans, split peas, or chickpeas. Soy products, like tofu and tempeh, and nuts also have protein.
                        </Typography>
                    </CardBody>
                    <CardFooter>
                     {/* <RatingProduct value={value} setValue={setValue}/> */}
                    </CardFooter>
                </Link>
            </Card>
            <div className="flex flex-col">
            <div className="overflow-x-auto rounded-md shadow-lg">
                <div className="bg-slate-200 p-2 text-md font-bold">Nutritionix sub-recipe for 1 burger on bun:</div>
                <div className="p-1.5 w-full inline-block align-middle p-5">
                    <div className="overflow-hidden border rounded-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-xs font-bold text-left text-gray-500 uppercase border-r border-red-100"
                                    >
                                        Serving
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-xs font-bold text-left text-gray-500 uppercase border-r border-red-100 "
                                    >
                                        Ingredient
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Calories
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                     1/2 tbsp
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                       Mayo
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                        47
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    1 slice
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    tomato
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    2.7
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    13.5 g
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    bread crumb
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    53
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    1
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    hamburger bun
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    128
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    7.5 oz
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    black beans
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    213
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    1/4 tbsp
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    garlic
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    3.2
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    1/2 tbsp
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    cilantro
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    0.1
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    1/4
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    egg
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    18
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    1 leaf
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    lettuce
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    4.8
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    13.75 g
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    onion
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    5.5
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 text-sm font-medium text-gray-800 whitespace-nowrap border-r border-red-100">
                                    1/2 tsp
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap border-r border-red-100">
                                    fresh parsley
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 whitespace-nowrap">
                                    0.2
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}
