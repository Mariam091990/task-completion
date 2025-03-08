document.getElementById("shop-btn").addEventListener("click",function(){
 alert("board updated successfully");


// const TaskNumber= getInnerTextById("task-number");
// const completedTask = getInnerTextById("completed-task");
// const assignTask= TaskNumber - 1;
// const submitTask=completedTask + 1;
// // console.log (assignTask , submitTask );

// setInnerTextByIdandValue ("task-number",assignTask );
// setInnerTextByIdandValue ("completed-task",submitTask );

//  const shopBtn=document.getElementById("shop-btn")
const TaskNumber= document.getElementById("task-number").innerText;
const convertedTaskNumber=parseInt(TaskNumber);
const completedTask=document.getElementById("completed-task").innerText; 
const convertedCompletedTask=parseInt(completedTask);
const assignTask= convertedTaskNumber - 1;
const submitTask=convertedCompletedTask + 1;
// console.log (assignTask , submitTask );
document.getElementById("task-number").innerText=assignTask;
document.getElementById("completed-task").innerText=submitTask; 

document.getElementById("shop-btn").disabled = true;
// shopBtn.disabled.style.display='gray';
// const x=document.getElementById("shop-btn").disabled;

const activity=document.getElementById("activity-log");
const p=document.createElement("p");
p.innerText=`
you have completed the task fix mobile issue on`;

const d = new Date();
document.getElementById("date").innerHTML = d;
activity.appendChild(p).appendChild(d);
})

// cloudSync

document.getElementById("cloud-btn").addEventListener("click",function(){
    alert("board updated successfully");

const TaskNumber= document.getElementById("task-number").innerText;
const convertedTaskNumber=parseInt(TaskNumber);
const completedTask=document.getElementById("completed-task").innerText; 
const convertedCompletedTask=parseInt(completedTask);
const assignTask= convertedTaskNumber - 1;
const submitTask=convertedCompletedTask + 1;

document.getElementById("task-number").innerText=assignTask;
document.getElementById("completed-task").innerText=submitTask; 

document.getElementById("cloud-btn").disabled = true;

const activity=document.getElementById("activity-log");
const p=document.createElement("p");
p.innerText=`
you have completed the task Add Dark Mode issue on`;

const e = new Date();
document.getElementById("date").innerHTML = e;
activity.appendChild(p).appendChild(e);

})


// SwiftPay

document.getElementById("swift-btn").addEventListener("click",function(){
    alert("board updated successfully");

 const TaskNumber= document.getElementById("task-number").innerText;
const convertedTaskNumber=parseInt(TaskNumber);
const completedTask=document.getElementById("completed-task").innerText; 
const convertedCompletedTask=parseInt(completedTask);
const assignTask= convertedTaskNumber - 1;
const submitTask=convertedCompletedTask + 1;

document.getElementById("task-number").innerText=assignTask;
document.getElementById("completed-task").innerText=submitTask; 

document.getElementById("swift-btn").disabled = true;

const activity=document.getElementById("activity-log");
const p=document.createElement("p");
p.innerText=`
you have completed the task Optimize Home page issue on`;

const f = new Date();
document.getElementById("date").innerHTML = f;
activity.appendChild(p).appendChild(f);

})


// meta

document.getElementById("meta-btn").addEventListener("click",function(){
    alert("board updated successfully");

    const TaskNumber= document.getElementById("task-number").innerText;
    const convertedTaskNumber=parseInt(TaskNumber);
    const completedTask=document.getElementById("completed-task").innerText; 
    const convertedCompletedTask=parseInt(completedTask);
    const assignTask= convertedTaskNumber - 1;
    const submitTask=convertedCompletedTask + 1;
    
    document.getElementById("task-number").innerText=assignTask;
    document.getElementById("completed-task").innerText=submitTask; 
    
    document.getElementById("meta-btn").disabled = true;
    
    const activity=document.getElementById("activity-log");
    const p=document.createElement("p");
    p.innerText=`
    you have completed the task Add Dark MAdd new emoji 🤲 issue on`;
    
    const g = new Date();
    document.getElementById("date").innerHTML = g;
    activity.appendChild(p).appendChild(g);


})



// googleLLc

document.getElementById("google-btn").addEventListener("click",function(){
    alert("board updated successfully");

    const TaskNumber= document.getElementById("task-number").innerText;
    const convertedTaskNumber=parseInt(TaskNumber);
    const completedTask=document.getElementById("completed-task").innerText; 
    const convertedCompletedTask=parseInt(completedTask);
    const assignTask= convertedTaskNumber - 1;
    const submitTask=convertedCompletedTask + 1;
    
    document.getElementById("task-number").innerText=assignTask;
    document.getElementById("completed-task").innerText=submitTask; 
    
    document.getElementById("google-btn").disabled = true;
    
    const activity=document.getElementById("activity-log");
    const p=document.createElement("p");
    p.innerText=`
    you have completed the task Integrate OpenAI API issue on`;
    
    const h = new Date();
    document.getElementById("date").innerHTML = h;
    activity.appendChild(p).appendChild(h);


})

// glassdoar

document.getElementById("glassdoar-btn").addEventListener("click", function(){
alert("congrates!!you have completed all the current tasks");

const TaskNumber= document.getElementById("task-number").innerText;
    const convertedTaskNumber=parseInt(TaskNumber);
    const completedTask=document.getElementById("completed-task").innerText; 
    const convertedCompletedTask=parseInt(completedTask);
    const assignTask= convertedTaskNumber - 1;
    const submitTask=convertedCompletedTask + 1;
    
    document.getElementById("task-number").innerText=assignTask;
    document.getElementById("completed-task").innerText=submitTask; 
    
    document.getElementById("glassdoar-btn").disabled = true;
    
    const activity=document.getElementById("activity-log");
    const p=document.createElement("p");
    p.innerText=`
    you have completed the task Improve Job searching issue on`;
    
    const i = new Date();
    document.getElementById("date").innerHTML = i;
    activity.appendChild(p).appendChild(i);






})




document.getElementById("clr-history").addEventListener("click",function(){
    
    const activity=document.getElementById("activity-log");
    activity.style.display ='none';
    const curDate=document.getElementById("date")
    curDate.style.display='none';




})