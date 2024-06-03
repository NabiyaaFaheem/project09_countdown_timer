import inquirer from "inquirer";
 async function countdownTimer(){
    const{duration} = await inquirer.prompt([
        {
          type:"number",
          name:"duration",
          message:"enter the duration of a countdown in seconds",
          validate:(input)=>{
            if(input <= 0){
                return 'please enter a positive Number';
            }
            return true
          },
        },
    ]);
    let seconds = duration;
    const interval = setInterval(()=>{
        seconds--;
        if(seconds >=0 ){
            console.clear()
            console.log(`countdown: ${seconds}s`)
        }else{
            clearInterval(interval)
            console.log("countdown complete")
        }
    },1000)


}
countdownTimer()
//countdowntimercompleted