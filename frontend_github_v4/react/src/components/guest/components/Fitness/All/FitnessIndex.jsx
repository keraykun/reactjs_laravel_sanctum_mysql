
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


export default function FitnessIndex(){

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
          label: "Strength and Training",
          value: "strent",
          desc: "Strength training—which is sometimes referred to as resistance training or weight training—is a form of exercise intended to increase muscular strength and endurance. It involves exercising muscles using some form of weight or resistance such as your body weight, hand weights, machines, and more.Strength training is designed to increase your strength and endurance, but it has a number of other benefits, too, like increasing bone density, boosting metabolism, building muscle, and even improving mental health",
        },
        {
          label: "Cardio Exercise",
          value: "cardi",
          desc: `Cardio, also known as cardiovascular exercise, is generally any activity that increases your heart rate. Whether that is walking, running, cycling, dancing, or swimming, these rhythmic activities help to strengthen your heart and lungs. What’s more, cardio has a number of health benefits.

          Aside from improving heart function and lowering blood pressure, consistently fitting cardio into your weekly routine can help you sleep better, improve cognitive function, and boost your overall sense of well-being. The Physical Guidelines for Americans recommend that you fit in about 150 minutes of moderate physical activity each week`,
        },

        {
          label: "FIIT Principle",
          value: "principle",
          desc: `The FIIT principle—which stands for frequency, intensity, time, and type of exercise—is a guideline you can use to revise and improve your workout plan. When evaluating and creating your workouts, you will need to consider these four elements. Doing so will help put you on the path to achieving your fitness goals.

          Additionally, these principles can be used to evaluate your existing fitness program and determine where changes need to be made. Sometimes, you will need to adjust your program—especially if you have hit a plateau—by making sure the elements of your workout are still meeting your physical needs.`,
        },
      ];

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>Fitness</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700 block" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Reviewed By <span className="font-bold text-slate-600">Tara Laferrara, CPT</span> | Updated on <span className="font-bold text-slate-600">July 30, 2022</span></div>
                        </div>
                        <h1>
                        Fitness is a broad term that can mean a lot of different things to different people. For some, it can mean a fitness program and for others, it can refer to their fitness level. But regardless of whether you are considering improving your personal fitness level or looking for an effective fitness program, the key is that fitness is a vital part of an active, healthy, and balanced lifestyle.
Plus, there are a number of benefits to incorporating fitness into your daily life. Physical exercise can boost your energy, reduce the risk of health problems, and improve mental health.1
So, whether you are just embarking on your fitness journey or you are a seasoned exerciser, you will find trusted information here on working out safely and effectively and making physical fitness a part of your everyday life.
                        </h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    What is fitness and why is it important?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Generally speaking, fitness involves not only defining your exercise goals and executing your plan, but it also refers to your level of fitness or the measure of your physical abilities like endurance, strength, balance, and flexibility. In other words, your fitness level is unique to you, as it is your body's ability to withstand a physical workout and recover in a timely manner.

Exercising consistently is one of the most important ways you can improve your fitness levels. In fact, regular physical activity not only impacts your physical strength, heart function, and endurance, but it also can improve your brain health, help you manage your weight, and reduce your risk of disease. It also can strengthen your bones and muscles and improve your ability to complete everyday tasks and activities.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    How much exercise should you get each day?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    According to the Centers for Disease Control and Prevention (CDC), adults should get at least 150 minutes of moderate-intensity activity or 75 minutes of vigorous-intensity activity—or a combination of the two—each week. Examples of physical activity include walking, running, swimming, and cycling.3
                    The CDC also recommends that two days a week, you work to strengthen your muscles. Whether that involves using bodyweight exercises, dumbbells, gym equipment, or resistance bands, these activities should work all the major muscle groups of your body—legs, hips, back, chest, abdomen, shoulders, and arms. What’s more, these muscle-strengthening activities should be done in addition to your physical activity
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    How can you improve your fitness?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    When it comes to improving your fitness level, there are many different types of exercises from which to choose. The key is to pick the right ones for you. This means selecting activities you enjoy and are able to do consistently. Plus, research indicates that most people benefit from doing a variety of things in order to improve their fitness.4

For instance, you should choose some endurance or aerobic activities to help improve your heart and lungs as well as some strength or resistance training activities to help your muscles get stronger. Even adding in some balance and flexibility exercises can help improve your fitness level
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(4)}>
                    What are the five components of fitness?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Whether you are getting a fitness test or just curious about the components of fitness, there are five things that are used to measure fitness. These include cardiovascular endurance, muscular strength, muscular endurance, flexibility, and body composition.
To be sure you are addressing each area of physical fitness with your workouts, you should engage in endurance, strength, balance, and flexibility exercises. By doing so, you will improve your overall fitness level
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="strent">
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
