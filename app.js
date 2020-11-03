
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
            console.log(e);
        
            console.log(e.target.id);
            const button = e.currentTarget;
            const article = button.parentElement.parentElement;
            const articleHiddenId = article.childNodes[0].value;
            if (articleHiddenId % 2 == 0) {
                myQuestion.forEach(function (n) {
                    if (n.id % 2 == 0) {
                        n.showText = true;
                    }
                })
            }
            else {
                myQuestion.forEach(function (n) {
                    if (n.id % 2 == 1) {
                        n.showText = true;
                    }
                })
            }

            
            var articles = document.querySelectorAll('.question');
            myQuestion.forEach(function(question){
                if(question.showText == true){
                  
                    articles.forEach(function(article){
                        if(article.childNodes[0].value == question.id){
                            article.classList.toggle("show-text")
                        }
                    })


                }
            })
            
            // myQuestion.forEach(function (n) {
            //     $(document).ready(function () {
            //         var articles = $('article');
            //         if (n.showText === true) {

            //             console.log(n);
            //             for (let index = 0; index < articles.index; index++) {
            //                 console.log(articles[0]);
            //                 // if (articles[index].children[0].value == n.id) {
            //                 //     articles[index].classList.toggle('show-text');
            //                 // }
            //             }
            //         }
            //     })
        
            // })
        })

        myQuestion.forEach(function(resetQuestion){
            resetQuestion.showText = false;
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




