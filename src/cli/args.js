const parseArgs = () => {
    const args = process.argv;
    let s = '';
    for (let i = 2; i < args.length; i++) {
        if (!args[i].startsWith('--')) continue;

        s += `${args[i].slice(2)} is ${args[i + 1]}, `;
    }

    return s.slice(0, -2);
};

const s = parseArgs();

console.log(s);
