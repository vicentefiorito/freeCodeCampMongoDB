require('dotenv').config({path:'./process.env'});

//Install and setup Mongoose
const mongooseConnect = process.env['MONGO_URI'];
const mongoose = require('mongoose');
mongoose.connect(mongooseConnect,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to Mongo!');
}).catch(err => {
  console.log(err);
});

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
  let  dummyPerson = new Person({name: 'Dummy Person', age: 100, favoriteFoods:['Pinapple', 'Oysters', 'Steak']});
  //console.log(dummyPerson)
  //Saving the person
  dummyPerson.save((err,data) => {
    if(err) {
      console.log(err);
    }
    done(null , data);
    console.log('User added to the database');
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

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
