let clock = ()=>{
    let date= new Date()
    let hours= date.getHours()
    let mins= date.getMinutes()
    let sec= date.getSeconds()
    let status= hours<=12?'AM':'PM'
    status=='PM'&&(hours-=12)



    let time=`${hours}:${mins}:${sec} <span>${status}</span>`
    DClock.innerHTML=time
    setTimeout(clock,1000)
}
clock()