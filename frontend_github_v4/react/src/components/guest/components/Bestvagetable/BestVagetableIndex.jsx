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

export default function BestVagetableIndex(){
    const [value, setValue] = useState(1);
    return(
        <div className="flex flex-row gap-5 flex-wrap w-full items-stretch justify-center">
        <Card className="w-96">
            <Link to="/resource-vagetables/carrot/5" className="h-full flex flex-col justify-between">
                <CardBody color="white" className="relative flex-none">
                    <img
                    src="../src/images/vagetables/carrot.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Carrot
                    </Typography>
                    <Typography>
                    Carrots contain carotenoids, which give them their vibrant orange color (or yellow or red). Carotenoids also have antioxidant properties. This means they can play a role in:
                    </Typography>
                    <div className="px-10 my-5">
                    <ul className="list-disc text-start">
                        <li>Preventing age-related diseases, like Alzheimer’s and memory loss</li>
                        <li>Protecting you from sunburns (and skin cancer)</li>
                        <li>Keeping your immune system healthy</li>
                    </ul>
                    </div>
                    <Typography>
                    Carrots are also a great source of fiber and vitamin A.
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
                   src="../src/images/vagetables/broccoli.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Broccoli
                    </Typography>
                    <Typography className="px-10 my-5">
                    Broccoli contains a special chemical compound called “sulforaphane,” which scientists have studied for its medicinal effects. Studies show that sulforaphane can:
                    </Typography>
                    <div className="px-10 my-5">
                    <ul className="list-disc text-start">
                        <li>Lower the risk of cardiovascular disease </li>
                        <li>Help treat autism </li>
                        <li>Prevent steroid-induced osteoporosis </li>
                        <li>Have cancer-fighting properties</li>
                    </ul>
                    </div>
                    <Typography>
                    Some studies suggest that broccoli and other cruciferous vegetables are the best vegetables to fight cancer. Eating just 3 to 5 servings per week may lower your risk of cancer by 30% to 40%.
                    Broccoli is also an excellent source of vitamin C and iron.
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
                    src="../src/images/vagetables/kale.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Kale
                    </Typography>
                    <Typography className="px-10 my-3">
                    Kale has become more popular as a health food in the past few decades. But this leafy green vegetable has been used as medicine for much longer than that.
                    </Typography>
                    <Typography className="px-10 my-3">
                    Kale owes its healthy reputation to lutein. This nutrient helps prevent:
                    </Typography>
                    <div className="px-10 my-3">
                    <ul className="list-disc text-start">
                        <li>Neurological problems, like memory loss or difficulties with learning</li>
                        <li>Eye diseases, like cataracts or diabetic eye problems </li>
                        <li>Cardiovascular problems, like high blood pressure </li>
                        <li>Skin irritation</li>
                        <li>Bone Decay</li>
                    </ul>
                    </div>
                    <Typography>
                    Kale is also an excellent source of iron, calcium, and folic acid.
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
                     src="../src/images/vagetables/spinach.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Spinach
                    </Typography>
                    <Typography className="px-10 my-3">
                    Spinach contains many of the same health benefits as broccoli and kale. But it is also rich in phytochemicals. These cause the body to release hormones that make you feel full, which can be helpful for people who want to lose weight. It is also high in iron and vitamin A.
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
                     src="../src/images/vagetables/bellpaper.png"
                    className="object-cove h-56 w-96"
                    />
                </CardBody>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5">
                    Bell peppers
                    </Typography>
                    <Typography className="px-10 my-3">
                    Yellow, green, and red bell peppers each have their own unique health benefits. So eating a variety of colors is a great way to get all of their nutrients:
                    </Typography>
                    <div className="px-10 my-3">
                    <ul className="list-disc text-start flex flex-col gap-3">
                        <li><span className="font-bold"> Red peppers: </span>These contain capsaicin, which can help with pain relief, cancer prevention, and weight loss. </li>
                        <li><span className="font-bold"> Yellow peppers: </span>These have a high amount of flavonoids, which are especially helpful for learning and memory.</li>
                        <li><span className="font-bold"> Green peppers: </span>are a great source of phenolic acids. This can lower your risk of diabetes and help prevent skin damage..</li>
                    </ul>
                    </div>
                    <Typography>
                    Bell peppers also have an especially high amount of vitamin C — 1 cup has about 3 times more vitamin C than an orange.
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
