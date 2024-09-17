const authorModel=require("./authormodel")
const bookModel=require("./bookmodel")
const userSave=async(req,res)=>{
    const {aname,bname,price}=req.body;
    const author=await authorModel.create({
        authorname:aname
    })

    const book=await bookModel.create({
        bookname:bname,
        price:price,
        authorid:author._id
    })

    await authorModel.findByIdAndUpdate(author._id,{$push : {books:book._id}});

    res.send("ok");
}

const dataDisplay=async(req,res)=>{
    const data=await authorModel.find().populate("books");
    res.send(data)
}



module.exports={
    userSave,
    dataDisplay
}