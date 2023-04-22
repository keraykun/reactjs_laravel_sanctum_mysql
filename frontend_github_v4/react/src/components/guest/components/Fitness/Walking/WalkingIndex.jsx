
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


export default function WalkingIndex(){

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
          label: "Brisk Walking",
          value: "brisk",
          desc: "A relaxed, slower pace that you normally walk at throughout the day is called a stroll. When you’re walking briskly, you’re walking at a faster pace of around 3.5 to 4 miles per hour. Even though you're not running, you may feel your breathing and heart rate increase as it’s more challenging than regular walking or strolling.",
        },
        {
          label: "Treadmil Walking",
          value: "treadmil",
          desc: `If you can’t walk outside due to the weather (or other circumstances), you can use a treadmill to get in your daily steps. This also reduces your sun exposure. Treadmills can be a convenient way to track your speed, distance, heart rate, and time spent walking.`,
        },

        {
          label: "Stride",
          value: "stride",
          desc: `Your stride is the distance taken in one step. If you have long legs, you may have a long stride. This means it takes you fewer steps to walk the same distance as someone with shorter legs.`,
        },

        {
          label: "Gait",
          value: "gait",
          desc: `Your walking pattern is called your gait. It involves balance and coordination. Some people may have an abnormal gait due to neurologic, muscular, or skeletal problems.`,
        },

        {
          label: "Heart Rate",
          value: "heart",
          desc: `Your heart is always beating and the number of beats per minute is your heart rate. At rest, your heart doesn’t beat as fast. It beats much faster during exercise than at rest. Wearing a heart rate monitor during exercise can help you monitor your heart rate.`,
        },
        {
        label: "Steps",
        value: "steps",
        desc: `You can track your walking in terms of minutes, miles, or steps. Since people have different strides and therefore take a different number of steps to walk the same distance, tracking your steps can be helpful. Some people aim for 10,000 steps per day. You can track your steps with a pedometer, smartphone, or activity tracker.`,
        },
      ];

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>Walking Strategies for Overall Health</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Fact Checked By <span className="font-bold text-slate-600">Nicholas Backner</span> | Updated on <span className="font-bold text-slate-600">January 25, 2023</span></div>
                        </div>
                        <h1>Walking is a form of cardio or aerobic exercise. It’s an effective and low-impact exercise for overall health and weight management. The 2018 Physical Activity Guidelines Advisory Committee recommends 150 minutes of moderate-intensity aerobic activity per week, and walking satisfies that recommendation.1
                            Walking is a convenient form of exercise because it can be done almost anywhere and nearly everyone can do it. All you need to get started is a good pair of shoes. Get tips on shoes, apps, and more to hit your stride on the trail or treadmill.</h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    How long does it take to walk a mile?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    The time it takes to walk a mile depends on your pace. For most people, you can expect to walk a mile in about 15 to 20 minutes. With practice, you can improve your speed when walking a mile.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    How many calories do you burn walking a mile?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    The amount of calories you burn doing any physical activity depends on several factors, such as age, sex, weight, and distance. For example, someone who weighs 165 pounds can burn about 85 calories from walking one mile at a 3 to 4 mile per hour pace. A 120-pound person burns approximately 64 calories walking the same distance at the same pace.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    Is walking good for weight management?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Aerobic exercise like walking is good for weight loss and weight management because it burns calories and can help reduce body fat.2
                    No matter what type of exercise you're doing, combining it with a nutritious, balanced diet will provide the best results for weight management.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(4)}>
                    How many miles or steps should you walk per day?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    If you’re going to start incorporating regular walks into your weekly routine, try to meet the recommended 150 minutes per week.1
                    This is about 30 minutes of walking per day. However, you’re likely to get more steps by also being active throughout the day. A higher step count is associated with lower mortality, so aim for 8,000 to 12,000 steps per day
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="brisk">
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
