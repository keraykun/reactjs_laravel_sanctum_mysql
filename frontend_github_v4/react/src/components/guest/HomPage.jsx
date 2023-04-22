import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function HomePage(){
        return (
        <div className="container-content flex flex-col gap-10 pb-[150px]">
            <div className='health-bacgkround w-full pb-20'>
                <div className='max-w px-20 mx-auto'>
                <section className='flex flex-row w-full pt-20 pr-20 pl-20 pb-0 gap-10 items-center justify-center'>
                    <article className='flex-1 flex flex-wrap gap-5'>
                        <h1 className='text-5xl font-bold break-words text-white'
                        style={{
                            textShadow:'2px 4px 3px rgba(0,0,0,0.30)'
                            }}>Health and Nutrition, Fitness Information when you need it most.Know more, be healthier
                        </h1>
                        <Link to="register" className='px-10 py-4 text-white font-bold uppercase rounded-lg tracking-widest drop-shadow-xl bg-green-500 hover:bg-green-600'>Start Healthier Now</Link>
                    </article>
                    <article className='flex-1 flex flex-wrap'>
                    <div>
                        <img src="../src/images/yes.png" alt="" />
                    </div>
                    </article>
                </section>
                </div>
            </div>
            <div className='w-full h-full'>
                <div className='max-w w-[80%] mx-auto flex flex-col gap-5'>
                    <div className="text-2xl text-green-900 font-bold"><h1>EXPLORE THE BEST PRODUCTS</h1></div>
                     <div className="flex flex-row gap-5">
                     <Card className="w-96 group hover:scale-105 transition-all">
                        <Link to="/best-tools-exercise">
                            <CardBody color="white" className="relative flex-none">
                                <img
                                src="../src/images/exercise.png"
                                className="object-cove h-56"
                                />
                            </CardBody>
                            <CardBody className="text-center group-hover:text-green-700">
                                <Typography variant="h5" className="mb-2 ">
                                The Best 5 Exercise Tools
                                </Typography>
                                <Typography>
                                The place is close to Barceloneta Beach and bus stop just 2 min by
                                walk and near to "Naviglio" where you can enjoy the main night life in
                                Barcelona.
                                </Typography>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="w-96 group hover:scale-105 transition-all">
                        <Link to='/best-healthy-food'>
                            <CardBody color="white" className="relative flex-none">
                                <img
                                 src="../src/images/healthy.png"
                                className="object-cove h-56"
                                />
                            </CardBody>
                            <CardBody className="text-center group-hover:text-green-700">
                                <Typography variant="h5" className="mb-2 ">
                                The Best 5 Healthy Food
                                </Typography>
                                <Typography>
                                The place is close to Barceloneta Beach and bus stop just 2 min by
                                walk and near to "Naviglio" where you can enjoy the main night life in
                                Barcelona.
                                </Typography>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="w-96 group hover:scale-105 transition-all">
                        <Link to="/best-vagetables">
                            <CardBody color="white" className="relative flex-none">
                                <img
                                 src="../src/images/vagetable.png"
                                className="object-cove h-56"
                                />
                            </CardBody>
                            <CardBody className="text-center group-hover:text-green-700">
                                <Typography variant="h5" className="mb-2 ">
                                The Best 5 Vagetables
                                </Typography>
                                <Typography>
                                The place is close to Barceloneta Beach and bus stop just 2 min by
                                walk and near to "Naviglio" where you can enjoy the main night life in
                                Barcelona.
                                </Typography>
                            </CardBody>
                        </Link>
                    </Card>

                    <Card className="w-96 group hover:scale-105 transition-all">
                        <Link to="/best-fruits-weight">
                            <CardBody color="white" className="relative flex-none">
                                <img
                                   src="../src/images/fruit.png"
                                className="object-cove h-56"
                                />
                            </CardBody>
                            <CardBody className="text-center group-hover:text-green-700">
                                <Typography variant="h5" className="mb-2 ">
                                The Best 5 Fruits
                                </Typography>
                                <Typography>
                                The place is close to Barceloneta Beach and bus stop just 2 min by
                                walk and near to "Naviglio" where you can enjoy the main night life in
                                Barcelona.
                                </Typography>
                            </CardBody>
                        </Link>
                    </Card>
                     </div>
                </div>
            </div>
            <div className='w-full h-full my-10'>
                <div className='max-w w-[80%] mx-auto flex flex-col gap-5'>
                    <div className="text-2xl text-green-900 font-bold"><h1>TOOLS AND RESOURCES</h1></div>
                     <div className="flex flex-row gap-5 flex-wrap items-center justify-center p-5" style={{ background:'rgb(248 250 252)' }}>
                        <Link className="flex flex-row justify-center w-[30%] border-dashed border-2 p-5 border-slate-300 cursor-pointer hover:bg-white">
                            <section className="font-serif flex  w-100 ">
                                <div className="flex flex-row gap-2 h-24 items-center justify-center ">
                                    <img className="w-24" src="../src/images/tools/a.png" alt="" />
                                    <div className="text-lg font-bold">Daily Calories Need Calculator</div>
                                </div>
                            </section>
                        </Link>
                        <Link className="flex flex-row justify-center w-[30%] border-dashed border-2 p-5 border-slate-300 cursor-pointer hover:bg-white">
                            <section className="font-serif flex  w-100 ">
                                <div className="flex flex-row gap-2 h-24 items-center justify-center ">
                                    <img className="w-24" src="../src/images/tools/b.png" alt="" />
                                    <div className="text-lg font-bold">Body Fat Percentage Calculator</div>
                                </div>
                            </section>
                        </Link>
                        <Link className="flex flex-row justify-center w-[30%] border-dashed border-2 p-5 border-slate-300 cursor-pointer hover:bg-white">
                            <section className="font-serif flex  w-100 ">
                                <div className="flex flex-row gap-2 h-24 items-center justify-center ">
                                    <img className="w-24" src="../src/images/tools/c.png" alt="" />
                                    <div className="text-lg font-bold">Recipe and Nutrition Calculator</div>
                                </div>
                            </section>
                        </Link>
                        <Link className="flex flex-row justify-center w-[30%] border-dashed border-2 p-5 border-slate-300 cursor-pointer hover:bg-white">
                            <section className="font-serif flex  w-100 ">
                                <div className="flex flex-row gap-2 h-24 items-center justify-center ">
                                    <img className="w-24" src="../src/images/tools/d.png" alt="" />
                                    <div className="text-lg font-bold">Calorie Burned and Activity</div>
                                </div>
                            </section>
                        </Link>
                        <Link className="flex flex-row justify-center w-[30%] border-dashed border-2 p-5 border-slate-300 cursor-pointer hover:bg-white">
                            <section className="font-serif flex  w-100 ">
                                <div className="flex flex-row gap-2 h-24 items-center justify-center ">
                                    <img className="w-24" src="../src/images/tools/e.png" alt="" />
                                    <div className="text-lg font-bold">Walking and Running Pace Calculator</div>
                                </div>
                            </section>
                        </Link>
                        <Link className="flex flex-row justify-center w-[30%] border-dashed border-2 p-5 border-slate-300 cursor-pointer hover:bg-white">
                            <section className="font-serif flex  w-100 ">
                                <div className="flex flex-row gap-2 h-24 items-center justify-center ">
                                    <img className="w-24" src="../src/images/tools/f.png" alt="" />
                                    <div className="text-lg font-bold">Daily Calories Burned</div>
                                </div>
                            </section>
                        </Link>
                     </div>
                </div>
            </div>
            <div className='w-full h-full'>
                <div className='max-w w-[80%] mx-auto flex flex-col gap-5'>
                    <div className="text-2xl text-green-900 font-bold"><h1>OUR PROMISES</h1></div>
                     <div className="flex flex-row gap-5">
                     <Card className="flex flex-row justify-center w-full">
                            <CardBody className="font-serif flex flex-col items-start justify-center ">
                                <Typography variant="h5" className="mb-2 text-2xl">
                                Our content empowers you wherever you are on your healthy living journey.
                                </Typography>
                                <Typography className="flex flex-col gap-3">
                                <Link to='bmi-calculator' className='px-10 py-3 text-white font-bold uppercase rounded-lg tracking-widest drop-shadow-xl bg-green-500 hover:bg-green-600'>Read about BMI process</Link>
                                <Link to='fat-burner-calculator' className='px-10 py-3 text-white font-bold uppercase rounded-lg tracking-widest drop-shadow-xl bg-green-500 hover:bg-green-600'>Read about FAT Burner process</Link>
                                </Typography>
                            </CardBody>
                            <CardBody className="font-serif flex items-start w-60">
                                <div className="flex flex-col text-center">
                                    <img className="" src="../src/images/a.png" alt="" />
                                    <div className="text-lg">
                                    Written by nutrition and fitness experts and journalists
                                    </div>
                                </div>
                            </CardBody>
                            <CardBody className="font-serif flex items-start w-60">
                                <div className="flex flex-col text-center">
                                    <img className="" src="../src/images/b.png" alt="" />
                                    <div className="text-lg">
                                    Fact-checked with science-backed research
                                    </div>
                                </div>
                            </CardBody>
                            <CardBody className="font-serif flex items-start w-60">
                                <div className="flex flex-col text-center">
                                    <img className="" src="../src/images/c.png" alt="" />
                                    <div className="text-lg">
                                    Reviewed by physicians, registered dietitians, and fitness professionals
                                    </div>
                                </div>
                            </CardBody>
                            <CardBody className="font-serif flex items-start w-60">
                                <div className="flex flex-col text-center">
                                    <img className="" src="../src/images/d.png" alt="" />
                                    <div className="text-lg">
                                    Updated to reflect the latest information
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                     </div>
                </div>
            </div>
        </div>
        );
}
