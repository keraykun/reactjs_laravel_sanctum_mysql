
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


export default function WeightIndex(){

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
          label: "Nutritions Exercise",
          value: "nutritions",
          desc: "Proper nutrition is a key component for weight management. However, it is important to choose an overall eating pattern that is sustainable over the course of your life. A diet that is too restrictive may lead to a binge and restrict cycle, bringing on weight gain and possibly even disordered eating",
        },
        {
          label: "Intuitive Eating",
          value: "intuitive",
          desc: `Intuitive eating is a non-diet approach to eating that focuses on getting back in touch with internal body cues. With this approach, you are no longer under diet restrictions that make you feel bad about yourself. It also helps you break free from diets and get healthy by improving your relationship with food and exercise. While intuitive eating may aid in weight management, it is not the end goal.`,
        },

        {
          label: "Nutrient Dense Foods",
          value: "nutrient",
          desc: `Nutrient dense foods are foods that offer a high amount of nutrients for a small amount of calories. Meanwhile, energy-dense foods have fewer nutrients and more calories for the volume of food.`,
        },

        {
          label: "Vitamins and Minerals",
          value: "vitamins",
          desc: `Vitamins and minerals are also referred to as micronutrients. Not only are they crucial to overall health, but different micronutrients are found in different foods. It is best to consume the majority of necessary micronutrients through food, and eating a wide variety of different foods can help ensure adequate intake.`,
        },

        {
          label: "Protein",
          value: "protein",
          desc: `Protein is a macronutrient found in foods such as meat, fish, eggs, dairy, beans, and other foods in smaller amounts. The protein found in animal-derived foods such as beef, chicken, pork, fish, milk, and eggs is more bioavailable than those derived from plants. A diet adequate in protein is key to weight management, as protein promotes satiety and helps maintain muscle mass.`,
        },
        {
        label: "Diet Types",
        value: "diet",
        desc: `While there are many different types of diets and eating patterns, it is important to note that weight management is achieved primarily through energy balance, and a balanced diet. A balanced diet includes a range of foods to meet the macro and micronutrient needs according to their lifestyle, preferences, and cultural norms.

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
                <div className="text-3xl text-green-900 font-bold"><h1>Weight Management</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Reviewed By <span className="font-bold text-slate-600">Tara Laferrara, CPT</span> | Updated on <span className="font-bold text-slate-600">February 30, 2023</span></div>
                        </div>
                        <h1>Weight management is a multi-faceted strategy that involves nutrition, exercise, hormones, mental health, sleep, and other lifestyle interventions to keep body weight at a level that allows the individual to live a comfortable, active, and productive life.1 While lifestyle factors such as diet and exercise can impact weight, it’s also important to note that there is a genetic component when it comes to weight.

Maintaining energy balance, or the ability of the body to expend the calories it takes in, can be the most challenging aspect of weight management.2

 Additionally, some medical conditions and medications can impact weight as well making it difficult to achieve weight management goals. Whether you are looking to maintain, lose, or gain weight, we have nutrition plans and tips to help you reach your goals.   </h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    What role does leptin play in weight management?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Leptin is a hormone that regulates fat storage by telling your brain how much fat your body has stored. The mechanism by which it works also helps regulate appetite. While leptin is considered the “hallmark” of obesity, its exact mechanisms and pathways in the pathophysiology and potential treatment of obesity are not fully understood.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    Which pattern of eating is best for weight management?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    There is not a one-size-fits-all pattern of eating when it comes to weight management. Dietary choices must be customized to an individual, taking into account health history, preferences, and access, among other considerations. That said, many experts recommend the Mediterranean Diet for weight management and optimal nutrition due to its emphasis on fruits, vegetables, whole grains, lean proteins, and healthy fats. This eating pattern is easily customized for an individual's goals, preferences, and health concerns
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    How do you manage insulin resistance?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Insulin resistance (IR) is when your body stops responding to insulin and therefore cannot use glucose for energy. You might be more likely to develop insulin resistance if you are overweight or obese, making weight management a smart strategy for preventing this condition that can also lead to diabetes.

Diet, exercise, and managing abdominal fat are the first line of defense in management of IR. Through the guidance of a registered dietitian, some individuals may adapt a lower-carbohydrate diet or begin counting carbs. Maintaining a healthy lifestyle, as opposed to gaining and losing weight on a regular basis, can help prevent IR
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(4)}>
                    How do you manage weight with hypothyroidism?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Also known as underactive thyroid, hypothyroidism is a condition in which the thyroid gland doesn't produce enough thyroid hormone. This can result in fatigue and unplanned weight gain. Because some of this unintentional weight gain may be due to fluid retention, or edema, a low-sodium diet may be advised, along with a caloric deficit
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(5)}>
                    How you manage weight with PCOS?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    While PCOS (polycystic ovary syndrome) is associated with weight gain, the benefits of caloric restriction for this condition remain unclear. The exact causes of PCOS remain unknown, but one theory is that excess insulin may play a role, and therefore exercise paired with a lower-carbohydrate diet may benefit some individuals
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(6)}>
                    How important is exercise in weight management?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    The foods you eat and the quantity in which they are consumed will play the larger role in weight management. However, exercise can help expend energy, build and maintain muscle mass, and encourage a healthier overall lifestyle. Both are important in maintaining a healthy weight throughout the life cycle.
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="Nutritions">
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
