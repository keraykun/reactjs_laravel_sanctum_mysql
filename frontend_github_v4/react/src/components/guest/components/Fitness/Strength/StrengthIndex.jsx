
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


export default function StrengthIndex(){

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
                <div className="text-3xl text-green-900 font-bold"><h1>Strength Training Tips and Workouts</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700 block" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Reviewed By <span className="font-bold text-slate-600">Heather Black, CPT</span> | Updated on <span className="font-bold text-slate-600">April 30, 2022</span></div>
                            <div className="italic">Fact checked By <span className="font-bold text-slate-600">Rich Scherr</span> </div>
                        </div>
                        <h1>
                        Strength training is a form of exercise that helps build muscle. It uses weight from your body mass or equipment to build muscle mass and increase overall strength.

Over time, lean muscle mass naturally decreases with age. Strength training helps maintain and build muscle mass, which is important for overall health. It’s beneficial for strengthening muscles and bones, maintaining a healthy weight, and improving your ability to perform everyday activities.
                        </h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    Do runners need strength training?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    A runner’s main form of exercise is likely cardio and aerobic training, but runners can also benefit from strength training. Cardio is necessary for heart health and weight management, but it doesn’t increase muscle mass like strength training. Runners should incorporate some strength training into their routines for balance.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    Is strength training better than cardio?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Both strength training and cardio have their advantages. One is not outright better than the other. Cardio helps build stamina and endurance, and strength training works to increase strength and muscle mass.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    What should I eat before strength training?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    A high-carbohydrate meal with a moderate amount of protein and low amount of fat can fuel your strength training session. Complex carbohydrates provide energy. Follow the strength training session with a high-protein snack or meal.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(4)}>
                    Do I need equipment for strength training?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Equipment is not required for strength training, but it comes in handy. Beginners can start with exercises that only require body weight, such as push-ups and pull-ups. You can gradually increase the weight using dumbbells, weighted barbells, and kettlebells.
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
