import { useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiPlusCircle } from "react-icons/hi";
import { Textarea,Input } from "@material-tailwind/react";
import axiosClient from "../../../axios-client"
import { Link } from "react-router-dom";

const DescriptionCard = ({ handlerDescriptionText, handlerDescription, description, text, index, onDelete }) => {
    let handler = () => onDelete(index);

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
        <Textarea onChange={(e)=>handlerDescription(index,e,'description')} value={description} label="Benefits Description"/>
        </div>
        <AiOutlineCloseCircle className="text-3xl cursor-pointer" onClick={handler}/>
      </div>
    );
  };

  const FactsCard = ({ handlerFactsText, handlerFacts, description, text, index, onDelete }) => {
    let handler = () => onDelete(index);

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



export default function AdminAddVagetable(){
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState(null)
    const [avatar,setAvatar] = useState(null)
    const [benefits, setBenefits] = useState([
        {
            name:'',
            description:''
        }
    ])
    const [facts, setFacts] = useState([
        {
            name:'',
            description:''
        }
    ])


    const imageHandler = (event) =>{
        let file = event.target.files[0]
        let reader = new FileReader()
        let limit = 1 //1mb

        if(file['size'] / 1024 / 1024 > limit){
          Swal.fire({
             type:'error',
             title:'Picture Upload Failed',
             text:'File size exceeds 1 MB, Please try again',
             allowOutsideClick: false
          })
            setImage(event.target.value=null)
            reader.onload = (file) =>{
                setAvatar(null)
            }
        }else{
            setImage(file)
            reader.onload = (file) =>{
                setAvatar(reader.result)
             }
        }
        reader.readAsDataURL(file)
     }


     /** benefits area */
     const handlerAddRow = (e) =>{
        e.preventDefault();
        setBenefits([...benefits,{
            name:'',
            description:''
        }])
     }
     const deleteHandler = (index) => {
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
            name:'',
            description:''
        }])
        }

     const deleteHandlerFacts = (index) => {
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



      const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image',image);
        formData.append('description',description);
        formData.append('name',name)
        formData.append('benefits',JSON.stringify(benefits))
        formData.append('facts',JSON.stringify(facts))

        axiosClient.post('admin/vagetable/create',formData).then(response=>{
            setImage(null)
            setAvatar(null)
            setName('')
            setDescription('')
            setBenefits([{name:'',description:''}])
            setFacts([{name:'',description:''}])
           document.getElementById('clear-form').reset()
            return toast.fire({
                title: 'Created!',
                text: response.data,
                position: 'top-center',
                icon: 'success',
                confirmButtonText: 'Delete'
            })
        }).catch(error => {
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
                    <img className="flex-1 w-full object-cover h-[400px]" src={avatar} alt="" />
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
                    <Textarea name="description" onChange={(e)=>setDescription(e.target.value)} rows={10} label="Description" />
                </div>


                <div className="flex items-center justify-between">
                {image && description && name ?
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                Create
               </button>
               :
               <button className="bg-blue-200 cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled>
                Create
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
                 <DescriptionCard handlerDescriptionText={handlerDescriptionText} handlerDescription={handlerDescription} text={benefit.name} description={benefit.description} onDelete={deleteHandler} index={index} key={index} />
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
                 <FactsCard handlerFactsText={handlerFactsText} handlerFacts={handlerFacts} text={fact.name} description={fact.description} onDelete={deleteHandlerFacts} index={index} key={index} />
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


