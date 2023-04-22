
import { useState } from "react";

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";


export default function RunningIndex(){

    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
      };
    const data = [
        {
          label: "Functional Strength and Training",
          value: "functional",
          desc: "There are different types of strength training, and functional strength training is one of them. This is when you target multiple muscles per exercise rather than isolate just one. Lunging is an example of this, since it works muscles across the legs, hips, knees, and ankles all at once.",
        },
        {
          label: "Isometric Exercise",
          value: "isometric",
          desc: `Isometric exercises are also known as static strength training. This is when your muscles are engaged, but they are not changing length. In some exercises, such as bicep curls, the muscle gets shorter and longer during the contraction. In isometric exercises, such as planks and wall sits, the muscle contraction doesn’t involve a change in length. Many isometric exercises require you to hold the exercise rather than repeat a movement.`,
        },

        {
          label: "Muscle Endurance",
          value: "muscle",
          desc: `This refers to the amount of time or repetitions you can perform an exercise before the muscle gets tired. Toward the end of your workout, you may notice your muscles feeling fatigued. They may burn towards the end of your set. Over time, your muscle endurance will improve and you can perform more repetitions.`,
        },

        {
          label: "Resistance Training",
          value: "resistance",
          desc: `Resistance training is a form of strength training. It uses resistance to strengthen the muscles. Resistance bands are a good example of this, but resistance is also used in pilates, cable workouts, and weighted exercises. Exercises like squats and lunges are examples of resistance training since your muscles are working against the weight of your dumbbells, body weight, or barbells.`,
        },
      ];

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>Running Advice, Techniques, and Workouts</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700 block" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Reviewed By <span className="font-bold text-slate-600">John Honerkamp</span> | Updated on <span className="font-bold text-slate-600">April 30, 2022</span></div>
                            <div className="italic">Fact checked By <span className="font-bold text-slate-600">Marley Hall</span> </div>
                        </div>
                        <h1>
                        Running, the action of moving yourself forward rapidly on foot, is a popular form of physical activity that requires little equipment. It's an excellent way to boost cardiovascular fitness anywhere and at any time.1 All you need is a good pair of shoes, weather-appropriate gear, and a safe route.
Whether you're running for the first time or training for your next race, read this information about proper form, the best shoes, training strategies, and more.
                        </h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    How do you run faster?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    There are a few strategies that can help you pick up the pace in your runs. Incorporating short sprints will help, but interval training, tempo runs, and hills will also help you get faster. A treadmill may be an excellent tool for improving overall performance and increasing speed. The treadmill allows you to add hills and easily perform speed work. Of course, working on your form, weekly mileage, and allowing proper rest and recovery will also aid in increasing overall speed. Consider working with a running coach or using a running app to create a personalized training program to increase your speed.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    How do you start running?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    To ensure comfort and prevent injury, first, get medical clearance to begin running. Second, invest in properly-fitting running shoes. Finally, decide where and when you will run. Do you have a safe area (trails, road, or a track) that will enable you to regularly run outside? Or will you utilize a treadmill? Deciding which option is most readily available can help plan a running program. When you’re ready to put one foot in front of the other, consider a walk/run strategy in the beginning: commit to a set period of time, and alternate walking and running. You can increase the running component progressively over time.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    How many calories do you burn running a mile?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    As a very general and simplistic rule, a runner will burn about 100 calories per mile.2 Individual calorie expenditure is dependent on weight, pace, and other factors, so individuals who want a slightly more accurate estimate might use a tracking device, such as a running watch. Note that calorie counters on cardio equipment and fitness trackers tend to overestimate calorie burn.3
                    Using a heart rate monitor with your tracking device may provide a more accurate estimate.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(4)}>
                    What should you eat before a run?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    A good rule of thumb is to choose a combination of foods that are high in carbohydrates and lower in fat, fiber, and protein. Carbohydrates are the body’s preferred source of fuel. There are a variety of options that can work, such as a bagel with peanut butter or a bowl of oatmeal with berries. You will want to consume your meal or snack within 90 minutes to an hour before a run. Foods to avoid before a run include spicy foods, high-fiber foods such as legumes, lactose-heavy foods, and greasy or fried foods.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(5)}>
                    How fast can the average human run?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    According to a study by RunRepeat, the average time for a 5k (3.1 miles) is 35 minutes.  Starting your 5k journey can be made easier by following a guided plan.
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="functional">
                    <TabsHeader className="bg-green-100 rounded-none">
                        {data.map(({ label, value }) => (
                        <Tab className="text-bold text-xl text-green-1" key={value} value={value}>
                            {label}
                        </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                        }}
                        >
                        {data.map(({ value, desc }) => (
                        <TabPanel className="text-lg p-10"  key={value} value={value}>
                            {desc}
                        </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
                </div>
             </div>
        </div>)
}
