const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
Shery.mouseFollower(); 

//gsap animation

gsap.from(".nlink",{
    stagger : .1,
    y:22,
    duration : 2,
    ease:Power3,
    opacity:0

})

gsap.from( ".anim2",{
    y:40,
    duration : 2,
    ease:Expo,
    opacity:0
})
gsap.from("#imgntext img",{
    y : "70",
    duration : 1,
    opcity : 0,
    ease :Expo
})

Shery.textAnimate("#heading h1", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2 ,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
Shery.imageEffect("#imgntext img",{
    style:4,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.38,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.85,"range":[0,5]},"uFrequency":{"value":7.36,"range":[0,10]},"geoVertex":{"range":[1,64],"value":11.41},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

// Shery.imageEffect(".imgff img",{
//     style : 3,
//     config : {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":16.53,"range":[0,100]},"uFrequencyZ":{"value":4.13,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9599608794863669},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
   
// })

Shery.makeMagnet(".nlink" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

Shery.imageEffect("#bimg ",{
    style : 5,
   config : {"a":{"value":2,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.6918234587282917},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.199899,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey : true
   
})

document.querySelector(" #ftext button" )
.addEventListener("mouseover" , function(){
   gsap.to("#future video",{
    opacity : 1,
    duration : 1.4,
    ease : Power4

   })
})
document.querySelector(" #ftext button" )
.addEventListener("mouseleave" , function(){
    gsap.to("#future video",{
        opacity : 0,
        duration : 1,
        ease : Power4
    
       })
    
})
