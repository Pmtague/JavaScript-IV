class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location
    }

    speak() {
        console.log(`Hello my ${this.name} is Fred, I am from ${this.location}`)
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
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject) {
        console.log(`${this.name} receives a perfect score on ${subject}`)
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
        console.log(this.favSubjects)
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor {
    constructor(attsPM) {
        super(attsPM);
        this.gradClassName = attsPM.gradClassName;
        this.favInstructor = attsPM.favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`)
    }

    debugsCode(student, subject) {
        console.log(`{name} debugs ${this.name}'s code on ${subject}`)
    }
}