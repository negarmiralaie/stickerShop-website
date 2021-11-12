const body = document.body;

class faq {
  question;
  answer;
  questionParagraph;
  answerParagraph;
  questionNo;
  icon;

  constructor(question, answer, questionNo) {
    this.question = question;
    this.answer = answer;
    this.questionNo = questionNo;
  }

  writeQuestionToHTML() {
    this.questionParagraph = document.createElement("p");
    this.questionParagraph.classList.add(
      "questionNo" + this.questionNo,
      "faqQuestionParagraph"
    );
    this.questionParagraph.setAttribute("id", "questionNo" + this.questionNo);
    this.questionParagraph.innerText = this.question;
    this.icon = document.createElement("i");
    this.icon.classList.add("fa", "fa-plus", "fa-1x", "addRemoveIcon");
    this.questionParagraph.append(this.icon);
  }

  writeAnswerToHTML() {
    this.answerParagraph = document.createElement("p");
    this.answerParagraph.classList.add(
      "answerNo" + this.questionNo,
      "faqAnswerParagraph"
    );
    this.answerParagraph.setAttribute("id", "answerNo" + this.questionNo);
    this.answerParagraph.innerText = this.answer;
  }
  print() {
    alert(this.question);
  }
}

const faqNo1 = new faq(
  "چند روز بعد از ثبت سفارش استیکر ها ارسال میشن؟",
  "بسته به زمان ثبت سفارش بین 3 تا 9 روز کاری بعد سفارشتون ارسال میشه و کد رهگیری 24 رقمی پستی خدمتتون پیامک میشه",
  1
);
const faqNo2 = new faq(
  "چند روز زمان میبره تا استیکر ها به دستمون برسند؟",
  "وابسته به موقعیت سکونتتون در کشور، بین 3 تا 8 روز کاری بعد از ارسال کد رهگیری 24 رقمی، بستتون به دستتون میرسه به طور کلی، با توجه به زمان انتظار آماده سازی قبل از ارسال، بین 6 تا 17 روز استیکر ها به دستتون می رسند.",
  2
);
const faqNo3 = new faq(
  "اگه استیکر ها رو پشت قاب گوشی بچسبونیم که به طور مداوم دست باهاش برخورد می‌کنه مشکلی پیش نمیاد؟",
  "خیر، تمامی استیکر ها مقاوم در برابر هرگونه تعریق و سایش های سطحی هستند و لایه لمینت پوشاننده رویه آنها از خط و خش های جزئی جلوگیری می‌کند.",
  3
);
const faqNo4 = new faq(
  "میشه استیکر ها رو بعد از یک بار چسبوندن جابه جا کرد؟",
  "بله، درصورتی که استیکر ها رو در جایی کاملا تمیز و فاقد آلودگی چسبانده باشید می‌توانید با احتیاط آن را جابه‌جا کنید. البته توجه داشته باشید که چسبندگی آن مانند بار اول بالا نیست اما هنوز از چسبندگی قابل قبولی برخوردار است.",
  4
);
const faqNo5 = new faq(
  "بعضی اوقات توی استفاده مداوم و برخورد مکرر با دست، لبه های ظریف تر، لایه لمینت اون بلند میشه، اون موقع چیکار کنیم؟",
  "شما می توانید به آرامی لایه لمینت را جدا کرده و از خود استیکر در ادامه استفاده کنید.",
  5
);
const faqNo6 = new faq(
  "طرح های دلخواه خودمون هم میتونیم سفارش بدیم؟",
  "بله، به طور کلی طرح های انتخابیتون باید دارای کیفیت و وضوح مطلوب باشند و بعد از تایید توسط تیم پشتیبانی فرآیند چاپ و ارسال آنها صورت می‌گیرد.",
  6
);
const faqNo7 = new faq(
  "استیکر ها با قیچی برش خوردن؟",
  "خیر، استیکر ها با کاتر پلاتر، با دقت بسیار بالا و تمام اتوماتیک برش خورده اند.",
  7
);
const faqNo8 = new faq(
  "درصورت عدم رضایت چیکار کنیم؟",
  "بعد از تحویل مرسوله در صورت عدم استفاده می‌توانید مرسوله خود را مرجوع کنید.",
  8
);
const faqArray = [
  faqNo1,
  faqNo2,
  faqNo3,
  faqNo4,
  faqNo5,
  faqNo6,
  faqNo7,
  faqNo8,
];

let article = document.getElementById("faqArticle");

let faqHeading = document.createElement("h3");
faqHeading.classList.add("faqHeading");
faqHeading.setAttribute("id", faqHeading);
faqHeading.innerText = "سوالات پرتکرار";
article.append(faqHeading);

for (i = 0; i < faqArray.length; i++) {
  let faqChildArticle = document.createElement("article");
  faqChildArticle.classList.add("faqChildArticle");
  faqArray[i].writeQuestionToHTML();
  faqArray[i].writeAnswerToHTML();
  faqChildArticle.append(faqArray[i].questionParagraph);
  faqChildArticle.append(faqArray[i].answerParagraph);
  article.append(faqChildArticle);
}

body.append(article);

const faqChildArticleObj = document.querySelectorAll(".faqChildArticle");
// making click event for faq part
Array.from(faqChildArticleObj).forEach(function (faqChild) {
  faqChild.addEventListener("click", (e) => {
    faqAnswer = faqChild.querySelector(".faqAnswerParagraph");
    // faqAnswer.style.display = "block";
    faqAnswer.classList.toggle("active");
    faqQuestion = faqChild.querySelector(".addRemoveIcon");
    faqQuestion.classList.toggle("fa-plus");
    faqQuestion.classList.toggle("fa-minus");
  });
});
let FolllowInstaAdd=document.getElementById("FolllowInstaAdd");
document.body.insertBefore(faqArticle, FolllowInstaAdd);
