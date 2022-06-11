function start(){
    navigator.mediaDevices({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JqwmG1y0r/",model_ready)
};

function model_ready(){
    classifier=classify(got_result);
}

function got_result(){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        ramdom_r=Math.floor(Maths.random()*255)+1;
        ramdom_g=Math.floor(Maths.random()*255)+1;
        ramdom_b=Math.floor(Maths.random()*255)+1;
        document.getElementById("no_of_times_detected_dog").innerHTML="Detected Dog"+results[0].label;
        document.getElementById("no_of_times_detected_cat").innerHTML="Detected Cat"+results[0].label;
        document.getElementById("no_of_times_detected_dog").style.color ="rgb("+random_r+","+random_g+","+ramdom_b+")";
        document.getElementById("no_of_times_detected_cat").style.color ="rgb("+random_r+","+random_g+","+ramdom_b+")";

    img1=document.getElementById("dog");
    img2=document.getElementById("cat");
    img3=document.getElementById("cow");
    img4=document.getElementById("lion");
    img5=document.getElementById("backgroud_noise");

    if (results[0].label=="barking") {
     img1.src='dog.gif';
     img2.src='cat.jpeg'; 
     img3.src='cow.jpeg'; 
     img4.src='lion.jpeg'; 
     img5.src='background_noise';  
    }
   else if (results[0].label=="mooing") {
        img1.src='dog.png';
        img2.src='cat.jpeg'; 
        img3.src='cow.gif'; 
        img4.src='lion.jpeg';  
        img5.src='background_noise';
       }
      else if (results[0].label=="meowing") {
        img1.src='dog.png';
        img2.src='cat gif.gif'; 
        img3.src='cow.jpeg'; 
        img4.src='lion.jpeg';
        img5.src='background_noise';  
       }
       else if (results[0].label=="roaring") {
        img1.src='dog.png';
        img2.src='cat.jpeg'; 
        img3.src='cow.jpeg'; 
        img4.src='lion.gif';
        img5.src='background_noise';  
       }
       else  {
        img1.src='dog.png';
        img2.src='cat.jpeg'; 
        img3.src='cow.jpeg'; 
        img4.src='lion.jpeg';  
        img5.src='background_noise.gif';
       }
}
    }
