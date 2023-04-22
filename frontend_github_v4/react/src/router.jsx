


import {createBrowserRouter } from "react-router-dom"


import Notfound from "./components/Notfound"

import Protectedlayout   from "./components/layouts/ProtectedLayout"

import AdminLayout  from "./components/layouts/AdminLayout"
import Setting from './components/admin/Setting'
import Profile from "./components/admin/Profile"
import AdminHome, { AdminHomeLoader } from './components/admin/Home'
import Product, {  deleteProductAction, productsLoader } from "./components/admin/product/Product"
import EditProduct, { EditProductLoader, UpdateProductLoader } from "./components/admin/product/ProructEdit"
import ProductAdd, { AddProductLoader } from "./components/admin/product/ProductAdd"
import ProductIndex from "./components/admin/product/ProductIndex"

import UserLayout from "./components/layouts/UserLayout"
import UserSetting from './components/user/UserSetting'
import UserProfile,{UserRecordLoader} from "./components/user/UserProfile"
import UserHome,{UserHomeLoader} from './components/user/UserHome'

import GuestLayout from "./components/layouts/GuestLayout"
import HomePage from './components/guest/HomPage'

import BestToolsExercise from './components/guest/BestToolsExercise'
import ToolsIndex from './components/guest/components/Besttools/ToolsIndex'

import BestHealthyFood from './components/guest/BestHealthyFood'
import FoodsIndex from './components/guest/components/Bestfoods/FoodsIndex'
import FoodsFacts from './components/guest/components/Bestfoods/FoodsFacts'

import BestVagetables from './components/guest/BestVagetables'
import BestVagetableIndex from './components/guest/components/Bestvagetable/BestVagetableIndex'

import BestFruits from './components/guest/BestFruits'
import FruitsIndex from './components/guest/components/Bestfruits/FruitsIndex'

import BeginnerIndex from './components/guest/components/Fitness/Beginners/BeginnerIndex'
import WalkingIndex from './components/guest/components/Fitness/Walking/WalkingIndex'
import CardioIndex from './components/guest/components/Fitness/Cardio/CardioIndex'
import StrengthIndex from './components/guest/components/Fitness/Strength/StrengthIndex'
import RunningIndex from './components/guest/components/Fitness/Running/RunningIndex'
import YogaIndex from './components/guest/components/Fitness/Yoga/YogaIndex'
import FitnessIndex from './components/guest/components/Fitness/All/FitnessIndex'

import WeightIndex from './components/guest/components/Nutritions/Weight/WeightIndex'
import FactsIndex from './components/guest/components/Nutritions/Facts/FactsIndex'
import DietsIndex from './components/guest/components/Nutritions/Diets/DietsIndex'
import MealIndex from './components/guest/components/Nutritions/Meal/MealIndex'
import DeliveryServicesIndex from './components/guest/components/Nutritions/Delivery/DeliveryServicesIndex'



import Fruit,{FruitLoader} from './components/guest/Fruit'
import FruitIndex from './components/guest/components/Resources/Fruits/FruitIndex'
import FruitFacts,{ShowFruitLoader} from './components/guest/components/Resources/Fruits/FruitFacts'

import Vagetable,{ VagetableLoader } from './components/guest/Vagetable'
import VagetableIndex from './components/guest/components/Resources/Vagetables/VagetableIndex'
import VagetableFacts,{ ShowVagetableLoader } from './components/guest/components/Resources/Vagetables/VagetableFacts'


import Meats,{ MeatsLoader } from './components/guest/Meats'
import MeatsIndex from './components/guest/components/Resources/Meats/MeatsIndex'
import MeatsFacts,{ ShowMeatsLoader } from './components/guest/components/Resources/Meats/MeatsFacts'


import Login from './components/guest/Login'
import Register, { userChoicesLoader }  from "./components/guest/register/Register"

import BMIIndex from "./components/guest/components/Tools/BMI/BMIIndex"
import FatIndex from "./components/guest/components/Tools/Fat/FatIndex"

import AdminFruit,{AdminFruitLoader} from "./components/admin/Fruit/AdminFruit"
import AdminFruitIndex, {AdminDeleteFruitAction} from "./components/admin/Fruit/AdminFruitIndex"
import AdminAddFruit from "./components/admin/Fruit/AdminAddFruit"
import AdminEditFruit,{AdminEditFruitLoader} from "./components/admin/Fruit/AdminEditFruit"
import Connection from "./components/Connection"
import AdminVagetable, { AdminVagetableLoader } from "./components/admin/Vagetable/AdminVagetable"
import AdminIndexVagetable, { AdminDeleteVagetableAction } from "./components/admin/Vagetable/AdminIndexVagetable"
import AdminAddVagetable from "./components/admin/Vagetable/AdminAddVagetable"
import AdminEditVagetable, { AdminEditVagetableLoader } from "./components/admin/Vagetable/AdminEditVagetable"
import AdminMeat, { AdminMeatLoader } from "./components/admin/Meat/AdminMeat"
import AdminIndexMeat, { AdminDeleteMeatAction } from "./components/admin/Meat/AdminIndexMeat"
import AdminAddMeat from "./components/admin/Meat/AdminAddMeat"
import AdminEditMeat, { AdminEditMeatLoader } from "./components/admin/Meat/AdminEditMeat"


const router = createBrowserRouter([
    {
      element: <Protectedlayout />,
      children: [
        {
          path: "admin",
          element: <AdminLayout />,
          children: [
            {
            path: "dashboard",
            element: <AdminHome />,
            loader:AdminHomeLoader
            },
            {
            path: "fruits",
            element: <AdminFruit />,
            children:[
                {
                index:true,
                element:<AdminFruitIndex/>,
                loader: AdminFruitLoader,
                action: AdminDeleteFruitAction,
                },
                {
                path:'create',
                element:<AdminAddFruit/>,
                },
                {
                path:':name/:id',
                element:<AdminEditFruit/>,
                loader:AdminEditFruitLoader,
                // action:AdminUpdateFruitAction
                }
                ]
              },
              {
                path: "vagetables",
                element: <AdminVagetable />,
                children:[
                {
                index:true,
                element:<AdminIndexVagetable/>,
                loader: AdminVagetableLoader,
                action: AdminDeleteVagetableAction,
                },
                {
                path:'create',
                element:<AdminAddVagetable/>,
                },
                {
                path:':name/:id',
                element:<AdminEditVagetable/>,
                loader:AdminEditVagetableLoader,
                }
                ]
            },
            {
                path: "meats",
                element: <AdminMeat />,
                children:[
                {
                index:true,
                element:<AdminIndexMeat/>,
                loader: AdminMeatLoader,
                action: AdminDeleteMeatAction,
                },
                {
                path:'create',
                element:<AdminAddMeat/>,
                },
                {
                path:':name/:id',
                element:<AdminEditMeat/>,
                loader:AdminEditMeatLoader,
                }
                ]
            },
            // {
            //   path: "profile",
            //   element: <Profile />,
            // },
            // {
            //   path: "setting",
            //   element: <Setting />,
            // },
            // {
            //   path: "product",
            //   element: <Product />,
            //   children:[
            //     {
            //       index:true,
            //       element:<ProductIndex/>,
            //       loader: productsLoader,
            //       action: deleteProductAction,
            //     },
            //     {
            //       path:'create',
            //       element:<ProductAdd/>,
            //       action:AddProductLoader
            //     },
            //     {
            //       path:':id',
            //       element:<EditProduct/>,
            //       loader:EditProductLoader,
            //       action:UpdateProductLoader
            //     }
            //   ]
            // },
        ],
        },
        {
            path: "user",
            element: <UserLayout />,
            children: [
              {
                path: "dashboard",
                element: <UserHome />,
                loader:UserHomeLoader
              },
              {
                path: "profile",
                element: <UserProfile />,
                loader:UserRecordLoader
              },
              {
                  path: "setting",
                  element: <UserSetting />,
              }
          ],
          },
      ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children:[
            {
            index:true,
            element:<HomePage/>
            },
            {
            path:'best-tools-exercise',
            element:<BestToolsExercise/>,
            children:[
                {
                index:true,
                element:<ToolsIndex/>
                }
            ],
            },
            {
            path:'best-healthy-food',
            element:<BestHealthyFood/>,
            children:[
                {
                index:true,
                element:<FoodsIndex/>
                },
                {
                path:'facts/:id',
                element:<FoodsFacts/>
                }
            ],
            },
            {
            path:'best-vagetables',
            element:<BestVagetables/>,
            children:[
                {
                index:true,
                element:<BestVagetableIndex/>
                },
            ],
            },
            {
            path:'best-fruits-weight',
            element:<BestFruits/>,
            children:[
                {
                index:true,
                element:<FruitsIndex/>
                },
            ],
            },
            {
            path:'resource-fruits',
            element:<Fruit/>,
            children:[
                {
                  index:true,
                  element:<FruitIndex/>,
                  loader:FruitLoader
                },
                {
                  path:':name/:id',
                  element:<FruitFacts/>,
                  loader:ShowFruitLoader
                }
            ]
            },
            {
            path:'resource-vagetables',
            element:<Vagetable/>,
            children:[
                {
                  index:true,
                  element:<VagetableIndex/>,
                  loader:VagetableLoader
                },
                {
                  path:':name/:id',
                  element:<VagetableFacts/>,
                  loader:ShowVagetableLoader
                }
            ]
            },
            {
            path:'resource-meats',
            element:<Meats/>,
            children:[
                {
                    index:true,
                    element:<MeatsIndex/>,
                    loader:MeatsLoader
                },
                {
                    path:':name/:id',
                    element:<MeatsFacts/>,
                    loader:ShowMeatsLoader
                }
            ]
            },
            {
            path:'fitness-beginners',
            element:<BeginnerIndex/>,
            },
            {
            path:'fitness-walking',
            element:<WalkingIndex/>,
            },
            {
            path:'fitness-cardio',
            element:<CardioIndex/>,
            },
            {
            path:'fitness-strength',
            element:<StrengthIndex/>,
            },
            {
            path:'fitness-running',
            element:<RunningIndex/>,
            },
            {
            path:'fitness-yoga',
            element:<YogaIndex/>,
            },
            {
            path:'fitness-all',
            element:<FitnessIndex/>,
            },
            {
            path:'nutrition-weight-management',
            element:<WeightIndex/>,
            },
            {
            path:'nutrition-facts',
            element:<FactsIndex/>,
            },
            {
            path:'nutrition-diets',
            element:<DietsIndex/>,
            },
            {
            path:'nutrition-meal',
            element:<MealIndex/>,
            },
            {
            path:'nutrition-delivery-service',
            element:<DeliveryServicesIndex/>,
            },
            {
            path:'bmi-calculator',
            element:<BMIIndex/>,
            },
            {
            path:'fat-burner-calculator',
            element:<FatIndex/>,
            },
            {
            path: "login",
            element: <Login />,
            },
            {
            path: "register",
            element: <Register />,
            loader:userChoicesLoader
            },
        ]
    },
    {
        path: "/connection",
        element: <Connection />,
    },
    {
        path: "*",
        element: <Notfound />,
    }
  ]);

export default router
