
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


export default function DietsIndex(){

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
          label: "Weight loss",
          value: "loss",
          desc: "Many diets claim to help with weight loss. Weight loss involves lowering your body weight to prevent health complications such as heart disease and diabetes. Healthy weight loss can be achieved with the help of a registered dietitian or qualified health care provider.",
        },
        {
          label: "Weight gain",
          value: "gain",
          desc: `Those who are underweight or want to increase their muscle mass may list weight gain as one of their goals. This can usually be achieved by increasing the number of calories and adjusting the balance of macronutrients in your diet. Depending on your individual needs, you will likely need to increase your intake of protein, healthy fat, and complex carbohydrates. To gain weight healthfully, consider speaking to a registered dietitian.`,
        },

        {
          label: "DASH diet",
          value: "dash",
          desc: `The DASH diet aims to prevent and control hypertension (aka high blood pressure).6 It’s recommended by the National Heart, Lung, and Blood Institute and involves avoiding foods high in sugar, fat, and salt. Instead, the DASH diet focuses on fruits, vegetables, whole grains, nuts, legumes, fish and poultry, and low-fat dairy products.`,
        },

        {
          label: "Intermittent fasting",
          value: "fasting",
          desc: `Intermittent fasting is a form of fasting that restricts eating during certain times of the day. There are many different variations of intermittent fasting, such as 5:2, alternative-day fasting, and time-restricted eating. All forms share a common thread: those who practice intermittent fasting eat all of their meals during a specific time period`,
        },

      ];

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>Diets</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Reviewed By <span className="font-bold text-slate-600">Tara Laferrara, CPT</span> | Updated on <span className="font-bold text-slate-600">February 30, 2023</span></div>
                        </div>
                        <h1>When it comes to nutrition facts and health benefits for specific foods and beverages, Verywell Fit has you covered. From fruits and vegetables to whole grains, understanding different nutritional values helps you make educated nutrition choices.

While the numbers and percentages may seem confusing at first, a nutrition facts panel can quickly become a user-friendly tool. Whether your goal is weight management, heart health, managing diabetes, or just gaining general awareness, understanding what is going into your body has the potential to make all the difference in your personal wellbeing.</h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    What is the keto diet?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Originally used for the treatment of epilepsy, the keto diet involves a meal plan that is very low in carbs and high in fat. It touts significant weight loss by putting the body into a state of ketosis (the state when the body doesn’t have enough carbohydrates to use for energy, so it burns fat instead).1 It's important to note that there is no research to date to assess the safety of the keto diet long-term.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    What is the Mediterranean diet?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    The Mediterranean diet is a highly regarded way of eating that is inspired by the eating and lifestyle habits of people who live in the Mediterranean, such as Greek populations. The long-term, lifestyle approach promotes flavor, community, movement, and abundance or nutrients and food choices. Staples of the Mediterranean diet include whole grains; vegetables; lean protein sources like fish, legumes, and nuts; and healthy fats like olive oil. Research suggests that the Mediterranean diet may reduce the risk of heart disease, cancer, and diabetes.2 It is often named the best overall diet by "U.S. News and World Report."
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    What is an anti-inflammatory diet?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Those with chronic inflammation or inflammatory diseases may be interested in following an anti-inflammatory diet. It focuses on foods that reduce inflammation in the body, such as fruits, vegetables, whole grains, and more. It recommends against foods that increase inflammation, such as processed foods and alcohol
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(4)}>
                    How many carbs are in a low-carb diet?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    There is no universal definition of a low-carb diet. The number of carbohydrates permitted on a low-carb diet depends on the specific meal plan. The keto diet, for example, is a variation of a very low-carb diet that typically recommends 20 to 50 grams of carbohydrates per day.4 Some evidence suggests that a low carbohydrate diet may be defined as less than 130 grams per day, or 26% of total energy intake
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(5)}>
                    What is the BRAT diet?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    The BRAT diet is a highly restrictive diet recommended for people with gastrointestinal issues or upset stomachs. BRAT stands for bananas, rice, applesauce, and toast. It’s not recommended as much anymore, but it used to be highly recommended by pediatricians for children with stomach problems.
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="loss">
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
