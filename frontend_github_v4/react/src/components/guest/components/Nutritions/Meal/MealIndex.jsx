
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


export default function MealIndex(){

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
          label: "Keto meal plan",
          value: "Keto",
          desc: `A ketogenic, or "keto," meal plan outlines a way of eating that is generally very low in carbohydrates and high in dietary fat. On most ketogenic diets, you consume approximately 75% of your calories from fat, 5% from carbohydrates, and 20% from protein.
          Some evidence suggests that this way of eating promotes weight loss, however, experts warn that it is a highly restrictive dietary pattern and not appropriate for all.`,
        },
        {
          label: "Mediterranean diet meal plan",
          value: "mediterranean",
          desc: `A Mediterranean diet meal plan provides a nutritious, balanced way of eating that may have many health benefits.2 This type of meal plan offers a variety of nutrients through fruits, vegetables, whole grains, lean proteins, and plenty of healthy fats.`,
        },

        {
          label: "Whole 30 meal plan",
          value: "Whole",
          desc: `A Whole 30 meal plan follows the Whole 30 elimination diet that challenges people to remove certain foods for 30 days. A meal plan may be helpful to ensure that you meet all of your nutrient needs while eliminating dairy, grains, legumes, sugar, and other specific items.`,
        },
      ];

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>Meal Plans</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Reviewed By <span className="font-bold text-slate-600">Tara Laferrara, CPT</span> | Updated on <span className="font-bold text-slate-600">February 30, 2023</span></div>
                        </div>
                        <h1>A meal plan can be an excellent tool to guide your nutrition choices, no matter what eating style you prefer. Learn the basics behind 'how to meal plan' and explore our dietitian-designed and vetted meal plans for various goals. That said, there is not a one-size-fits-all when it comes to diets and nutrition plans, so you can also use our blank template to create your own meal plan.</h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    How do I make a weekly meal plan?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Meal planning can be broken down into three simple steps: select recipes or basic meal constructs, make a shopping list and shop for ingredients, and prepare meals. While there is a lot of work that goes into each of those steps, after a while the process forms into a habit.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    What is the best meal planning app?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    If you're not a fan of pen and paper planning, a meal plan app can help you to save money and prioritize a nutritious, balanced diet. Depending on the app functionality, the technology can help you to tailor meals to your preferences and nutritional needs. Check out our dietitian-vetted meal planning apps to decide what is best for you.
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="Keto">
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
