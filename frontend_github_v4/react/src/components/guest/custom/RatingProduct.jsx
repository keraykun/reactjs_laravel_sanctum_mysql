import Rating from '@mui/material/Rating';
import { HiOutlineUserGroup } from "react-icons/hi";

export default function RatingProduct({value,setValue}){
    return(
        <div className="flex items-center gap-3 font-bold text-md">
        <Rating
            name="simple-controlled"
            defaultValue={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
                setValue(newHover);
              }}
        />
        {value !== null && (
            <span>{value !== -1 ? value : 1} / 5</span>
            )}
        <HiOutlineUserGroup className="text-lg"/>
    </div>
    )
}
