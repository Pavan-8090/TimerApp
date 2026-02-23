import open from "open";
import readline from "readline";

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});


rl.question("Enter the URL you want to open:",(url) => {
    rl.question("Enter the interval in seconds:",(seconds) => {
        
            const interval =parseInt(seconds) *1000;
            if(isNaN(interval) || interval <=0)
            {
                console.log("Invalid Interval");
                rl.close();
                return;
            }
            console.log(`Opening ${url} every ${seconds} seconds...`);
           //open url immudiatly
            open(url);

            //repet continuosuly
            setInterval(() => {
                open(url);
                console.log(`Opened ${url} at ${new Date().toLocaleTimeString()}`);
 
        },interval);
        rl.close();
    });
});