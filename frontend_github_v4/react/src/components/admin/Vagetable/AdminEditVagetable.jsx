import { useState } from "react"

import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiPlusCircle } from "react-icons/hi";
import { Form, Link, useLoaderData, useParams } from "react-router-dom"
import axiosClient from "../../../axios-client"
import { Textarea,Input } from "@material-tailwind/react";



export const AdminEditVagetableLoader = async({params}) =>{
    const {id} = params
    try {
       return axiosClient.get('admin/vagetable/edit/'+id).
        then(({data})=>{
            return data
        })
    } catch (error) {
        console.log(error)
    }
}



const DescriptionCard = ({ id, handlerDescriptionText, handlerDescription, description, text, index, onDelete }) => {
    let handler = () => onDelete(index,id);


    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '.5rem',
          padding: '.5rem',
          borderRadius: '.5rem',
        }}
      >
        <div className="gap-3 flex flex-col w-full">

        <Input  type="text" onChange={(e)=>handlerDescriptionText(index,e,'name')} value={text} label="Benefits Title" />
        <Textarea onChange={(e)=>handlerDescription(index,e,'details')} value={description} label="Benefits Description"/>
        </div>
        <AiOutlineCloseCircle className="text-3xl cursor-pointer" onClick={handler}/>
      </div>
    );
  };

  const FactsCard = ({ id, handlerFactsText, handlerFacts, description, text, index, onDelete }) => {
    let handler = () => onDelete(index,id);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '.5rem',
          padding: '.5rem',
          borderRadius: '.5rem',
        }}
      >
        <div className="gap-3 flex flex-col w-full">
        <Input  type="text" onChange={(e)=>handlerFactsText(index,e,'name')} value={text} label="Calories, Vitamin A, B , C , D , Z" />
        <Input type="text" onChange={(e)=>handlerFacts(index,e,'description')} value={description} label="Eg. 28 grams, % of DV"/>
        </div>
        <AiOutlineCloseCircle className="text-3xl cursor-pointer" onClick={handler}/>
      </div>
    );
  };


export default function AdminEditVagetable(){

    const data = useLoaderData()

    const {id} = useParams()

    const paramID = id

    const [name,setName] = useState(data.name)
    const [description,setDescription] = useState(data.description)
    const [image,setImage] = useState(data.image)
    const [avatar,setAvatar] = useState(null)

    const [benefits, setBenefits] = useState(data.benefits)
    const [facts, setFacts] =  useState(data.facts)
    const [benefitsDelete, setBenefitsDelete] = useState([])
    const [factsDelete, setFactsDelete] = useState([])

     /** benefits area */
     const handlerAddRow = (e) =>{
        e.preventDefault();
        setBenefits([...benefits,{
            id:'',
            vagetable_id:paramID.toString(),
            name:'',
            details:''
        }])
     }


     const deleteHandler = (index,id) => {

        setBenefitsDelete([...benefitsDelete,id])

        let newCardList = [...benefits];
        newCardList.splice(index, 1);
        setBenefits(newCardList);


      };

     const handlerDescription = (index,e,selected) =>{
        e.preventDefault();
        let temp = [...benefits];
        temp[index][selected] = e.target.value;
        setBenefits(temp);
     }

     const handlerDescriptionText = (index,e,selected) =>{
        e.preventDefault();
        let temp = [...benefits];
        temp[index][selected] = e.target.value;
        setBenefits(temp);
     }

        /** Facts area */


    const handlerAddRowFacts = (e) =>{
        e.preventDefault();
        setFacts([...facts,{
            id:'',
            vagetable_id:paramID.toString(),
            name:'',
            description:''
        }])
        }

     const deleteHandlerFacts = (index,id) => {

        setFactsDelete([...factsDelete,id])

        let newCardList = [...facts];
        newCardList.splice(index, 1);
        setFacts(newCardList);
      };


     const handlerFacts = (index,e,selected) =>{
        e.preventDefault();
        let temp = [...facts];
        temp[index][selected] = e.target.value;
        setFacts(temp);
     }

     const handlerFactsText = (index,e,selected) =>{
        e.preventDefault();
        let temp = [...facts];
        temp[index][selected] = e.target.value;
        setFacts(temp);
     }


    const imageHandler = (event) =>{
        let file = event.target.files[0]
        let reader = new FileReader()
        let limit = 1

        if(file['size'] / 1024 / 1024 > limit){
          Swal.fire({
             type:'error',
             title:'Picture Upload Failed',
             text:'File size exceeds 1 MB, Please try again',
             allowOutsideClick: false
          })
          setImage(data.image)
          reader.onload = (file) =>{
              setImage(data.image)
          }
          reader.readAsDataURL(file)
        }else{
            setImage(file)
            reader.onload = (file) =>{
                setAvatar(reader.result)
             }
             reader.readAsDataURL(file)
            }

     }



      const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('description',description);
        formData.append('name',name)
        formData.append('id',data.id)
        formData.append('image',image)
        formData.append('image_current',data.image)
        formData.append('benefits',JSON.stringify(benefits))
        formData.append('benefits_delete',JSON.stringify(benefitsDelete))
        formData.append('facts',JSON.stringify(facts))
        formData.append('facts_delete',JSON.stringify(factsDelete))

         axiosClient.post('admin/vagetable/update/'+data.id,formData).then((response=>{
            return toast.fire({
                title: 'Updated Successful!',
                text: response.data,
                position: 'top-center',
                icon: 'info',
                confirmButtonText: 'Okay'
            })
        })).catch(error => {
            return toast.fire({
                title: 'Something error',
                text: error.message,
                icon: 'error',
                position: 'top-center',
                confirmButtonText: 'Try Again'
            })
          });
      };


    return(
        <div className="w-full flex gap-5 items-start">
            <form  className="flex gap-10 max-w-8xl min-w-2xl bg-white shadow-md rounded w-full px-8 pt-6 pb-8 mb-4 flex-1" encType="multipart/form-data" onSubmit={handleSubmit} id="clear-form" method="post">
             <section className="w-[500px]">
                <div className="mb-4 relative">
                    {avatar?
                    <img className="flex-1 max-w-lg object-cover h-[400px]" src={avatar} alt="" />
                    :
                    <img className="flex-1 max-w-lg object-cover h-[400px]" src={data.image} alt="" />
                    }
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        File Picture
                    </label>
                    <p className="absolute w-full border-dashed border-2 border-blue-200 text-center px-2 py-3 font-bold" style={{ color:'rgb(148 163 184)' }}>Upload File</p>
                    <input name="image" accept="image/png, image/jpeg" onChange={imageHandler} className="opacity-0 cursor-grab shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="file" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Vagetable Name
                    </label>
                    <Input name="name" value={name} onChange={(e)=>setName(e.target.value)} label="Vagetable name" type="text" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Description
                    </label>
                    <Textarea name="description" rows={10} onChange={(e)=>setDescription(e.target.value)} defaultValue={description} label="Description"/>
                </div>


                <div className="flex items-center justify-between">
                {image && description && name ?
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                Update
               </button>
               :
               <button className="bg-blue-200 cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled>
                Update
               </button>
                }
                <Link to="/admin/vagetables" className="bg-purple-500 hover:bg-purple-400 text-white py-2 rounded-md px-4">Back</Link>
                </div>
             </section>
             <section className="w-[500px]">
             <label className="block text-gray-700 text-sm font-bold mb-2" >
                 Benefits Details ( Optional )
                 </label>
               {benefits.map((benefit,index)=>(

                 <div key={index} className="mb-4">
                 <DescriptionCard id={benefit.id} handlerDescriptionText={handlerDescriptionText} handlerDescription={handlerDescription} text={benefit.name} description={benefit.details} onDelete={deleteHandler} index={index} key={index} />
                 </div>
               ))}
                <div  onClick={handlerAddRow} className="flex items-center gap-2 bg-blue-500 text-white rounded-md p-1 cursor-pointer ">
                    <HiPlusCircle className="text-3xl"/><span>Add More</span>
                </div>
             </section>

             <section className="w-[500px]">
             <label className="block text-gray-700 text-sm font-bold mb-2" >
                 Facts Details ( Optional )
                 </label>
               {facts.map((fact,index)=>(
                 <div key={index} className="mb-4">
                 <FactsCard id={fact.id} handlerFactsText={handlerFactsText} handlerFacts={handlerFacts} text={fact.name} description={fact.description} onDelete={deleteHandlerFacts} index={index} key={index} />
                 </div>
               ))}
                <div  onClick={handlerAddRowFacts} className="flex items-center gap-2 bg-blue-500 text-white rounded-md p-1 cursor-pointer ">
                    <HiPlusCircle className="text-3xl"/><span>Add More</span>
                </div>
             </section>
            </form>

        </div>
    )
}


