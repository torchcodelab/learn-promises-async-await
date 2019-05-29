const isVacation = true;

// Promise 1
const willSeanGoToWDW = new Promise(
    (resolve, reject) => {
        if (isVacation) {
            const parks = {
                first: 'The Magic Kingdom',
                second: 'Epcot'
            };
            resolve(parks);
        } else {
            const rejection = new Error(`It's not vacation time yet.`);
            reject(rejection)
        }
    }
)

// Promise 2
async function letsGo(parks) {
    const message = `Sean is going to ${parks.first} and then ${parks.second}!!`;
    return Promise.resolve(message);
};

// call our promise chain...
async function askSean() {
    try {
        const goingToDisney = await willSeanGoToWDW;
        const message = await letsGo(goingToDisney);
        console.log(message);
    }
    catch(error) {
        console.log(error.message);
    }
};

askSean();