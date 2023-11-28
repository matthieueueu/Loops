const print = console.log;

// //While Loop
// //Goes on forever until false
// let counter = 0;
    
// function loop(){
//     while(counter<10){
//         print("kvdskv")
//     }
// }


// // document.getElementById("while").innerText(loop())

// // For Loops
// //Runs x number of times


// for(var i=0; i<5;i++){
//     print("Cheerio")
//     print("Syndrome down but money up.")
// }

// //var i = 0 is declaring a variable

// //i<5 condition for loop to run

// //i++ increment


// let enemiesThatCrushedMe = [
//     "goose",
//     "A pretty big house cat (gotta say)",
//     "Gareth",
//     "nobody",
//     "no one person",
//     "kein individual",
//     "ain't no one",
// ]

// print("ENEMIES THAT CRUSHED ME")
// for(var i = 7; i>0;i--){
//     print(enemiesThatCrushedMe[i]);
// }

print("EXERCISE 1")
for(var i=0; i<5; i++){
    print("I love coding");
}

print("EXERCISE 2")

for(var i=0; i<6;i++){
    print(i);
}

print("EXERCISE 3")

for(var i=15; i<33;i=i+3){
    print(i);
}

print("EXERCISE 4")

for(var i=0;i<4;i++){
    for(var e=0; e<4;e++){
        document.querySelector(".loopOne").innerHTML += "📦"
    }
    document.querySelector(".loopOne").innerHTML += "<br>"
}
print("EXERCISE 5")


// for(var i=0;i<7;i++){
//     for(var e=0; e<7;e++){
//         document.querySelector(".loopTwo").innerHTML += "bone "
//         document.querySelector(".loopTwo").innerHTML += "<br>"
//     }

// }

for(var i=8; i>0; i--){
    for(var e=i;e<8; e++){
        document.querySelector(".loopTwo").innerHTML += "🦴 "
    }

    document.querySelector(".loopTwo").innerHTML += "<br>"    
}


for(var i=7; i>0; i--){
    
    for(var u=i; u>1;u--){
        document.querySelector(".loopThree").innerHTML += "~"
    }    

    for(var e=i;e<8; e++){
        document.querySelector(".loopThree").innerHTML += "📦 "
    }

    document.querySelector(".loopThree").innerHTML += "<br>"    
}



for(var i=5; i>0; i--){
    document.querySelector(".loopFour").innerHTML += "🗿 "
    document.querySelector(".loopFour").innerHTML += "<br> "
    for(var e=i;e<5; e++){
        document.querySelector(".loopFour").innerHTML += "🗿 "

    }
    document.querySelector(".loopFour").innerHTML += "<br> "
    
    for(var f=i; f<6;f++){
        document.querySelector(".loopFour").innerHTML += "🗿 "
    }
    document.querySelector(".loopFour").innerHTML += "<br> "

    for(var f=i; f<7;f++){
        document.querySelector(".loopFour").innerHTML += "🗿 "
    }
    document.querySelector(".loopFour").innerHTML += "<br> "

    for(var f=i; f<8;f++){
        document.querySelector(".loopFour").innerHTML += "🗿 "
    }

    document.querySelector(".loopFour").innerHTML += "<br>"
    document.querySelector(".loopFour").innerHTML += "<br> "

}


i = 7
u = 0
e = 7

// output
