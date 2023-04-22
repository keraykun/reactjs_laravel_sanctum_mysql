
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


export default function DeliveryServicesIndex(){

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
          label: "Vegan",
          value: "Vegan",
          desc: "A meal pattern that eliminates all animal foods and foods derived from animals, including all meat, dairy, eggs, fish, and honey.",
        },
        {
          label: "Vegetarian",
          value: "vegetarian",
          desc: `This term encompasses a wide variety of eating patterns that are based largely on non-animal derived foods. Unlike vegans, vegetarians may eat eggs, dairy, and honey.`,
        },

        {
          label: "Meal Prep",
          value: "prep",
          desc: `The process of preparing food, and commonly recognized as being completed well ahead of consuming the meal. `,
        },

      ];

    return(
        <div className='w-full h-full'>
            <div className='max-w w-[80%] mx-auto flex flex-col gap-10 py-20'>
                <div className="text-3xl text-green-900 font-bold"><h1>Meal Delivery Services</h1></div>
                <div className="flex flex-row gap-5 shadow-lg flex-wrap w-full items-stretch justify-center">
                     <div className="w-full border-l-[5px] flex flex-col gap-5 p-5 text-lg border-green-700" style={{ background:'rgb(240 253 244)' }}>
                        <div>
                            <div className="italic">Reviewed By <span className="font-bold text-slate-600">Tara Laferrara, CPT</span> | Updated on <span className="font-bold text-slate-600">February 30, 2023</span></div>
                        </div>
                        <h1>
                        Whether you’re pressed for time, don’t know how to cook, or just don’t want to, meal delivery services can take a little—or all— of the preparation out of planning the week’s menu. What’s best for you may be determined by dietary preferences, price points, or the time it takes to get food on the table—most likely, it'll be a combination of all three.
                        </h1>
                      </div>
                </div>
                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                FREQUENTLY ASKED QUESTIONS
                </Typography>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(1)}>
                    What is the cheapest meal delivery service?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    With meals as inexpensive as $4.99 per serving, Dinnerly may be the most cost-effective nationwide delivery service. However, local delivery services may offer lower prices in your area.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(2)}>
                    What is the best pre-made meal delivery service?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Freshly is our top pick for flexible, ready-made meals, offering options for gluten-free, vegetarian, and meat-eaters alike.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(3)}>
                    What is the best vegan meal delivery service?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    The Purple Carrot offers both pre-made meals and meal kits, and earns high marks for nutrient density. With delivery in 48 states and plans starting at $9.99, we bet you’ll love it, too—whether or not you’re vegan.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(4)}>
                    What meal delivery services are good for kids?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    Little Spoon has offerings for babies, toddlers, and kids alike, as well as smoothies, vitamins, and at-home remedies. This service helps instill healthy habits with balanced plates, plenty of veggies, and nutrient-dense smoothies for snack time.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} animate={customAnimation}>
                    <AccordionHeader className="px-5"  onClick={() => handleOpen(5)}>
                    Why should I use a meal delivery service?
                    </AccordionHeader>
                    <AccordionBody className="text-lg p-10">
                    A meal delivery service can help meet your nutritional needs. If you struggle with time, planning, or execution of meal prep, a meal delivery service may be the answer. Whether it’s for a short period of time or for the long haul, meal delivery services can meet different budget and dietary needs.
                    </AccordionBody>
                </Accordion>
                </div>

                <div className="flex flex-col shadow-lg rounded-xl">
                <Typography className="text-lg font-bold uppercase p-2 bg-green-800 text-white">
                    Key Terms
                </Typography>
                <Tabs id="custom-animation" value="Vegan">
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
