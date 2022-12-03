const parseEnv = () => {
    let s = '';
    for (const env in process.env) {
        if (!env.startsWith('RSS_')) continue;
        s += `${env}=${process.env[env]}; `;
    }
    return s.slice(0, -2);
};

const s = parseEnv();

console.log(s);
