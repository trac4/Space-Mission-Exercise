// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

let oneTimeTasks = [];
let monitoringTaskId;
function test () {
	console.log('fueling rocket');
}


// Task 2: Add One-Time Task Function
// **NOTE: in order for code to actually run, the func must NOT have parentheses added**
//example of what NOT to do: function example() {} -> addOneTime Task (example(), 4000)
//example of what TO do: function example() {} -> addOneTime Task (example, 4000)

function addOneTimeTask (func, delay)
{
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
	
	//**func** and **delay** passed in here CAN be treated like keys
	oneTimeTasks.push({
		func, delay
	})
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
	for(let i = 0; i < oneTimeTasks.length; i++){
		setTimeout(oneTimeTasks[i].func, oneTimeTasks[i].delay);
	}

}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.

	monitoringTaskId = setInterval(function(){console.log('task still operating')}, 7500);
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
	clearInterval(monitoringTaskId);
	console.log('task completed');
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.

	duration++;

	console.log('everything has been set');
	console.log("Launch will take place in t-minus...");
	let countdown = setInterval(function() {
		duration--;
		if(duration >= 2) console.log(duration);
		if (duration < 2) {
			clearInterval(countdown);
			console.log(`${duration}... lift off!`);
		}
	},1000);

	// if (duration < 0) {
	// 	clearInterval(countdown);
	// 	console.log(liftoff);
	// }
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{	
	
	console.log('preparing mission');
	// addOneTimeTask(test,5500);
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.

	runOneTimeTasks();

	startMonitoring();
	// stopMonitoring();
	
	startCountdown(5);
}

// scheduleMission(); // Starts the mission.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTasks() {
  
let v1 = 'start'; let v2 = 'mid'; let v3 = 'end';
let v_arr = [v1,v2,v3];


	for(v of v_arr) {
		console.log(v);
		await delay(1500);
	}
}
