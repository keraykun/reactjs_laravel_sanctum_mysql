
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


export default function YogaIndex(){

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
          label: "Flexibility",
          value: "flexibility",
          desc: "When you perform exercises or yoga poses, you will experience a range of motion in your joints. This is known as flexibility, and it comes in handy in daily life and exercise. Yoga can help you become more flexible, but flexibility is not a requirement to start doing yoga.",
        },
        {
          label: "Balance",
          value: "balance",
          desc: `Balance is the practice of evenly distributing your body weight. Having good balance is helpful to perform many yoga poses. Doing yoga regularly can also improve your balance outside of the studio.`,
        },

        {
          label: "Ujjayi Breath",
          value: "ujjayi",
          desc: `Ujjayi breath, also known as ocean breath, is a breathing technique sometimes used in yoga. It involves long, deep inhales and exhales focused on the back of the throat. Once you learn the technique, you can incorporate it into your yoga practice.`,
        },

        {
          label: "Om's",
          value: "oms",
          desc: `The meaning of om dates back to the ancient practices of Hinduism and Buddhism. It’s a Sanskrit word with many meanings. In yoga, it’s often used as a mantra or to signal the beginning and end of a yoga session.1`,
        },
        {
        label: "Downward Dog",
        value: "downward",
        desc: `Downward dog, or Downdog, is a classic yoga pose. Known in Sanskrit as Adho Mukha Svanasana, this is often one of the very first yoga poses new yogis learn. It is a transitional and resting pose in the Sun Salutation sequence that targets the upper body, lower body, and core.`,
        },
        {
        label: "Child's Pose",
        value: "child",
        desc: `Child's Pose (or Balasana) is a gentle, resting posture that stretches the back, hips, thighs, and ankles.`,
        },
      ];

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>Yoga Advice for All Levels</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700 block" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Reviewed By <span className="font-bold text-slate-600">Sara Clark</span> | Updated on <span className="font-bold text-slate-600">July 30, 2022</span></div>
                            <div className="italic">Fact checked By <span className="font-bold text-slate-600">Nicholas Blackner</span> </div>
                        </div>
                        <h1>
                        Yoga is a form of exercise that incorporates mental and spiritual practices into physical movement. It consists of different asanas or yoga poses — standing or on the ground — that flow into one another. Practicing yoga can help you relax, build strength, and improve flexibility.

Whether you're a beginner or a pro, learn about various types of yoga and how to get the most out of your time on the mat.
                        </h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    How do you clean a yoga mat?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    You should clean your yoga mat on a bi-weekly or monthly basis. To do so, clean the yoga mat with soap and water. You can use a microfiber towel dipped in soapy water followed by a clean towel to wipe away the soapy residue.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    How do you become a yoga instructor?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Those who love and excel at yoga often want to become instructors themselves. Becoming a yoga instructor requires certification. You can become a certified yoga instructor by enrolling in a school that follows the Yoga Alliance Standards.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    What is hot yoga?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Hot yoga involves yoga classes performed in humid studios heated from 95 to 105 degrees Fahrenheit. Hot yoga classes tend to be flowing, Vinyasa-style classes. One exception is Bikram, a type of hot yoga that follows a specific 26-pose format in each 90-minute class.
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
                    What is Hatha yoga?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Hatha yoga is a gentle and slow-paced style of yoga. If you’re a beginner looking to learn the basics of yoga, Hatha is a good place to start.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(6)}>
                    What is Vinyasa yoga?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Vinyasa yoga is a broad classification that encompasses many types of yoga, including Ashtanga, Baptiste, and power yoga. It is a rigorous practice that involves sun salutations, which pair movements to breathwork. If you’re looking for a type of yoga where the poses flow into one another and classes do not follow a set sequence of poses, vinyasa is the style you’re looking for.
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="flexibility">
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
