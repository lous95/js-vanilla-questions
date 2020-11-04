
window.onload = function () {

    //You need to select questions section

    var questionSection = document.querySelector('.section-center');


    myQuestion.forEach(function (q) {
        //add this quetsion with its own html to the questions sections. 

        var articleQuestion = document.createElement('article');
        articleQuestion.classList.add('question');
        var titleOfQuestion = document.createElement('div');
        titleOfQuestion.classList.add('question-title');

        var articleHiddenId = document.createElement('input');
        articleHiddenId.type = "hidden";
        articleHiddenId.classList.add("hidden-input");
        articleHiddenId.value = q.id;
        articleQuestion.appendChild(articleHiddenId);


        var textOfQuestion = document.createElement('P');
        textOfQuestion.innerText = q.questionTitle;
        titleOfQuestion.appendChild(textOfQuestion);

        var buttonOfQuestion = document.createElement('button');
        buttonOfQuestion.type = "button";
        buttonOfQuestion.classList.add("question-btn");
        titleOfQuestion.appendChild(buttonOfQuestion);

        var plusButton = document.createElement('span');

        plusButton.classList.add('plus-icon');
        plusButton.innerHTML = '<i class="far fa-plus-square" id="expand"></i>';
        buttonOfQuestion.appendChild(plusButton);

        var minusButton = document.createElement('span');

        minusButton.classList.add('minus-icon');
        minusButton.innerHTML = '<i class="far fa-minus-square" id="collapse"></i>'
        buttonOfQuestion.appendChild(minusButton);

        titleOfQuestion.appendChild(buttonOfQuestion);

        articleQuestion.appendChild(titleOfQuestion);

        var answerOfQuestionSection = document.createElement('div');
        answerOfQuestionSection.classList.add('question-text');

        var answerOfQuestion = document.createElement('p');
        answerOfQuestion.innerText = q.questionAnswer;

        answerOfQuestionSection.appendChild(answerOfQuestion);

        articleQuestion.appendChild(answerOfQuestionSection);


        questionSection.appendChild(articleQuestion);


        buttonOfQuestion.addEventListener('click', function (e) {

            var articles = document.querySelectorAll('.question');
            const Clickedbutton = e.currentTarget;
            const articleOfClickButton = Clickedbutton.parentElement.parentElement;
            const theHiddenIdOfTheArticle = articleOfClickButton.childNodes[0].value;
            
            (function expandQuestions(){
            if (e.target.id === "expand") {
                if (theHiddenIdOfTheArticle % 2 == 0) {
                    articles.forEach(function (article) {
                        if (article.childNodes[0].value % 2 == 0) {
                            article.classList.toggle("show-text");
                        }
                        else{
                            article.classList.remove("show-text");
                        }
                    })
                }
                else {
                    articles.forEach(function (article) {
                        if (article.childNodes[0].value % 2 == 1) {
                            article.classList.toggle("show-text");
                        }
                        else{
                            article.classList.remove("show-text");
                        }
                    })

                }
            }
            if (e.target.id === "collapse") {
                if (theHiddenIdOfTheArticle % 2 == 0) {
                    articles.forEach(function (article) {
                        if (article.childNodes[0].value % 2 == 0) {
                            article.classList.remove("show-text");
                        }
                    })
                }
                else {
                    articles.forEach(function (article) {
                        if (article.childNodes[0].value % 2 == 1) {
                            article.classList.remove("show-text");
                        }
                    })
                }
            }
            })();
        }) 

    });
}



function QuestionModel(id, questionTitle, questionAnswer, showText) {
    this.id = id;
    this.questionTitle = questionTitle;
    this.questionAnswer = questionAnswer;
    this.showText = showText;
}


var myQuestion = [
    new QuestionModel(1, "do you accept all major credit cards?",
        "We do accept all kind of credit cards", false),
    new QuestionModel(2, "Do you have 24/7 support",
        "You can contact us any time, we provide 24/7 support", false),
    new QuestionModel(3, "Do you provide coupons for customers?",
        "we give free coupons from time to time", false),
    new QuestionModel(4, "Do you give any discounts?",
        "Next to each item we show", false)
];




