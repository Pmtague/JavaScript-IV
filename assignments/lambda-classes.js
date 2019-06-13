// Classes

class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(attsIns) {
        super(attsIns);
        this.specialty = attsIns.specialty;
        this.favLanguage = attsIns.favLanguage;
        this.catchPhrase = attsIns.catchPhrase
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(attsStu) {
        super(attsStu);
        this.previusBackground = attsStu.previusBackground;
        this.className = attsStu.className;
        this.favSubjects = attsStu.favSubjects
    }

    listsSubjects() {
        return this.favSubjects
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(attsPM) {
        super(attsPM);
        this.gradClassName = attsPM.gradClassName;
        this.favInstructor = attsPM.favInstructor;
    }

    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//Objects

const emily = new Instructor({
    name: 'Emily',
    age: 45,
    location: 'San Diego',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: "Ain't nobody got time for that!"
})

const hope = new Instructor({
    name: 'Hope',
    age: 31,
    location: 'San Diego',
    specialty: 'Back-end',
    favLanguage: 'Python',
    catchPhrase: "You need to get your life together."
})

const jen = new Student({
    name: 'Jen',
    age: 39,
    location: 'Milwaukee',
    previusBackground: 'Accounting',
    className: 'Web21',
    favSubjects: ['Math', 'English', 'Programming']
})

const wayne = new Student({
    name: 'Wayne',
    age: 20,
    location: 'Disney Land',
    previusBackground: 'Sales',
    className: 'WebPT7',
    favSubjects: ['Philosophy', 'History', 'Programming']
})

const jon = new ProjectManager({
    name: 'Jon',
    age: 33,
    location: 'L.A.',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: "I wish I knew.",
    gradClassName: "Web17",
    favInstructor: "Dan"
})

const sarah = new ProjectManager({
    name: 'Sarah',
    age: 25,
    location: 'Miami',
    specialty: 'Retrieving Links',
    favLanguage: 'English',
    catchPhrase: "Don't forget to fill out your daily standup forms!",
    gradClassName: "Web16",
    favInstructor: "Josh"
})

// Testing

console.log("Jon's catchphrase: " + jon.catchPhrase)  // 'Jon's catchphrase: I wish I knew.'
console.log("Emily's specialtiy: " + emily.specialty)  // 'Emily's specialtiy: Front-end'
console.log(sarah.speak())  // 'Hello my name is Sarah, I am from Miami'
console.log(hope.demo('arrays')) //
console.log(emily.grade(wayne, 'concatenation'))
console.log(jen.listsSubjects())
console.log(wayne.PRAssignment('JavaScript II'))
console.log(jen.sprintChallenge('Advanced CSS'))
console.log(jon.standUp('Web21'))
console.log(sarah.debugsCode(wayne, 'classes'))