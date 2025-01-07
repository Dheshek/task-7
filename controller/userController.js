import user from '../model/userModel.js';

export const create = async(req,res) => {
    try{
        let userdata = new user(req.body);
        const {email} = userdata;
        console.log(userdata);
        const userExist = await user.findOne({email});


        if(userExist){
            return res.staus(400).json({message:"User created"})
        }
        const saveduser = await userdata.save();
        res.status(200).json({userdata})
    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }

}
export const fetch = async(req,res)=>{
    try{
        res.send("Hello World")
    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }
}
export const update = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const updateUser = await user.findByIdAndUpdate(id,req.body,
            {new : true});
        res.status(200).json({updateUser});
    }
    catch(err){
        res.status(500).json({error: err});
    }
}
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await user.findOne({ _id: id });
        if (!userExist) {
            return res.status(404).json({ message: "User not found" });
        }

        
        await user.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}
