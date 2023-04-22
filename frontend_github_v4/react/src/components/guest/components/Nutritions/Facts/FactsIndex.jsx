
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


export default function FactsIndex(){

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
          label: "Weights Management",
          value: "Weights",
          desc: "Weight management is the process and habits adapted over time to maintain a certain weight range throughout the lifespan. Lifestyle, including sleep, along with caloric intake and activity level, are all components of weight management.   ",
        },
        {
          label: "Calorie Counter",
          value: "calorie",
          desc: `A calorie counter is an app or equation used to help determine the proper energy intake range to meet your unique needs. Calorie counting apps can be a great tool not only for scanning food labels, managing meals out, and logging food, but also for planning ahead by pre-logging. There are many different calorie counting apps available, and you may experiment with free trials of each until you decide on the best one for your needs and lifestyle. Note that calorie counters may not be helpful for all populations and should be avoided if they trigger disorder eating behaviors or negative associations with certain foods.`,
        },

        {
          label: "Micronutrients",
          value: "micronutrients",
          desc: `A micronutrient is a chemical element or substance required in trace amounts by humans for normal growth, development, and maintenance. Most people can get the micronutrients they need from a balanced diet. The micronutrients listed on the nutrition facts panel below the solid black line are those most Americans do not get enough of or are deficient in: Vitamin D, Calcium, Iron, and Potassium`,
        },

        {
          label: "Macronutrients",
          value: "m acronutrients",
          desc: `Macronutrients are the nutritive components found in food—fat, protein, and carbohydrate—needed in larger amounts for energy and to maintain the body’s structure and systems. The nutrition facts panel lists the percentage of each of these macronutrients in a serving based on a 2000-calorie diet. A registered dietitian can help plan the appropriate split of protein, fat, and carbohydrates to meet your needs and help you achieve your health goals.`,
        },

        {
          label: "Supplements",
          value: "supplements",
          desc: `Supplements are products taken by mouth that contain some kind of dietary element, such as vitamins and minerals. Some supplements may contain a botanical or herbal (plant-derived) ingredient. It is important to note that “natural” does not necessarily mean harmless and that supplements may interfere with the efficacy of other drugs or result in adverse reactions.7 Moreover, the FDA (Food and Drug Administration) does not review dietary supplements before they are available to the consumer.`,
        },
        {
        label: "Balanced Diet",
        value: "balanced",
        desc: `A balanced diet indicates a meal pattern that includes adequate calories, fat, protein, and carbohydrate, as well as micronutrients, to support overall bodily function and well-being. As the nutrition facts panel alludes to, most adults need somewhere between 2000 and 2500 calories per day, but these needs vary greatly depending on age, weight, lifestyle, and physical activity. Utilizing the nutrition facts panel can help achieve a more balanced diet by creating awareness of which nutrients to increase and minimize.

        As of 2022, the top ranking diet for weight loss according to "U.S. News and World Reports" is the Flexitarian Diet, which promotes weight management via vegetarian forward meals with sometimes having meat.`,
        },
        {
        label: "Diet Cultures",
        value: "cultures",
        desc: `Diet culture is the pervasive belief that appearance and body shape are more important than physical, psychological, and general well-being. It's the idea that controlling your body, particularly your diet—by limiting what and how much you eat—is normal.

        According to the National Eating Disorders Association, diet culture also conflates body size with health, which may stigmatize and/or pathologize larger bodies. Diet culture also refers to the concept that some foods are good and others are inherently bad, rather that encouraging the acceptance of all foods.`,
        },
      ];

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>Nutrition Facts</h1></div>
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
                    How do you read nutrition labels?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    The nutrition facts panel tells you what a serving size looks like, how many calories are in a serving, and how many grams of carbohydrate, fat, and protein are in that serving. It also highlights cholesterol, sodium, potassium, iron, Vitamin D, and calcium content. Some of these quantities are also expressed as a percentage, meaning that one serving of the food in question provides a certain percentage of the DV (daily value) for that nutrient. These numbers are based on a 2,000 calorie per day diet.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    What does RDA mean in nutrition?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    RDA stands for Recommended Dietary Allowance. It is the average daily level of intake sufficient to meet the nutrient requirements of nearly all (97-98%) of healthy people
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    How do nutritional needs change over time?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Nutritional needs are highest during infancy,2 adolescence,3 and pregnancy.4 With age, some nutrient needs decline, but the need for protein may increase to prevent sarcopenia.5

Most importantly, nutrition is highly personalized at all stages of life and should be planned with the assistance of a registered dietitian.
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="Weights">
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
