const parseArgs = () => {
    const args = process.argv;
    let s = '';
    for (let i = 2; i < args.length; i++) {
        s += i % 2 == 0 ? args[i].slice(2) : ` is ${args[i]}, `;
    }
    console.log(s.slice(0, -2));
};

parseArgs();
