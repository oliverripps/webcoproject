class SpookyThing{
  constructor(cursedness, age, attire) {
    this.cursedness = cursedness;
    this.age = age;
    this.attire = attire;
  }
  spook() {
    console.log(`Harry Potter`)
  }
}

class Ghost extends SpookyThing{
  constructor(cursedness, age, attire, name, location){
    super(cursedness, age, attire);
    this.name=name;
    this.location=location;
  }
  change_attire(newattire){
    attire=newattire;
    console.log('The ghost is now wearing ${this.attire}')
  }
  move(newlocation){
    location=newlocation;
    console.log('The ghost is now in ${this.location}')
  }
}

class HarryPotter extends SpookyThing{
  constructor(cursedness, age, attire, name, location, book){
    super(cursedness, age, attire, name, location);
    this.book=book;
  }
  curse(){
    console.log('CURSE!')
  }
}

const ghost1 = new Ghost('very',20,'nothing','ghosty','your house')
ghost1.move()
ghost1.change_attire()
