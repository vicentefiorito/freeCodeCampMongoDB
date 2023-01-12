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
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
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
