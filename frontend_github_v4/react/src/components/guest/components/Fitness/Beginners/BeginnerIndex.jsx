
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
          label: "Aerobotics Exercise",
          value: "aerobotics",
          desc: "Aerobic exercise is a physical activity that increases heart rate and the body’s use of oxygen. Regular aerobic exercise has a number of cardiovascular benefits, including a reduction in mortality from cardiovascular disease. It also can be an important component in weight management",
        },
        {
          label: "Strength Training",
          value: "strength",
          desc: `Strength training is the use of resistance and muscular contraction to build strong muscles. In addition to increased muscle mass and strength, research has shown that strength training positively impacts bone density, glycemic control, body composition, and cardiovascular disease markers. Strength training can even decrease the risk of all-cause mortality as well as improve reduce stress, depression, anxiety, and fatigue`,
        },

        {
          label: "Calisthenics",
          value: "calisthenics",
          desc: `Calisthenics are a systematic rhythmic body movement usually performed with little or no equipment. The movements you perform when doing calisthenics can not only improve mobility, but also may reduce your aches and pains as well as decrease the likelihood of injury.`,
        },

        {
          label: "Balance",
          value: "balance",
          desc: `Balance is the ability to move or to remain in a position without falling. Having good balance is important for everyday activities and athletic endeavors. There are a number of exercises you can do to improve your balance.`,
        },

        {
          label: "Flexibility",
          value: "flexibility",
          desc: `Flexibility is the ability of a joint or series of joints to move through an unrestricted, pain-free range of motion. One way to improve your flexibility and range of motion is to follow a consistent stretching routine. Not only will it improve your flexibility, but it will make it easier for you to move throughout the day without pain or discomfort.`,
        },
        {
        label: "Resistance Bands",
        value: "resistance",
        desc: `Resistance bands are elastic (or a combination of elastic and cloth bands) that provide resistance when doing exercises. They also are commonly used in physical therapy and are becoming more popular in the fitness community because they are practical, easy to use, and inexpensive. Evidence shows that resistance bands contribute to increased strength and endurance as well as improved body composition and quality of life`,
        },
        {
        label: "Home Workout",
        value: "home",
        desc: `Home workouts are training programs that are performed inside the home. These workouts can vary from bodyweight exercises to strength training depending on availability of equipment. Regardless of what you choose, working out at home has a number of benefits including the fact that it saves time, is convenient, and allows you do to move at your own pace.`,
        },
      ];

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>Exercise Tips for Beginners</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Reviewed By <span className="font-bold text-slate-600">Tara Laferrara, CPT</span> | Updated on <span className="font-bold text-slate-600">February 30, 2023</span></div>
                        </div>
                        <h1>Taking that first step toward beginning an exercise regimen is an important one. Not only does exercise improve your fitness level and promote weight management, but it also helps ward off illnesses like heart disease and type 2 diabetes. Exercise also can improve your mood and reduce symptoms of depression.1 Plus, a little goes a long way. You don't have to spend hours exercising to reap the benefits.
                        So, if you have made the decision to begin exercising, congratulations! Regardless of your age or fitness level, you can get started as early as today—it is never too late to start exercising. This guide to getting in shape for beginners explains what you need to know about cardio, flexibility, strength training, and more.</h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    Does exercise lower blood pressure?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    According to the American Heart Association, exercise can help lower blood pressure. Plus, 150 minutes of moderate-intensity physical activity per week can also strengthen your heart and reduce stress levels.2 Exercise offers a number of other heart-health benefits, too. For instance, those who exercise consistently also have a lower resting heart rate and a reduced risk of cardiovascular disease
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    What are the best ways to gain muscle?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    A combination of strength training and proper nutrition may help you build muscle. To achieve the best results, follow a strength training routine suited to your skill level and focus on a diet filled with lean proteins, complex carbohydrates, and heart-healthy fats. Keep in mind, increased muscle mass has a number of health benefits while low levels of muscle can contribute to cardiovascular disease as well as type 2 diabetes in adults
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    What are cardio exercises for beginners?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    If you are brand new to physical activity, dedicated walking is the best place to begin. You also may want to experiment with an elliptical, stationary bike, or rowing machine if you have access to a gym. Monitor your heart rate, stay hydrated, and beware of signs of fatigue. As with any physical activity, clearance from a healthcare provider is advised before starting something new.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(4)}>
                    What are good stretches for beginners?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Flexibility and stretching will support proper recovery as you embark on your fitness journey. When starting a beginner's stretching program, it is important to listen to your body and know when to stop or ease into a stretch. Simple moves, such as quad and hamstring stretches, are good to promote flexibility and prevent injury.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(5)}>
                    How do you exercise without equipment for beginners?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    If you are brand new to physical activity, dedicated walking is the best place to begin. You also may want to experiment with an elliptical, stationary bike, or rowing machine if you have access to a gym. Monitor your heart rate, stay hydrated, and beware of signs of fatigue. As with any physical activity, clearance from a healthcare provider is advised before starting something new.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(6)}>
                    How do you do a plank?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    The most important aspect of the plank pose for a beginner isn’t the frequency or duration but rather the form. For instance, as you get into the plank position, you want to ensure your elbows are directly under your shoulders and that your forearms are facing forward. Keep your head relaxed, look at the floor between your forearms, and engage your core.
                      In the beginning, you will hold this position for 10 to 20 seconds and gradually work up to longer durations. Beginners may find it easier to start with their knees on the floor and work up to extended legs as their strength increases.
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="aerobotics">
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
