const pdfG = require('pdfkit');
const fs = require('fs');
const model = require('./data');

class QuestionGenerator {
  createHeading(doc, sub, totalMarks) {
    const heading = model[sub].subject;
    doc.text(`Question Paper 2023-2024 \nSubject- ${heading}\nTotal: ${totalMarks} marks`,
      {
        bold: true,
        underline: true,
        align: 'center'
      }
    );
  }

  fetchQuestions(sub, lev, count) {
    var questions = [];

    model[sub].topic.forEach((topic) => {
      topic.level[lev].ques.forEach((q) => {
        questions.push(q);
      });
    });

    // Return only the required number of questions based on the count
    return questions.slice(0, count);
  }

  createFooter(doc) {
    doc.text('end of questions').fontSize(10);
  }

  createPaperWithoutOptions(sub, totalMarks, easyPercentage, mediumPercentage, hardPercentage) {
    let content = new pdfG();
    content.pipe(fs.createWriteStream('QuestionPaper.pdf'));
    this.createHeading(content, sub, totalMarks);
    content.moveDown();

    let s = 1;

    // Calculate the count based on the percentage of total marks
    const easyCount = Math.round(easyPercentage / 5);
    const mediumCount = Math.round(mediumPercentage/5);
    const hardCount = Math.round(hardPercentage/ 5);

    for (let k = 0; k < 3; k++) {
      const count = k === 0 ? easyCount : (k === 1 ? mediumCount : hardCount);
      const quesarray = this.fetchQuestions(sub, k, count);
      for (let i = 0; i < quesarray.length; i++) {
        content.text(`\nQ${s++}. ${quesarray[i]}       5 marks \n`);
      }
    }

    content.moveDown();
    this.createFooter(content);
    content.end();
  }
}

module.exports = QuestionGenerator;
