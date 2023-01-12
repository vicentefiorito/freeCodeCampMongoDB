require('dotenv').config();

//Install and setup Mongoose
const mongooseConnect = process.env.MONGO_URI;
const mongoose = require('mongoose');
mongoose.connect(mongooseConnect,{ useNewUrlParser: true, useUnifiedTopology: true });
//console.log(mongooseConnect);

//Creating a model
//Create a person schema called personSchema
let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true},
  age: {type: Number},
  favoriteFoods: [String]
})

//console.log(personSchema);

//Create a model called Person from the personSchema
let Person = mongoose.model('Person',personSchema);
//console.log(Person);

//Create and Save a Record of a Model
const createAndSavePerson = (done) => {
  //Creating a new person
  let dummyPerson = new Person({name:'Patrick', age:25});
  //console.log(dummyPerson)
  //saving the person to the DB
  dummyPerson.save((err, data) =>{
    if(err) {
      return console.log(err);
    } 
      done(null,data);
      console.log('Added to database');
  } )
};


//Create Many Records with model.create()
const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople,(err,people) => {
      if(err) {
        return console.log(err);
      }
      done(null,people);
      console.log('Created!')
    })
    //done(null,people);
};

//Use model.find() to Search your Database
const findPeopleByName = (personName, done ) => {
    Person.find({name: personName},(err,person) => {
      if(err) {
        return console.log(err);
      }
      done(null , person);
      console.log('Person founded');
    })
};

//Use model.findOne() to Return a Single Matching Document from Your Database
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err,data) => {  //Parameters in the method functions need to be the same ones that are used in the schemas, in this case favoriteFoods
    if(err) {
      return console.log(err)
    }
    done(err,data);
  })
};

//Use model.findById() to Search Your Database By _id
const findPersonById = (personId, done) => {
  Person.findById(personId, (err,id) => {
    if(err) {
      console.log(err);
    }
    done(null , id);
  });
};

//Perform Classic Updates by Running Find, Edit, then Save
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err,person) => {
    if(err) {
      console.log(err);
    }
    person.favoriteFoods.push(foodToAdd);// Adds the variable into the array
    //console.log(person.favoriteFoods);
    //Saves the updated person into the DB
    person.save((err,updatedPerson) => {
      if(err) {
        return console.log(err);
      }
      done(null, updatedPerson)
    })
  });

};

//Perform New Updates on a Document Using model.findOneAndUpdate()
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  //Arguments need to be passed as JS objects
  Person.findOneAndUpdate({name: personName},{age: ageToSet},{new:true},(err, updatedDoc) => {
    if(err) {
      return console.log(err)
    }
    done(null , updatedDoc );
  })

};

//Delete One Document Using model.findByIdAndRemove
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err,removed) => {
    if(err) {
      return console.log(err);
    }
    done(null, removed);
  })
};

//Delete Many Documents with model.remove()
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name:nameToRemove}, (err, removedPerson) => { //Need to pass the name argument as a JS object
    if(err) {
      return console.log(err)
    }
    done(null, removedPerson);
  }) 

};

//Chain Search Query Helpers to Narrow Search Results
const queryChain = (done) => {
  const foodToSearch = "burrito";
  const personName = Person.name;
  Person.find({favoriteFoods:foodToSearch}).sort({name:"asc"}).limit(2).select({age:0}).exec((err, search) => {
    if(err) {
      return console.log(err);
    }
    done(null, search);
    console.log('Chain executed');
  })

};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
