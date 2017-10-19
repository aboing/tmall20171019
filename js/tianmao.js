{
let dians=document.querySelectorAll(".banner-circle1");
let imgs=document.querySelectorAll(".banner-bottom-imgBox");
let l=dians.length;
let bannerObj=document.querySelector(".banner");
dians.forEach(function(ele,index){
	ele.onclick=function(){
		for(let i=0;i<l;i++){
			dians[i].classList.remove("circle2");
			imgs[i].classList.remove("banneract");
		}
        ele.classList.add("circle2");
        imgs[index].classList.add("banneract");
        now=index;
	}
});

let now=0;
let st=setInterval(lunb,1500);//tmall开始

function lunb(){
 now++;
 if(now==l){
   now=0;
 }
 for(let i=0;i<l;i++){
			dians[i].classList.remove("circle2");
			imgs[i].classList.remove("banneract");
		}
        dians[now].classList.add("circle2");
        imgs[now].classList.add("banneract");
}
bannerObj.onmouseover=function(){
	clearInterval(st);
}
bannerObj.onmouseout=function(){
    st=setInterval(lunb,1000);
}
}
//tmall开始

// document.body.onclick=function(){
// 	let obj=document.body.scrollTop===0?document.documentElement:
// 	document.body;
// 	console.log(obj.scrollTop);
// }613

let obj;
{
    let tmall=document.querySelector(".tmall");
    let pinpaij=document.querySelector(".pinpaijie");
    let ppjTop=pinpaij.offsetTop;
    window.onscroll=function(){
    obj=document.body.scrollTop===0?
    document.documentElement:document.body;
       
       if(obj.scrollTop>=613){
           tmall.style.top="0";
       }else{
           tmall.style.top="-50px";
       }
      //   if(obj.scrollTop>=613){
      //       leftDW.style.opacity="1";
      //       if(obj.scrollTop>=ppjTop){
      //       tmall.style.opacity="1";
       // }
      //   }
      //   else if(obj.scrollTop<ppjTop){
      //       tmall.style.opacity="0";
      //       if(obj.scrollTop<613){
      //         leftDW.style.opacity="0";
      //       }
       // }
    }

  // let bigboxs=document.querySelectorAll(".bigBoxx .one");
  // let lefts=document.querySelectorAll(".leftDW span");
  // lefts.forEach(function(ele,index){
 //        ele.onclick=function(){
 //         let obj=document.body.scrollTop===0?
  //         document.documentElement:document.body;
 //         for(let i=0;i<lefts.length;i++){
 //               lefts[i].classList.remove("agren");
 //         }
 //         lefts[index].classList.add("agren");
 //            obj.scrollTop=bigboxs[index].offsetTop;
 //        }
  // });


 }
 //左侧导航栏开始
 {
	  let leftDW=document.querySelector(".leftDW");
    obj=document.body.scrollTop===0?
    document.documentElement:document.body;
     let btns=document.querySelectorAll(".leftDW span");
     let ones=document.querySelectorAll(".one");
     window.addEventListener("scroll",function(){
        if(obj.scrollTop>=613){
           leftDW.style.cssText="width:30px;height:296px";
            btns.forEach(function(ele,index){
                ele.onclick=function(){
                    let st=ones[index].offsetTop-50;
                    animate(obj,{scrollTop:st},1000);
                }
            });
        }else{
            leftDW.style.cssText="width:0;height:0";
        }
         for(let i=0;i<ones.length;i++){
             if(obj.scrollTop > ones[i].offsetTop){
                 for(let i=0;i<btns.length;i++){
                     btns[i].classList.remove("active");
                 }
                 btns[i].classList.add("active");
             }
         }
    });

}
//totop方法
