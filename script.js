var button = $("#submit");
button.on('click', generateQuote)

function generateQuote() {
	event.preventDefault();
	//console.log("Here's your quote!")
    var inspoQuotes = [ "There is a crack in everything, that's how the light gets in.", "If you are broken, you do not have to stay broken.", "There is hope, even when your brain tells you there isn’t.", "Not until we are lost do we begin to understand ourselves.", "The best way out is always through.", "Don’t believe everything you think.", "It is during our darkest moments that we must focus to see the light.", "Just when the caterpillar thought the world was ending, he turned into a butterfly.", "If you can’t fly, run. If you can’t run, walk. If you can’t walk, crawl, but by all means, keep moving.", "Everything will be ok in the end. If it’s not ok, it’s not the end!", "The future belongs to those who believe in the beauty of their dreams.","Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind!", "Always be a first-rate version of yourself, instead of a second-rate version of someone else.", "The darkest night is often the bridge to the brightest tomorrow.", "When everything seems to be going against you, remember…the airplane takes off against the wind, not with it.", "Problems are only opportunities with thorns on them.", "Talk to yourself like you would talk to someone you love.", "Every storm runs out of rain.", "Confidence is not 'they will like me,' it's 'i'll be fine if they dont.'", "Every hour deserves to be happy.", "Follow that dream.", "Live a life you will remember.", "One of the greatest prisons people live in is the fear of what other people think.", "Stay positive!", "The world is your oyster.", "It's okay to not be okay!", "You are not alone.", "Your feelings are valid.", "Everything that you are, is enough.", "Hey warrior, keep going!", "You are amazing. Remember that.", "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", "Mental health is not a destination, but a process."] 

    var quotes = document.getElementById ("quotes");
    var randomQuote = inspoQuotes [Math.floor(Math.random() * inspoQuotes.length)];
    var message = $("#quotes");
    message.text(randomQuote);
}


var questionCount = 0;
var birdScore = 0;
var dogScore = 0;
var catScore = 0;
var rabbitScore = 0;

//got variables
var q1a1Btn = $('.q1a1');
var q1a2Btn = $('.q1a2');
var q1a3Btn = $('.q1a3');
var q1a4Btn = $('.q1a4');

var q2a1Btn = $('.q2a1');
var q2a2Btn = $('.q2a2');
var q2a3Btn = $('.q2a3');
var q2a4Btn = $('.q2a4');

var q3a1Btn = $('.q3a1');
var q3a2Btn = $('.q3a2');
var q3a3Btn = $('.q3a3');
var q3a4Btn = $('.q3a4');

//event listeners
q1a1Btn.on("click", bird);
q1a2Btn.on("click", rabbit);
q1a3Btn.on("click", cat);
q1a4Btn.on("click", dog);

q2a1Btn.on("click", bird);
q2a2Btn.on("click", cat);
q2a3Btn.on("click", dog);
q2a4Btn.on("click", rabbit);

q3a1Btn.on("click", dog);
q3a2Btn.on("click", cat);
q3a3Btn.on("click", bird);
q3a4Btn.on("click", rabbit);

//disable event listener
q1a1Btn.on("click", disableQ1);
q1a2Btn.on("click", disableQ1);
q1a3Btn.on("click", disableQ1);
q1a4Btn.on("click", disableQ1);

q2a1Btn.on("click", disableQ2);
q2a2Btn.on("click", disableQ2);
q2a3Btn.on("click", disableQ2);
q2a4Btn.on("click", disableQ2);

q3a1Btn.on("click", disableQ3);
q3a2Btn.on("click", disableQ3);
q3a3Btn.on("click", disableQ3);
q3a4Btn.on("click", disableQ3);

function disableQ1() {
    $(".q1a1").attr("disabled", true);
    $(".q1a2").attr("disabled", true);
    $(".q1a3").attr("disabled", true);
    $(".q1a4").attr("disabled", true);
}

function disableQ2() {
    $(".q2a1").attr("disabled", true);
    $(".q2a2").attr("disabled", true);
    $(".q2a3").attr("disabled", true);
    $(".q2a4").attr("disabled", true);
}

function disableQ3() {
    $(".q3a1").attr("disabled", true);
    $(".q3a2").attr("disabled", true);
    $(".q3a3").attr("disabled", true);
    $(".q3a4").attr("disabled", true);
}

function dog(){
    dogScore += 1;
    questionCount += 1
    if (questionCount >= 3) {
        updateResult();
    };
};

function cat(){
    catScore += 1;
    questionCount += 1
    if (questionCount >= 3) {
        updateResult();
    };
};

function bird(){
    birdScore += 1;
    questionCount += 1
    if (questionCount >= 3) {
        updateResult();
    };
};

function rabbit(){
    rabbitScore += 1;
    questionCount += 1
    console.log(rabbitScore)
    if (questionCount >= 3) {
        updateResult();
    };
};


var animalResult = $(".animalResult");
var descriptionResult = $(".descriptionResult");

function updateResult(){
    if (dogScore >= 2){
        animalResult.text("You should get a dog!");
        descriptionResult.text("You have a big budget and spend a good amount of time outdoors. Why not spend it with a dog?");
    } else if(catScore >=2){
        animalResult.text("You should get a cat!");
        descriptionResult.text("You spend enough time outside but likely enjoy alone time and a cat will give you just that.");
    } else if(rabbitScore >=2){
        animalResult.text("You should get a rabbit!");
        descriptionResult.text("You have an average budget and have a lot of free time. You don't get overly attached to things, which may be helpful later on.");
    } else if (birdScore >= 2){
        animalResult.text("You should get a bird!");
        descriptionResult.text("Birds are low maintainance and cheap!");
    } else{
        animalResult.text("none of the above!");;

    };
};

// reatake button
var retakeBtn = $('.retakeQuiz');
retakeBtn.on("click", retakeQuiz);

function retakeQuiz(){
    //result.innerHTML = "";
    questionCount = 0;
    birdScore = 0;
    dogScore = 0;
    catScore = 0;
    rabbitScore = 0;
    animalResult.text(" ");
    descriptionResult.text(" ");
    $(".q1a1").attr("disabled", false);
    $(".q1a2").attr("disabled", false);
    $(".q1a3").attr("disabled", false);
    $(".q1a4").attr("disabled", false);
    $(".q2a1").attr("disabled", false);
    $(".q2a2").attr("disabled", false);
    $(".q2a3").attr("disabled", false);
    $(".q2a4").attr("disabled", false);
    $(".q3a1").attr("disabled", false);
    $(".q3a2").attr("disabled", false);
    $(".q3a3").attr("disabled", false);
    $(".q3a4").attr("disabled", false);
}