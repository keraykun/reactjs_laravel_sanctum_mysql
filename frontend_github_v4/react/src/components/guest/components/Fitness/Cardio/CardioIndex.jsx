
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


export default function CardioIndex(){

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
          label: "HIIT",
          value: "hiit",
          desc: "HIIT stands for high-intensity interval training. It's a form of cardiovascular exercise that involves alternating between bursts of intense exercise and short periods of rest. Incorporating sprints throughout your treadmill workout or jog is an example. HIIT is often contrasted with steady state cardio.",
        },
        {
          label: "Aerobatics Exercise",
          value: "aerobatics",
          desc: `Aerobic and cardiovascular exercise are interchangeable terms. They both refer to exercises that require more oxygen. Examples of aerobic exercises include running, jogging, walking, swimming, cycling, and much more. During these exercises, your breathing and heart rate will increase.`,
        },

        {
          label: "Interval Training",
          value: "internal",
          desc: `Some cardio workouts involve interval training. It’s similar to HIIT. Interval training involves alternating between intense bursts of exercise and periods of rest, but there is more time for recovery in interval training than HIIT. This helps build speed and endurance.`,
        },

        {
          label: "Fasted Cardio",
          value: "fasted",
          desc: `Your body is in a fasted state when you haven’t eaten in two or more hours. You’re naturally fasted when you wake up. Some people prefer to do cardio first thing in the morning before breakfast or between meals. This is called fasted cardio. Whether you eat before a cardio workout is largely up to you.`,
        },

        {
          label: "Low Impact Cardio",
          value: "low",
          desc: `Some forms of cardio can be more impactful on the body than others. This means it’s harder on parts of the body like joints. Many people with delicate knees, for example, seek low impact cardio exercises that are gentle on their joints. Low impact cardio exercises include swimming, walking, and cycling.`,
        },
        {
        label: "LISS Cardio",
        value: "liss",
        desc: `LISS stands for low-intensity steady state cardio. It’s the opposite of HIIT workouts. It involves performing cardio exercise at a steady pace. This could look like brisk walking or jogging at the same speed for a period of time instead of alternating between slower and faster speeds. Sustaining your speed can help increase your endurance.`,
        }
      ];

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>Cardio Workouts</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700 block" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Reviewed By <span className="font-bold text-slate-600">Tara Laferrara, CPT</span> | Updated on <span className="font-bold text-slate-600">February 30, 2023</span></div>
                            <div className="italic">Fact checked By <span className="font-bold text-slate-600">Rich Scherr</span> </div>
                        </div>
                        <h1>Cardiovascular exercise, or “cardio,” is a pillar of a balanced exercise regimen. The word gets thrown around a lot, but it’s a short way of saying aerobic exercise. “Aerobic” refers to the requirement for oxygen. In fitness, cardio refers to physical exercises that increase your breathing rate as your body’s need for oxygen increases. It also gets your heart and blood plumping.

                        Classic examples of cardio exercise include walking, running, jump roping, swimming, and cycling. They can be low- or high-intensity, so most fitness routines can easily incorporate a style of cardio exercise.</h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    How can you increase your cardio endurance?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Endurance is the ability to ensure physical exercise or withstand physical exertion for a prolonged period of time. Improved endurance is a benefit of cardio exercise. Many aerobic athletes want to increase their endurance, such as running or swimming longer distances. Over time, your endurance will naturally improve. Some ways to actively work on this include incorporating intervals like sprints, decreasing your recovery time, and keeping your routine varied.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    Should you do cardio before or after strength training?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    If your routine contains both cardio and strength training, you may wonder which to do first on the same day. There is no right answer to this age-old question. One way to figure out which works best for you is to determine your goals. If your goal is to build strength, consider strength training before cardio. If your goal is to improve your overall performance, consider doing cardio before strength training.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    How long should a cardio workout be?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Roughly 150 minutes of cardio exercise per week is recommended for most people.1 If you exercise five times per week, each cardio workout would be about 30 minutes. If you exercise three times per week, this would be about 50 minutes per workout. However, your 30 or 50 minutes of cardio exercise don’t have to be performed in succession. You can split them up, such as doing a 15- or 25-minute walk or jog in the morning followed by a 15- or 25-minute bike ride or swim in the evening.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(4)}>
                    What should your heart rate be during cardio?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Your heart rate should be higher during exercise than at rest. However, it shouldn’t be too high. Here is how to determine your target heart zone and the maximum your heart rate should be. Your target heart rate should be 50 to 85 percent of your maximum heart rate. The American Heart Association has a helpful chart based on age.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(5)}>
                    What does cardio do for your body?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Cardio directly affects your heart health. It makes it stronger and reduces the risk of heart disease.3 Aerobic exercise burns calories, which can help with losing weight or maintaining a healthy weight. It’s beneficial for mental health, such as stress and anxiety disorders.4 Cardio exercise can also help enhance sleep quality, which contributes to overall health
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(6)}>
                    How much cardio is too much?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Love cardio? Then it may be easy for you to go overboard. Despite the benefits of cardio, too much of anything, including overtraining yourself, can be a bad thing. While there is no recommended upper limit of cardio per week, you can push yourself too hard if you do more than the recommended 150 minutes of cardio exercise per week. Cardio releases endorphins. The endorphins can become addicting, possibly creating an unhealthy obsession with exercise.
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="hiit">
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
