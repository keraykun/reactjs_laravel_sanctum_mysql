import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function ToolsIndex(){
    return(
        <div className="flex flex-row gap-5 flex-wrap w-full items-stretch justify-center">
        <Card className="w-96">
            <Link to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                     src="../src/images/exercise/a.jpg"
                    className="object-cove h-56"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    FitCord X-Over Resistance Bands
                    </Typography>
                    <Typography>
                    Arm, Shoulder, Back and Core Crossover (Xbands) Bands
                    X Bands Made in America. X-Over back resistance bands are designed specifically for shoulder and arm care. The unique cross over style of resistance is designed for working the smaller muscles to increase the stability of your Rotator Cuff and the smaller muscles that create stability around your shoulders, scapula, and arms. The support that this particular type of band and exercises provide allow you to function better with any and all activities you do that include your upper body. No matter
                    **Ultimate Door Anchor (shown in image) is sold separately**
                    Light (12lbs) X-Over Bands 1 Pair
                    </Typography>
                </CardBody>
                <CardFooter>
                {/* <button className="py-2 px-2 bg-green-600 my-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500">Product Available to us</button> */}
                    <Typography className="mb-2 text-md font-bold">
                     Price at time of publication: <br/> ₱ 1,250.00
                    </Typography>
                </CardFooter>
            </Link>
        </Card>

        <Card className="w-96">
            <Link to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                    src="../src/images/exercise/b.png"
                    className="object-cove h-56"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Flybird adjustable bench
                    </Typography>
                    <Typography>
                    This foldable bench is about as customizable as it gets, with six back positions, four seat positions and the option to lay completely flat while weight lifting. Reviewers praise the bench's ease of adjustment, the fact that it's foldable for storage and its sturdiness (its weight capacity stands at 500 lbs.). Plus, the padded seat and foot holds make even a longer workout or training session comfortable.
                    </Typography>
                </CardBody>
                <CardFooter>
                {/* <button className="py-2 px-2 bg-green-600 my-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500">Product Available to us</button> */}
                    <Typography className="mb-2 text-md font-bold">
                     Price at time of publication: <br/> ₱ 7,550.00
                    </Typography>
                </CardFooter>
            </Link>
        </Card>

        <Card className="w-96">
            <Link to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                    src="../src/images/exercise/c.png"
                    className="object-cove h-56"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Manduka PRO™ Yoga Mat 6mm
                    </Typography>
                    <Typography>
                    The original Manduka PRO™ mat. The #1 mat recommended by teachers worldwide, built to last a lifetime. An ultra-dense and spacious performance yoga mat that has unmatched comfort, cushioning and durability.
                    </Typography>

                </CardBody>
                <CardFooter>
                    {/* <button className="py-2 px-2 bg-green-600 my-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500">Product Available to us</button> */}
                    <Typography className="mb-2 text-md font-bold">
                     Price at time of publication: <br/> ₱ 8,150.00
                    </Typography>
                </CardFooter>
            </Link>
        </Card>

        <Card className="w-96">
            <Link to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                     src="../src/images/exercise/e.png"
                    className="object-cove h-56"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    NordicTrack Commercial 14.9
                    </Typography>
                    <Typography>
                    The NordicTrack Commercial 14.9 really has it all -- an adjustable stride length, a 14-inch color touchscreen, oversized cushioned pedals, auto-adjustment capabilities and Bluetooth compatibility. At 32 pounds, it also has one of the heaviest flywheels on the market, and when you combine that with magnetic resistance, the result is an impressively quiet machine with smooth movement.
                    </Typography>
                </CardBody>
                <CardFooter>
                    {/* <button className="py-2 px-2 bg-green-600 my-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500">Product Available to us</button> */}
                    <Typography className="mb-2 text-md font-bold">
                     Price at time of publication: <br/> ₱ 68,150.00
                    </Typography>
                </CardFooter>
            </Link>
        </Card>

        <Card className="w-96">
            <Link to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                     src="../src/images/exercise/f.png"
                    className="object-cove h-56"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Best OverallSunny Health & Fitness SF-B1714 Evolution Pro Cycling Bike
                    </Typography>
                    <Typography>
                    This indoor cycling-style bike checks all the boxes on our list in impressive ways which is why its our top overall pick. The heavy-duty, 44-pound flywheel keeps the bike stable during vigorous exercise so you don’t feel any wobbling mid-ride. It has an emergency break feature that stops the wheel immediately and the high-durability steel frame construction supports a maximum weight capacity of 330 pounds.
                    The bike uses a magnetic resistance mechanism that is easy to adjust mid-ride and requires virtually no maintenance over the lifetime of the bike. It also features a fully-adjustable seat, moving forward, backward, up, and down to give you the best fit. The bike comes equipped with four-way adjustable handlebars and caged toe pedals for a secure ride.
                    </Typography>
                </CardBody>
                <CardFooter>
                    {/* <button className="py-2 px-2 bg-green-600 my-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500">Product Available to us</button> */}
                    <Typography className="mb-2 text-md font-bold">
                     Price at time of publication: <br/> ₱ 38,150.00
                    </Typography>
                </CardFooter>
            </Link>
        </Card>

     </div>
    )
}
