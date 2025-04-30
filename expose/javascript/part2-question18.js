let d = new Date();

function print_time() {
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(print_time, 1000);