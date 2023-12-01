const{booksDatabase} = require('../db/booksdb');

const add=(newbook)=>{
    console.log("\n1.FUNCTION TO ADD A NEW BOOK IN THE DB----------------------------------------------------------------\n");
    newbook.id=booksDatabase.length+1;
    booksDatabase.push(newbook);

    console.log("student successfully added\n");
    console.log("Book list now:\n");
    console.log(booksDatabase);
};

const remove=(id)=>{
    console.log("\n2.FUNCTION TO REMOVE A  BOOK IN THE DB----------------------------------------------------------------\n");
   var exists=booksDatabase.find(ele=>ele.id==id);
   if (!exists) {
    console.log("Book not found");
   }
   else{
    var index=booksDatabase.indexOf(exists);
    booksDatabase.splice(index,1);
    console.log("Book successfully removed\n");
    console.log("Book list now:\n");
    console.log(booksDatabase);
   }

};

const displayAll=()=>{
    console.log("\n3.FUNCTION TO DISPLAY ALL BOOKS IN THE DB----------------------------------------------------------------\n");
    console.log("Book list now:\n");
    console.log(booksDatabase);
};

const update=(id,key,value)=>{

    console.log("\n4.FUNCTION TO UPDATE A BOOK'S PROPERTY IN THE DB----------------------------------------------------------------\n");
    var exists=booksDatabase.find(ele=>ele.id==id);
    if (!exists) {
        console.log("Book not found");
    }
    else{
        var index=booksDatabase.indexOf(exists);
        exists[key]=value;
        console.log("Book successfully updated\n");
        console.log("Book list now:\n");
        console.log(booksDatabase);
    }
};
const updateMany=(id,obj)=>{
    console.log("\n5.FUNCTION TO UPDATE MANY PROPERTIES OF A BOOK IN THE DB----------------------------------------------------------------\n");
    var exists=booksDatabase.find(ele=>ele.id===id);
    if (!exists) {
        console.log("Book not found");
    }
    else{
        for(const key in obj){
            exists[key]=obj[key];
        }
        console.log("Book successfully updated\n");
        console.log("Book list now:\n");
        console.log(booksDatabase);
    }
};

const findItemWithProperty=(key,value)=>{

    console.log("\n6.FUNCTION TO RETURN BOOKS WITH THE GIVE PROPERTIES ----------------------------------------------------------------------------------\n");
    var answer=booksDatabase.filter(ele=>ele[key]===value);
    console.log(`BOOKS WITH ${key} EQUAL TO ${value} ARE :`);
    console.log(answer);
};

const displayAllBooknames=()=>{
   
    console.log("\n7.FUNCTION TO DISPLAY ALL BOOK NAMES IN THE DB----------------------------------------------------------------\n");
    console.log("Books names list :\n");
    booksDatabase.forEach(ele=>console.log(ele["title"]));
       
    
}

module.exports={
    add,
    remove,
    displayAll,
    update,
    updateMany,
    findItemWithProperty,
    displayAllBooknames
}
