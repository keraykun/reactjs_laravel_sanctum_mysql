import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEye } from "react-icons/hi";
import RatingProduct from "../../custom/RatingProduct";

export default function FruitIndex(){
    const [value, setValue] = useState(1);
    return(
        <div className="flex flex-row gap-5 flex-wrap w-full items-stretch justify-center">
        <Card className="w-96">
            <Link  to='/resource-fruits/apple/5' className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                    src="../src/images/fruits/apple.png"
                    className="object-cover  h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Apples
                    </Typography>
                    <Typography>
                    Apples are high in fiber, making your belly feel full, and they leave you mentally satisfied too, says Shapiro. "Apples have a great crunch and texture, so they satisfy your craving to chew." If you're looking for a yummy and healthy dessert, Shapiro recommends throwing your apples in the oven and baking them.
                    </Typography>
                </CardBody>
                <CardFooter>
                {/* <RatingProduct value={value} setValue={setValue}/> */}
                </CardFooter>
            </Link>
        </Card>

        <Card className="w-96">
            <div to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                       src="../src/images/fruits/blackberry.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Berries
                    </Typography>
                    <Typography className="px-10 my-3">
                    Shapiro loves recommending berries because they have such high fiber content. "Berries are my favorite fruit to recommend since they are the highest in fiber and lowest in sugar and are packed with antioxidants so they are optimal for health." Raspberries, blueberries, and strawberries all make great weight-loss fruit options.
                    </Typography>
                </CardBody>
                <CardFooter>
                    {/* <RatingProduct value={value} setValue={setValue}/> */}
                </CardFooter>
            </div>
        </Card>

        <Card className="w-96">
            <div to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                    src="../src/images/fruits/kiwi.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Kiwi
                    </Typography>
                    <Typography className="px-10 my-3">
                    If you enjoy something sweet yet tart, consider kiwi. "It's loaded with vitamin C and not too sweet, but still juicy and refreshing," says Shapiro.
                    </Typography>
                </CardBody>
                <CardFooter>
                {/* <RatingProduct value={value} setValue={setValue}/> */}
                </CardFooter>
            </div>
        </Card>

        <Card className="w-96">
            <div to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                      src="../src/images/fruits/papaya.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Papaya
                    </Typography>
                    <Typography className="px-10 my-3">
                    Papaya is rich in enzymes that can ease distress in the GI tract and reduce bloating, Shapiro says. The fruit is also low cal and full of fiber. It's tasty on its own, but it also pairs well with some fresh lime juice and a little sea salt.
                    </Typography>
                </CardBody>
                <CardFooter>
                {/* <RatingProduct value={value} setValue={setValue}/> */}
                </CardFooter>
            </div>
        </Card>

        <Card className="w-96">
            <div to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                    src="../src/images/fruits/watermelon.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Watermelon
                    </Typography>
                    <Typography className="px-10 my-3">
                    Watermelon is about 9o percent water, so not only does it help you stay hydrated, but it also keeps you feeling fuller for longer too.
                    </Typography>
                </CardBody>
                <CardFooter>
                {/* <RatingProduct value={value} setValue={setValue}/> */}
                </CardFooter>
            </div>
        </Card>
     </div>
    )
}
