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

export default function FoodsIndex(){
    const [value, setValue] = useState(1);
    return(
        <div className="flex flex-row gap-5">
        <Card className="w-96">
            <div to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                    src="../src/images/foods/a.png"
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
                  <Link to='facts/1' className="py-2 px-2 items-center justify-center bg-green-600 my-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500 flex items-center gap-2">Veiw Nutrition Facts <HiOutlineEye className="text-lg"/></Link>
                </CardFooter>
            </div>
        </Card>

        <Card className="w-96">
            <div to="/best-tools-exercise" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                    src="../src/images/foods/b.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Veggies and Hummus
                    </Typography>
                    <Typography>
                    When you exercise regularly, it’s all too easy to overestimate how many calories you’ve burned. An intense, hour-long bike ride could burn 590 calories, but a more leisurely one might only use 290.
                    While you might feel like you’ve earned a cookie, it’s better to snack on fruits and vegetables. After you work out, pair your produce with protein to help you feel more full and replenish muscles. Try vegetables with hummus or fruit with Greek yogurt.
                    </Typography>
                </CardBody>
                <CardFooter>
                  <Link to='facts/2' className="py-2 px-2 items-center justify-center bg-green-600 my-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500 flex items-center gap-2">Veiw Nutrition Facts <HiOutlineEye className="text-lg"/></Link>
                </CardFooter>
            </div>
        </Card>

        <Card className="w-96">
            <div className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                     src="../src/images/foods/c.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Start With Whole-Grain Cereal
                    </Typography>
                    <Typography>
                    If you don’t have enough to eat before you exercise, you may not have enough gas in the tank. You might burn fewer calories, too. Have some healthy carbs at least an hour in advance of your workout. Try a bowl of whole-grain cereal with skim milk and cut up fruit or some whole wheat toast or a bagel. Cream cheese and butter add saturated fat.
                    </Typography>

                </CardBody>
                <CardFooter>
                  <Link to='facts/3' className="py-2 px-2 items-center justify-center bg-green-600 my-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500 flex items-center gap-2">Veiw Nutrition Facts <HiOutlineEye className="text-lg"/></Link>
                </CardFooter>
            </div>
        </Card>

        <Card className="w-96">
            <div className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                     src="../src/images/foods/e.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Fish
                    </Typography>
                    <Typography>
                    Naturally fatty fish like salmon, mackerel, herring, lake trout, sardines, and albacore tuna are good sources of omega-3 fatty acids. These are "good" fats that help keep your heart healthy. They may also help keep your brain sharp, especially as you get older. The American Heart Association suggests eating two servings of fatty fish a week. A serving is 3 ounces -- about the size of a deck of cards. Try it baked, grilled, or poached.
                    </Typography>
                </CardBody>
                <CardFooter>
                  <Link to='facts/4' className="py-2 px-2 items-center justify-center bg-green-600 my-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500 flex items-center gap-2">Veiw Nutrition Facts <HiOutlineEye className="text-lg"/></Link>
                </CardFooter>
            </div>
        </Card>

        <Card className="w-96">
            <div  className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                     src="../src/images/foods/f.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Grilled Chicken at Mealtime
                    </Typography>
                    <Typography>
                    When you exercise regularly, you need more protein than people who don’t, especially after a workout. Your body uses it to repair muscles, to make blood cells, and for many other purposes. For lunch or dinner, serve a leaner source, like grilled chicken or turkey, instead of something like a cheeseburger.
                    </Typography>
                </CardBody>
                <CardFooter>
                    <button className="py-2 px-2 bg-green-600 my-2 rounded-lg text-white font-bold shadow-lg hover:bg-green-500">Product Available to us</button>
                </CardFooter>
            </div>
        </Card>

     </div>
    )
}
