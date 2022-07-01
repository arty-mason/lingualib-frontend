import course1 from "./img/courses/course1.jpg"
import course2 from "./img/courses/course2.jpg"
import grammarList from "./img/materials/grammar/grammarList.jpg"
import vocabList from "./img/materials/vocab/vocabList.jpg"
import tutor1 from "./img/tutors-photo/tutor1.jpg"
import tutor2 from "./img/tutors-photo/tutor2.jpg"

const coursesList = [
  {
    id: 1,
    name: 'Grammarize',
    levels: "A1-C1",
    length: "3 months",
    description: `To be able to build your speech correctly, you will always have to rely on specific rules of sentence composition, tense utilization & wording. Whether you are a complete beginner or quite profficient in English grammar, you will definitely find this course useful!`,
    coursePhoto: course1,
    materials: "Oxford English Grammar (Oxford), Grammar Practice (Longman), English Grammar In Use (Cambridge), Business Grammar & Practice (Collins)",
    materialsImg: grammarList,
    tutors: "Galina Mikhailovna Krukova (PhD in Lingustics, MSLU 2010)",
    tutorPhoto: tutor1,
  },
  {
    id: 2,
    name: 'Vocabulate',
    levels: "A1-C2",
    length: "From 3 to 16 weeks",
    description: `The course is an ideal choice for those, who desperately needs a specific lexicon improvement. We provide a wide selection of topics, be it IT, economics, survival English, preparing for an international exam or just a general expansion of your active vocab!`,
    coursePhoto: course2,
    materials: "IELTS Vocabulary by topics, Phrasal Verb Organizer (Flower), Survival English New Edition (Macmillan), English Vocabulary in Use (Cambridge), and many more!",
    materialsImg: vocabList,
    tutors: "Derrick Shawls, Master of Translation & Interpreting (Harvard, 2017)",
    tutorPhoto: tutor2,
  },
];

export default coursesList;