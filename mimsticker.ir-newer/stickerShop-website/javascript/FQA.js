const body = document.body;

class fqa {
    question;
    answer;
    questionParagraph;
    answerParagraph;
    questionNo;

    constructor(question, answer, questionNo) {
        this.question = question;
        this.answer = answer;
        this.questionNo = questionNo;
    }

    writeQuestionToHTML() {
        this.questionParagraph = document.createElement("p");
        this.questionParagraph.classList.add("questionNo" + this.questionNo);
        this.questionParagraph.classList.add("fqaQuestion");
        this.questionParagraph.setAttribute("id", "questionNo" + this.questionNo);
        this.questionParagraph.innerText = this.question;
    }

    writeAnswerToHTML() {
        this.answerParagraph = document.createElement("p");
        this.answerParagraph.classList.add("answerNo" + this.questionNo);
        this.answerParagraph.classList.add("fqaAnswer");
        this.answerParagraph.setAttribute("id", "answerNo" + this.questionNo);
        this.answerParagraph.innerText = this.answer;
    }
    print() {
        alert(this.question);
    }
}

const fqaNo1 = new fqa("a", "b", 1);
const fqaNo2 = new fqa("c", "d", 2);
const fqaNo3 = new fqa("e", "f", 3);
const fqaNo4 = new fqa("g", "h", 4);
const fqaNo5 = new fqa("i", "j", 5);
const fqaNo6 = new fqa("l", "l", 6);
const fqaNo7 = new fqa("m", "n", 7);
const fqaNo8 = new fqa("p", "q", 8);
const fqaArray = [
    fqaNo1,
    fqaNo2,
    fqaNo3,
    fqaNo4,
    fqaNo5,
    fqaNo6,
    fqaNo7,
    fqaNo8,
];

let article = document.createElement("article");

for (i = 0; i < fqaArray.length; i++) {
    fqaArray[i].writeQuestionToHTML();
    fqaArray[i].writeAnswerToHTML();
    article.append(fqaArray[i].questionParagraph);
    article.append(fqaArray[i].answerParagraph);
}

body.append(article);




















// fqaArray.forEach(element => {
//   element.writeQuestionToHTML;
//   element.writeAnswerToHTML;
// });



// const fqaMap = new Map([
//     [
//         "چند روز بعد از ثبت سفارش استیکر ها ارسال میشن؟",
//         "بسته به زمان ثبت سفارش بین 3 تا 9 روز کاری بعد سفارشتون ارسال میشه و کد رهگیری 24 رقمی پستی خدمتتون پیامک میشه",
//     ],
//     [
//         "چند روز زمان میبره تا استیکر ها به دستمون برسند؟",
//         "وابسته به موقعیت سکونتتون در کشور، بین 3 تا 8 روز کاری بعد از ارسال کد رهگیری 24 رقمی، بستتون به دستتون میرسه به طور کلی، با توجه به زمان انتظار آماده سازی قبل از ارسال، بین 6 تا 17 روز استیکر ها به دستتون می رسند.",
//     ],
//     [
//         "اگه استیکر ها رو پشت قاب گوشی بچسبونیم که به طور مداوم دست باهاش برخورد می‌کنه مشکلی پیش نمیاد؟",
//         "خیر، تمامی استیکر ها مقاوم در برابر هرگونه تعریق و سایش های سطحی هستند و لایه لمینت پوشاننده رویه آنها از خط و خش های جزئی جلوگیری می‌کند.",
//     ],
//     [
//         "میشه استیکر ها رو بعد از یک بار چسبوندن جابه جا کرد؟",
//         "بله، درصورتی که استیکر ها رو در جایی کاملا تمیز و فاقد آلودگی چسبانده باشید می‌توانید با احتیاط آن را جابه‌جا کنید. البته توجه داشته باشید که چسبندگی آن مانند بار اول بالا نیست اما هنوز از چسبندگی قابل قبولی برخوردار است.",
//     ],
//     [
//         "بعضی اوقات توی استفاده مداوم و برخورد مکرر با دست، لبه های ظریف تر، لایه لمینت اون بلند میشه، اون موقع چیکار کنیم؟",
//         "شما می توانید به آرامی لایه لمینت را جدا کرده و از خود استیکر در ادامه استفاده کنید.",
//     ],
//     [
//         "طرح های دلخواه خودمون هم میتونیم سفارش بدیم؟",
//         "بله، به طور کلی طرح های انتخابیتون باید دارای کیفیت و وضوح مطلوب باشند و بعد از تایید توسط تیم پشتیبانی فرآیند چاپ و ارسال آنها صورت می‌گیرد.",
//     ],
//     [
//         "استیکر ها با قیچی برش خوردن؟",
//         "خیر، استیکر ها با کاتر پلاتر، با دقت بسیار بالا و تمام اتوماتیک برش خورده اند.",
//     ],
//     [
//         "درصورت عدم رضایت چیکار کنیم؟",
//         "بعد از تحویل مرسوله در صورت عدم استفاده می‌توانید مرسوله خود را مرجوع کنید.",
//     ],
// ]);

// for (i = 0; i < fqaMap.size; i++) {
//     let article = document.createElement('article');
//     let questionParagraph = document.createElement('p');
//     questionParagraph.classList.add("questionNo${i}");
//     questionParagraph.innerText = fqaMap[i];
//     article.append(questionParagraph);
//     body.append(article);
// }

// let answerParagraph = document.createElement("p");
// answerParagraph.classList.add("answerNo${i}");
// answerParagraph.innerText = fqaMap.get(i);
// article.append(answerParagraph);

for (i = 0; i < fqaMap.size; i++) {
    let article = document.createElement("article");
    article.classList.add("fqaNo${i}");
    let questionParagraph = document.createElement("p");
    questionParagraph.classList.add("questionNo${i}");
    questionParagraph.innerText = fqaMap[i];
    let answerParagraph = document.createElement("p");
    answerParagraph.classList.add("answerNo${i}");
    answerParagraph.innerText = fqaMap.get(i);
    article.append(questionParagraph);
    article.append(answerParagraph);
    body.append(article);
}

// fqaMap.forEach((value, key, fqaMap) => {
//   let article = document.createElement("article");
//   article.classList.add("fqaNo${i}");
//   // add an id to it
//   let questionParagraph = document.createElement("p");
//   questionParagraph.classList.add("questionNo${key}");
//   questionParagraph.innerText = fqaMap[i];
//   let answerParagraph = document.createElement("p");
//   answerParagraph.classList.add("answerNo${value}");
//   answerParagraph.innerText = fqaMap.get(i);
//   article.append(questionParagraph);
//   article.append(answerParagraph);
//   body.append(article);
// });