const {add,remove,displayAll,update,updateMany}=require("./controller/controlFunctions");

const newBook={
    title: 'Hired to love', 
    author: 'Gou Precious', 
    year: 2020 
    
};
add(newBook);

remove(3);

displayAll();

update(4,'year',2021);

const toBeUpdated={
    author:"James Smith",
    year:2005
};

updateMany(2,toBeUpdated);

