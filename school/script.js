var work_shown = false;

function get_value(id) {
    value = document.getElementById(id).value;
    if (value === "") {
        value = 0;
    }

    return value;
}

function update_result() {
    update();
}

function show_hide_work(hide = false) {
    if (work_shown || hide) {
        document.getElementById("work").style.display = 'none';
        document.getElementById("workbutton").innerHTML = "Show Work";
        work_shown = false;
    } else {
        document.getElementById("work").style.display = 'block';
        document.getElementById("workbutton").innerHTML = "Hide Work";
        work_shown = true;
    }
}

async function reset_mathjax(id){
    let mathDiv = document.getElementById(id);
    await MathJax.startup.promise // make sure initial typesetting has taken place
    MathJax.typesetClear([mathDiv]) // clear MathJax awareness of this element
    await MathJax.typesetPromise([mathDiv]) // typeset anew
}

async function update() {
    let x1 = get_value("x1");
    let y1 = get_value("y1");
    let x2 = get_value("x2");
    let y2 = get_value("y2");
    let rise = y1 - y2;
    let run = x1 - x2;
    let distance = Math.sqrt(rise ** 2 + run ** 2);
     
    show_hide_work(true);

    document.getElementById("result").innerHTML = distance;
    let data = [{
        x: [x1, x2],
        y: [y1, y2],
        type: 'scatter'
    }];

    work_shown = false;
    document.getElementById("work").style.display = 'none';
      
    Plotly.newPlot('plot', data);

    document.getElementById("run").innerHTML = `$$ ${x1} - ${x2} = ${run} $$`
    document.getElementById("rise").innerHTML = `$$ ${y1} - ${y2} = ${rise} $$`
    document.getElementById("pt").innerHTML = `$$ \\sqrt{${run}^2 + ${rise}^2} = ${distance} $$`

    let mx1 = parseInt(document.getElementById("mx1"));
    let my1 = parseInt(document.getElementById("my1"));
    let mx2 = parseInt(document.getElementById("mx2"));
    let my2 = parseInt(document.getElementById("my2"));

    let x_result = (mx1 + mx2)/2;
    let y_result = (my1 + my2)/2;

    document.getElementById("mr").innerHTML = `(${x_result}, ${y_result})`;
    console.log(`(${x_result}, ${y_result})`);

    await reset_mathjax("run");
    await reset_mathjax("rise");
    await reset_mathjax("pt");

    // Midpoint

    
}

update_result();